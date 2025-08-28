import React from "react";
import "./../styles/Newsletter.css";
import IconSubheading from "../assets/icons/subheading-lime.svg";
import Btnarrow from "../assets/icons/btn-arrow.svg";

const Newsletter = () => {
  return (
    <section className="newsletter-sec">
      <div className="container newsletter-con">
        <div className="section_heading no-m">
          <span className="subheading">
            <img src={IconSubheading} alt="Our Curriculum" />
            NEWSLETTER <img src={IconSubheading} alt="Our Curriculum" />
          </span>
          <h2>Join our Newsletter for Latest Updates</h2>
        </div>
        <form className="subscribe-container">
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
            required
          />
          <button type="submit" className="btn">
            Subscribe <img src={Btnarrow} alt="arrow" className="btn-arrow" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
