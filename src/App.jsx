
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Launches from "./pages/Launches"; 
import About from "./pages/About";       
import { LaunchProvider } from "./context/LaunchContext"; 
import Footer from "./components/Footer";

function App() {
  return (
    <LaunchProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/browse-launches" element={<Launches />} />
          <Route path="/about-us" element={<About />} /> 
        </Routes>
        <Footer />
      </Router>
    </LaunchProvider>
  );
}

export default App;

