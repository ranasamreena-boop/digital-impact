import React from "react";
import Navbar from "./Common/navbar/Navbar";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Footer from "./Common/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import HomePage from "./pages/Home"; 
function App() {
  return (
    <div>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
