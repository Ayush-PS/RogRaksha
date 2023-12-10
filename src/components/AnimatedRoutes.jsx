import React from 'react'
import { Route, Routes,useLocation } from "react-router-dom";
import About from "./About";
import Medicine from "./Medicine";
import ScheduleMeeting from "./ScheduleMeeting";
import AppointmentForm from "./AppointmentForm";
import Home from "./Home";
import { AnimatePresence } from 'framer-motion';
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
  )
}

export default AnimatedRoutes