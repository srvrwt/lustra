import React from "react";
import "./../styles/WhyChooseUs.css";
import IconSubheading from "../assets/icons/subheading.svg";
import Btnarrow from "../assets/icons/btn-arrow.svg";

// Import your custom SVG icons here
import SafeIcon from "../assets/icons/Feel-Safe.svg";
import LessonsIcon from "../assets/icons/Easy-Lessons.svg";
import BadgesIcon from "../assets/icons/Get-Badges.svg";
import ResourcesIcon from "../assets/icons/Loads-of-Resources.svg";
import RelationshipsIcon from "../assets/icons/Better-Relationships.svg";

const WhyChooseUs = () => {
  const features = [
    {
      iconComponent: <img src={SafeIcon} alt="Feel Safe" />,
      title: "Feel Safe",
      description: "Learn and grow in a comfy, judgment-free zone.",
    },
    {
      iconComponent: <img src={LessonsIcon} alt="Easy Lessons" />,
      title: "Easy Lessons",
      description: "We make tough topics simple and clear.",
    },
    {
      iconComponent: <img src={BadgesIcon} alt="Get Badges" />,
      title: "Get Badges",
      description: "Earn and share badges on social media or dating apps.",
    },
    {
      iconComponent: <img src={ResourcesIcon} alt="Loads of Resources" />,
      title: "Loads of Resources",
      description:
        "Dive into our collection of podcasts, videos, books, and more",
    },
    {
      iconComponent: <img src={RelationshipsIcon} alt="Better Relationships" />,
      title: "Better Relationships",
      description:
        "Boost communication, build intimacy, and break down stigma with our supportive community.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section_heading center">
          <span className="subheading">
            <img src={IconSubheading} alt="Our Curriculum" />
            WHY CHOOSE US <img src={IconSubheading} alt="Our Curriculum" />
          </span>
          <h2>
            Why You'll <span className="highlight">Love</span> Us
          </h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.iconComponent || (
                  <div className="placeholder-icon"></div>
                )}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <a className="btn" href="/">
            Get In Early And Enjoy A 30% Discount!{" "}
            <img src={Btnarrow} alt="arrow" className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
