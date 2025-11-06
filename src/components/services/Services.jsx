import React from "react";
import "./Services.css";
import { FaBullhorn, FaCode, FaPaintBrush, FaSearch, FaMobileAlt } from "react-icons/fa";

import estateImg from "../../assets/logo/Commerce.jpg";
import educationImg from "../../assets/logo/Education.jpg";
import commerceImg from "../../assets/logo/Estate.jpg";
import hospitalityImg from "../../assets/logo/Fintech.jpg";
import healthcareImg from "../../assets/logo/Health-Care.jpg";
import fintechImg from "../../assets/logo/Hospitality.jpg";

const Services = () => {
  const servicesData = [
    {
      title: "Digital Marketing",
      icon: <FaBullhorn />,
      description: (
        <>
          The <span>Digital Impacts</span> have <br />compiled a list
          of the best<br /> digital marketing companies in the world.
        </>
      )
    },
    {
      title: "Web Development",
      icon: <FaCode />,
      description: (
        <>
          Web design services comprise<br /> the process of user interface <span>(UI)</span>
          and user experience <span>(UX)</span><br /> design of any web-based<br /> solution.
        </>
      )
    },
    {
      title: "Graphic Designing",
      icon: <FaPaintBrush />,
      description: (
        <>
          Create visual concepts to<br /> communicate ideas that<br /> inspire
          and captivate<br /> consumers with creative thinking<br /> an aptitude towards art and<br /> design.
        </>
      )
    },
    {
      title: "Content Writer",
      icon: <FaSearch />,
      description: (
        <>
          That <span>content</span> can include blog<br /> posts,
          video or podcast scripts,<br /> ebooks or whitepapers,
          press<br /> releases, product category <br />descriptions,
          landing page or<br /> social media
        </>
      )
    },
    {
      title: "SEO",
      icon: <FaMobileAlt />,
      description: (
        <>
          Help search engines find,<br />
          crawl, and index your content<br />
          efficiently. The website can <br />
          become easily findable, more <br />
          relevant and popular towards<br />
          user search queries.
        </>
      )
    }
  ];

  const industriesData = [
    { img: estateImg, title: "REAL ESTATE" },
    { img: educationImg, title: "EDUCATION" },
    { img: commerceImg, title: "COMMERCE" },
    { img: hospitalityImg, title: "HOSPITALITY" },
    { img: healthcareImg, title: "HEALTHCARE" },
    { img: fintechImg, title: "FINTECH" }
  ];

  return (
    <section>

      <h1 className="services-heading">
        We <span>Provide</span> The Best<br />
        Services With <span>Our</span><br />
        <span>Developers</span>
      </h1>

      <div className="services-cards">
        {servicesData.map((service, index) => (
          <card key={index} className="service-card">
            <h3>{service.title}</h3>
            <div className="service-icon">{service.icon}</div>
            <p>{service.description}</p>
          </card>
        ))}
      </div>

      <h1 className="services-heading">
        Industries We <br /> <span>Work With</span>
      </h1>

      <p className="services-subtext">
        We work as a technology partner for various industries <br />
        Our expertise can be applied to the specific demands <br />
        and nuances in your industry
      </p>

      <div className="Services--wrapper ">
        <div className="Services--industries">
          {industriesData.slice(0, 3).map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>

        <div className="Services--industries">
          {industriesData.slice(3, 6).map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
