import React from "react";
import "./Home.css";
import homeImage from "../../assets/home/Home-Image.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Image */}
      <div className="home-image-container">
        <img src={homeImage} alt="Home" className="home-image" />
      </div>

      {/* Right Text */}
      <div className="home-text">
        <h1>
          We are full Services <br />
          <span>Digital Marketing Agency</span>
        </h1>
        <h2>Welcome to the Digital Impacts</h2>
        <div className="line"></div>
        <p>
          We partner with our clients with a team of professionals, we are able to provide <br />
          the best on our side. We strive to be leaders in digital marketing services worldwide <br />
          by revolutionizing the industry and setting new standards of professionalism and success.
        </p>
        <div className="read-more-button">
          <button className="message-us-button">Message Us Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
