import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../Pages/About";
import Medicine from "../Pages/Medicine";
import ScheduleMeeting from "../Pages/ScheduleMeeting";
import AppointmentForm from "../Pages/AppointmentForm";
import Home from "../Pages/Home";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Medicine" element={<Medicine />} />
        <Route path="/Meeting" element={<ScheduleMeeting />} />
        <Route path="/AppointmentForm" element={<AppointmentForm />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
