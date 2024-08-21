import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
