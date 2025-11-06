import React from "react";
import Navbar from "./Common/navbar/Navbar";
import "./App.css"
import Home from "./components/home/Home";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Services/>
      
    </div>
  );
}

export default App;
