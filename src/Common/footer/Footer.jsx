import React from "react";
import "./Footer.css";

import usaFlag from "../../assets/logo/USA Flag.jpg";
import ukFlag from "../../assets/logo/UK Flag.jpg";
import canadaFlag from "../../assets/logo/Canada Flag.jpg";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-flex">
        <aside>
          <h3>COMPANY</h3>
          <ul className="footer-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Why Choose Us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Pricing & Plans</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </aside>

        <aside>
          <h3>SERVICES</h3>
          <ul className="footer-list">
            <li><a href="#">Web Design & Development</a></li>
            <li><a href="#">Why Choose Us</a></li>
            <li><a href="#">Specialized SEO Services</a></li>
            <li><a href="#">Specialized Social Services</a></li>
            <li><a href="#">Specialized Graphics Services</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </aside>

        <aside>
          <h3>RESOURCES</h3>
          <ul className="footer-list">
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Help & FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Site map</a></li>
          </ul>

          <div className="footer-social">
            <h4 className="Button-footer">Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/thedigitalimpacts" target="_blank" rel="noopener noreferrer">
                <FaFacebookF  size={24} />
              </a>
              <a href="https://www.instagram.com/the_digital_impacts_/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram  size={24} />
              </a>
              <a href="https://www.linkedin.com/company/89805803/admin/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://twitter.com/The_Digital_Imp" target="_blank" rel="noopener noreferrer">
                <CiTwitter size={24} />
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div className="footer-addresses">
        <aside>
          <img src={usaFlag} alt="USA Flag" />
          <h4>USA :</h4>
          <p>1st Avenue, SW, Hickory, NC, USA</p>
          <p>Email: info@thedigitalimpacts.com</p>
        </aside>
        <aside>
          <img src={ukFlag} alt="UK Flag" />
          <h4>UK :</h4>
          <p>Oldham Greater Manchester, United Kingdom</p>
          <p>Email: info@thedigitalimpacts.com</p>
        </aside>
        <aside>
          <img src={canadaFlag} alt="Canada Flag" />
          <h4>CANADA :</h4>
          <p>92 Avenue, Surrey, BC, Canada</p>
          <p>Email: info@thedigitalimpacts.com</p>
        </aside>
      </div>

      <div className="footer-line"></div>
      <div className="footer-copyright">
        <p>Copyright © 2022 The Digital Impacts. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
