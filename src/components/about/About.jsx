import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="aboutus-section">
      {/* Heading */}
      <div className="aboutus-header">
        <h2>EVERYTHING YOU NEED TO KNOW ABOUT</h2>
      </div>

      {/* About content */}
      <div className="aboutus-content">
        <div className="aboutus-block">
          <h2>THE DIGITAL IMPACTS</h2>
          <p>
            The <b>Digital Impacts</b> create a perfect company for its customers.
            <b> Digital Impacts</b> offers the best services to ensure your business thrives online.
            Because we partner with our clients with a team of professionals, we can provide the best on our side.
            We strive to be leaders in digital marketing services worldwide by revolutionizing the industry and setting new standards of professionalism and success.
          </p>
        </div>

        <div className="aboutus-block">
          <h2>OUR VISION</h2>
          <p>
            We strive to be leaders in digital marketing services across the world by revolutionizing the industry and setting new standards of professionalism and success.
            Our vision is to become a top agency offering online marketing strategies, digital sales solutions, and internet brand management in the international business sphere.
          </p>
        </div>

        <div className="aboutus-block">
          <h2>OUR MISSION</h2>
          <p>
            Our mission is to partner with customers for their success as we create a diverse client base including companies and individuals functioning in many different fields and economies.
            We will be best in providing consistently successful, unique, and forward-thinking digital marketing solutions that take into account the individual requirements and unique demands of each client.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="aboutus-stats">
        <div className="stat-box stat1">
          <h1>10000+</h1>
          <h2>Domain Names Registered</h2>
        </div>
        <div className="stat-box stat2">
          <h1>90000+</h1>
          <h2>Websites Hosted</h2>
        </div>
        <div className="stat-box stat3">
          <h1>45000+</h1>
          <h2>Customers</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
