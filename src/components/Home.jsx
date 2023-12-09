import React from "react";
import classes from "./Home.module.css";
import { Button } from "@mui/material";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.th}>
        <h4>RogRaksha</h4>
        <h1>We are Committed to Your Best Health</h1>
        <p>Embrace the future with our comprehensive digital transformation services.
              We help businesses adapt to the ever-evolving digital landscape and stay ahead of the competition.With a focus on innovation and client satisfaction,
          we strive to deliver exceptional solutions.</p>
          <button className={classes.btn}>Book an Appointment</button>
      </div>
    </div>
  );
}

export default Home;
