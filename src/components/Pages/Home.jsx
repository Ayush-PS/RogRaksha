import React from "react";
import classes from "../Styles/Home.module.css";
import About from "./About";
import { motion } from "framer-motion";
function Home() {
  function handleClick() {
    window.location.href = "/AppointmentForm";
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        className={classes.home}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={classes.th}>
          <h4>RogRaksha</h4>
          <h1>We are Committed to Your Best Health</h1>
          <p>
            Embrace the future with our comprehensive digital transformation
            services. We help businesses adapt to the ever-evolving digital
            landscape and stay ahead of the competition.With a focus on
            innovation and client satisfaction, we strive to deliver exceptional
            solutions.
          </p>
          <button onClick={handleClick} className={classes.btn}>
            Book an Appointment
          </button>
        </div>
      </motion.div>
      <About />
    </>
  );
}

export default Home;
