import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Medicine.Module.css';
import alarm from "../assets/alarm.mp3";
import { motion } from "framer-motion";

const Medicine = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const [taskName, setTaskName] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState(null);

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAlarmTimeChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const addTask = () => {
    if (taskName && alarmTime) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        time: alarmTime,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskName('');
      setAlarmTime('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleTaskCompletion = (task) => {
    setCompletedTask(task);
    playAudio(); // Play audio when a task is completed
  };

  const handleCloseModal = () => {
    setCompletedTask(null);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = moment().format('HH:mm:ss');

      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          const timeLeft = calculateTimeLeft(currentTime, task.time);

          if (timeLeft <= 0 && !task.completed) {
            handleTaskCompletion(task);
            deleteTask(task.id); // Automatically delete the task when time left reaches zero
            return { ...task, completed: true };
          }

          return { ...task, timeLeft };
        })
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const calculateTimeLeft = (currentTime, alarmTime) => {
    const currentMoment = moment(currentTime, 'HH:mm:ss');
    const alarmMoment = moment(alarmTime, 'HH:mm:ss');

    let timeLeftInSeconds = alarmMoment.diff(currentMoment, 'seconds');

    if (timeLeftInSeconds < 0) {
      timeLeftInSeconds += 24 * 3600;
    }

    return timeLeftInSeconds;
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const playAudio = () => {
    const audio = new Audio(alarm); // Replace with the path to your audio file
    audio.play();
  };

  return (
    <motion.div className={"msch"}initial="hidden"
    animate="visible"
    variants={containerVariants}
    transition={{ duration: 1, ease: 'easeInOut' }}>
      <h2>Medicine Scheduler</h2>
      <div >
        <label htmlFor="taskName">Medicine Name: </label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          placeholder='Medicine 1'
          onChange={handleTaskNameChange}
        />
      </div>
      <div>
        <label htmlFor="alarmTime">Set alarm Time (24hr format): </label>
        <input
          type="time"
          id="alarmTime"
          value={alarmTime}
          onChange={handleAlarmTimeChange}
        />
      </div>
      <button className={"btn"} onClick={addTask}>Add Medicine</button>
      <div>
        <h3>Medicines with Time Left:</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {`•  ${task.name} -  Time Left: ${formatTime(task.timeLeft)}`}
              {!task.completed && (
                <button className={"btndel"} onClick={() => deleteTask(task.id)}>Delete</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {completedTask && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <p>{`Time to take ${completedTask.name}!`}</p>
              <button className={"btn"} onClick={handleCloseModal}>Done</button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Medicine;
