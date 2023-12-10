import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimatedRoutes/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
