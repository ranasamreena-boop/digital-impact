import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../assets/logo/the-digital-impacts.png";

const Navbar = () => {
  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="nav-contact">
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;