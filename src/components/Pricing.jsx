import React from "react";
import "./../styles/Pricing.css";
import IconSubheading from "../assets/icons/subheading.svg";
import Btnarrow from "../assets/icons/btn-arrow.svg";
import listIcon from "../assets/icons/List-Icon.svg";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-container">
          {/* Left Content */}
          <div className="pricing-left">
            <div className="section_heading no-m">
              <span className="subheading">
                <img src={IconSubheading} alt="Section Icon" />
                Pricing
                <img src={IconSubheading} alt="Section Icon" />
              </span>
              <h2>
                Simple and <span className="highlight">Affordable</span>
                Pricing
              </h2>
              <p>
                Sign up today for lifetime access to our comprehensive course,
                including <strong>early access</strong> to our vibrant
                community! This exclusive offer is designed to enhance your
                knowledge and relationships with expert-led modules and engaging
                content.
              </p>
              <a href="/" className="btn" target="_blank" rel="noreferrer">
                Enroll Now
                <img src={Btnarrow} className="btn-arrow" alt="arrow" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="pricing-card">
            <span className="subheading lime">
              participation in the community
            </span>
            <h2 className="main-price">
              {" "}
              <span className="payment-type">One-time payment</span>
              €300
            </h2>
            <div className="pricing-card">
              <h3 className="space-title">Participate in Discussions</h3>
              <ul className="pricing-description">
                <li>
                  <img src={listIcon} />
                  <p>
                    <strong>Full Access:</strong> Unlimited access to all
                    modules and resources.
                  </p>
                </li>
                <li>
                  <img src={listIcon} />
                  <p>
                    <strong>Exclusive Community: </strong> Join a supportive
                    community of learners.
                  </p>
                </li>
                <li>
                  <img src={listIcon} />
                  <p>
                    {" "}
                    <strong>Expert Q&A:</strong> Participate in scheduled Q&A
                    sessions.
                  </p>
                </li>
              </ul>
            </div>
            <a href="/" className="btn" target="_blank" rel="noreferrer">
              Subscribe Now
              <img src={Btnarrow} className="btn-arrow" alt="arrow" />
            </a>
          </div>
        </div>
        <div className="cta-section">
          <a className="btn" href="/">
            Enhance Sexual Health & Relationships
            <img src={Btnarrow} alt="arrow" className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
