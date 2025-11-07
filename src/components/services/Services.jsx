import estateImg from "../../assets/logo/Commerce.jpg";
import educationImg from "../../assets/logo/Education.jpg";
import commerceImg from "../../assets/logo/Estate.jpg";
import hospitalityImg from "../../assets/logo/Fintech.jpg";
import healthcareImg from "../../assets/logo/Health-Care.jpg";
import fintechImg from "../../assets/logo/Hospitality.jpg";

import React from "react";
import "./Services.css";
import {
  FaBullhorn,
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";
const Services = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        {/* <div className="col-md-12 col-12"> */}
        <div className="heading text-center">
          <h2 className="Services-heading fw-bold">
            We <span>Provide</span> The Best
            <br />
            Services With <span>Our</span>
            <br />
            <span>Developers</span>
          </h2>
        </div>
      </div>
      <div className="Services--Cards">
        <card className="Services--Card1">
          <h3>Digital Marketing</h3>
          <h2>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M105.4 26.28C122.1 96.08 82.98 121 27 132.6c70.72 24.3 36.69 48.4 21.99 72.6 66.01-5.1 87.51 25.8 87.41 74.3 36.5-20.1 51.6-62.3 147.1-21.6-23.4-43.1-31.9-75.3 20.3-118.5-39.7-14.2-77-30.2-58.1-81.17-56.3 37.85-98.9 5.52-140.3-31.95zm66.9 67.89a62.23 62.23 0 0 1 62.2 62.23 62.23 62.23 0 0 1-62.2 62.2 62.23 62.23 0 0 1-62.2-62.2 62.23 62.23 0 0 1 62.2-62.23zM318.9 218.2c17.3 81.3-25 98-89 91.2 30.9 31.9 50.2 68 16.1 123.1 45.3-11.2 88.5-13.6 113.9 49.8 22.5-46.1 64.8-52.4 116.7-38.7-17.9-27.7-38-55.4 16.9-82.8-37-25.5-74.3-50.7-49.4-124.5-45.3 51-86.7 40.1-125.2-18.1zm47.4 76.7a62.23 62.23 0 0 1 62.2 62.2 62.23 62.23 0 0 1-62.2 62.2 62.23 62.23 0 0 1-62.2-62.2 62.23 62.23 0 0 1 62.2-62.2z"></path>
            </svg>
          </h2>
          <p className="ServicesCard--P-Tag">
            The <span>Digital Impacts</span> have compiled a list of the best
            digital marketing companies in the world.
          </p>
        </card>
        <card className="Services--Card1">
          <h3>Web Development</h3>
          <h2>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z" />
            </svg>
          </h2>
          <p className="ServicesCard--P-Tag">
            Web design services comprise the process of user interface{" "}
            <span>(UI)</span> and user experience <span>(UX)</span> design of
            any web-based solution.
          </p>
        </card>
        <card className="Services--Card1">
          <h3>Graphic Designing</h3>
          <h2>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7Z"
                fill="currentColor"
              />
              <path
                d="M17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8Z"
                fill="currentColor"
              />
              <path
                d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11Z"
                fill="currentColor"
              />
              <path
                d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z"
                fill="currentColor"
              />
              <path
                d="M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17C6.55228 17 7 16.5523 7 16C7 15.4477 6.55228 15 6 15Z"
                fill="currentColor"
              />
              <path
                d="M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
                fill="currentColor"
              />
            </svg>
          </h2>
          <p className="ServicesCard--P-Tag">
            Create visual concepts to communicate ideas that inspire and
            captivate consumers, creative thinking, an aptitude towards art and
            design
          </p>
        </card>
      </div>
      <div className="Services--Cards">
        <card className="Services--Card1">
          <h3>Content Writter</h3>
          <h2>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              version="1.1"
              viewBox="0 0 17 17"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g />
              <path d="M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z" />
            </svg>
          </h2>
          <p className="ServicesCard--P-Tag">
            That <span>content</span> can include blog posts, video or podcast
            scripts, ebooks or whitepapers, press releases, product category
            descriptions, landing page or social media
          </p>
        </card>
        <card className="Services--Card1">
          <h3>SEO</h3>
          <h2>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M197.242 24.102c-40.986 10.368-78.605 33.52-106.36 69.652C53.07 142.972 33.22 216.81 49.6 317.006c79.374-42.55 132.106-95.527 166.947-168.307-4.973-41.636-11.247-83.365-19.308-124.598zm112.174 2.505c-7.667 42.868-13.397 87.133-17.94 132.58 38.35 68.048 90.915 120.903 182.096 158.698 9-98.344-16.265-171.888-57.968-221.614-29.16-34.768-66.487-57.994-106.188-69.663zm-57.654 39.608c-9.532.208-18.632 4.682-23.17 13.93 13.216 110.324 20.094 219.74 25.388 331.048 6.708-109.96 12.553-220.024 25.836-329.984-5.896-9.987-17.252-15.23-28.054-14.995zM220.21 181.518C188.277 237.364 144.217 281.93 84.83 318.432c-.4 34.104 4.104 72.597 14.824 115.63 59.937-35.375 100.948-104.268 127.596-172.07-1.93-26.61-4.24-53.49-7.043-80.474zm68.368 8.546c-2.33 26.464-4.324 53.303-6.123 80.477 29.86 65.904 70.47 133.18 140.707 164.692 10.74-41.73 15.13-79.366 14.51-112.96-68.55-33.934-114.492-78.57-149.094-132.208zm-58.603 113.184c-20.432 44.143-47.37 86.888-82.963 119.12 2.542 3.706 5.108 7.27 7.7 10.667 26.638 34.942 55.1 53.575 83.41 58.05-2.15-58.782-4.2-122.097-8.147-187.837zm50.054 5.75c-3.548 59.092-6.53 119.665-10.34 181.264 28.108-5.885 56.63-25.624 83.324-60.54 2.805-3.67 5.585-7.51 8.336-11.51-35.357-30.064-60.998-69.267-81.32-109.214z" />
            </svg>
          </h2>
          <p className="ServicesCard--P-Tag">
            Help search engines find, crawl, and index your content efficiently.
            The website can become easily findable, more relevant and popular
            towards user&nbsp;search&nbsp;querie.
          </p>
        </card>
      </div>

      {/*  */}
      <div className="heading text-center py-5">
        <h1 className="Services-heading fw-bold">
          Industries We
          <br /> <span>Work With</span>
        </h1>
        <p>
          We work as a technology partner for various industries <br />
          Our expertise can be applied to the specific demands <br />
          and nuances in your industry
        </p>
      </div>
      <div className="Services--industries">
        <div>
          <img src={commerceImg} className="img-fluid" />

          <h4>REAL ESTATE</h4>
        </div>
        <div>
          <img src={educationImg} className="img-fluid" />

          <h4>EDUCATION</h4>
        </div>
        <div>
          <img src={estateImg} className="img-fluid" />
          <h4>COMMERCE</h4>
        </div>
      </div>
      <div className="Services--industries">
        <div>
          <img src={hospitalityImg} className="img-fluid" />

          <h4>HOSPITALITY</h4>
        </div>
        <div>
          <img src={healthcareImg} className="img-fluid" />

          <h4>HEALTHCARE</h4>
        </div>
        <div>
          <img src={fintechImg} className="img-fluid" />
          <h4>FINTECH</h4>
        </div>
      </div>
    </div>
  );
};

export default Services;