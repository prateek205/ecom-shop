import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
