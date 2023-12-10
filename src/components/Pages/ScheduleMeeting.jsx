// ScheduleMeeting.js
import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import { motion } from "framer-motion";
import classes from "../Styles/ScheduleMeeting.module.css";
const names = [
  "Dr Shree",
  "Dr Ajay",
  "Dr Vijay",
  "Dr Verma",
  "Dr Kirti",
  "Dr Sharma",
  "Dr Shivam",
  "Dr Shivani",
  "Dr Shivangi",
  "Dr Shivansh",
  "Dr Ayush",
];
const getRandomPart = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
};
const generateRandomMeetingLink = () => {
  return `https://meet.google.com/${getRandomPart()}${getRandomPart()}${getRandomPart()}-${getRandomPart()}${getRandomPart()}${getRandomPart()}${getRandomPart()}-${getRandomPart()}${getRandomPart()}${getRandomPart()}`;
};

const ScheduleMeeting = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [scheduledMeeting, setScheduledMeeting] = useState(null);

  const handleScheduleMeeting = () => {
    const randomMeetingLink = generateRandomMeetingLink();
    const formattedTime = format(new Date(time), "MMMM d, yyyy h:mm a");

    setScheduledMeeting({
      name,
      time: formattedTime,
      link: randomMeetingLink,
    });
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      className={classes.wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={classes["schedule-meeting-container"]}>
        <Typography
          variant="h4"
          gutterBottom
          color={"#052f58"}
          fontWeight={"600"}
          margin={"1rem"}
        >
          Schedule a Meeting
        </Typography>
        <TextField
          label="Description of problem"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Time"
          variant="outlined"
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleScheduleMeeting}
        >
          Schedule
        </Button>
        {scheduledMeeting && (
          <div className={classes["scheduled-meeting-info"]}>
            <Typography variant="h6" gutterBottom>
              Scheduled a Meeting With Doctor:
            </Typography>
            <Typography>
              Name: {names[Math.floor(Math.random() * names.length)]}
            </Typography>
            <Typography>
              Description of Problem:{scheduledMeeting.name}
            </Typography>
            <Typography>Time: {scheduledMeeting.time}</Typography>
            <Typography>
              Link:
              <a
                href={scheduledMeeting.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {scheduledMeeting.link}
              </a>{" "}
            </Typography>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ScheduleMeeting;
