 import React from "react";
import Home from "../components/home/Home";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";

const HomePage = () => {
  return (
    <>
      <Home />
      <Services />
      <About/>
      <Portfolio />
      <Contact/>
    </>
  );
};

export default HomePage;