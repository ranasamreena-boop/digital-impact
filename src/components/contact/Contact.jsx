import React from "react";
import "./Contact.css";
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      {/* Section Heading */}
      <div className="heading">
        <h2 className="Services-heading">
          Feel Free To <span>Contact</span> Us By Submitting
          <br />
          <span>Form Or Contact Live Support</span>
        </h2>
      </div>
      <div className="Form">
        <div className="mapouter">
          <iframe
            height="350px"
            width="700px"
            className="gmap_iframe"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Oldham Graham, Manchester UK&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            title="Google Map"
          ></iframe>

          <div className="contact-numbers">
  <div>
    <h2><FaPhoneSquare /></h2>
  </div>
  <div>
    <h4>+447424997026</h4>
    <h4>+447900190002</h4>
  </div>
  <div>
    <h2><MdEmail /></h2>
  </div>
  <div className="ContactUs---Email">
    <h4>info@thedigitalimpacts.com</h4>
  </div>
</div>
        </div>

        {/* Right Side: Form Card */}
        <div className="Form--Card">
          <form>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
            <br />

            <label htmlFor="sname">Surname</label>
            <br />
            <input
              type="text"
              id="sname"
              name="sname"
              placeholder="Your surname"
            />
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
            />
            <br />

            <label htmlFor="phone">Contact Number</label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-45-678"
            />
            <br />

            <input
              type="submit"
              className="form-submit-button"
              value="Submit"
            />
          </form>
        </div>
      </div>

      {/* Work Together Section */}
      <div className="WT---Flex-center">
        <div className="WT---blackbar"></div>
        <div>
          <h1>Let’s Work Together</h1>
          <p>
            Driving your business forward with strong marketing strategies <br />
            Get a free consultation to make this happen!
          </p>
          <button className="connect-btn">Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
