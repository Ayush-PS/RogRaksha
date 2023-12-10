import { motion } from "framer-motion";
import React, { useState } from "react";
import classes from "../Styles/AppointmentForm.module.css";

const AppointmentForm = () => {
  const [patientName, setPatientName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatientName("");
    setContactNumber("");
    setPreferredDate("");
    setPreferredTime("");
    setIsAppointmentBooked(true);
  };

  const resetForm = () => {
    setPatientName("");
    setContactNumber("");
    setPreferredDate("");
    setPreferredTime("");
    setIsAppointmentBooked(false);
  };

  return (
    <motion.div
      className={classes.appointmentFormWrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={classes.appointmentFormContainer}>
        <h2>Book an Appointment</h2>
        {isAppointmentBooked ? (
          <div>
            <p>Your appointment has been booked!</p>
            <button className={classes.bookAnotherBtn} onClick={resetForm}>
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className={classes.label}>
              Patient Name:
              <input
                className={classes.input}
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </label>
            <label className={classes.label}>
              Contact Number:
              <input
                className={classes.input}
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </label>
            <label className={classes.label}>
              Preferred Date:
              <input
                className={classes.input}
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
              />
            </label>
            <label className={classes.label}>
              Preferred Time:
              <input
                className={classes.input}
                type="time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                required
              />
            </label>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default AppointmentForm;
