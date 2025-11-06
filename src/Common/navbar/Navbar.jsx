import React from "react";
import "./Navbar.css";
import logoImage from "../../assets/logo/the-digital-impacts.png";

const Navbar = () => {
  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav-logo">
        <a href="/">
          <img src={logoImage} alt="Logo" />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/Services">Services</a>
        </li>
        <li className="nav-item">
          <a href="/AboutUs">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/Portfolio">Portfolio</a>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="nav-contact">
        <button>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
