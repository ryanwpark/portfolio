import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Projects from "./pages/ProjectsPage";
//CHANGE WHEN HOME PAGE MADE
import LandingPage from "./pages/ProjectsPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
