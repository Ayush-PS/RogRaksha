import "./App.css";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import { BrowserRouter as Router,  } from "react-router-dom";
import AnimatedRoutes from "./components/Helpers/AnimatedRoutes";

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
