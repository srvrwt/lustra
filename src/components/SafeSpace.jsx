import React from "react";
import "./../styles/SafeSpace.css";
import IconSubheading from "../assets/icons/subheading-blue.svg";
import Btnarrow from "../assets/icons/btn-arrow.svg";
import SafeSpaceimg from "../assets/images/Safe-Space.webp";

const SafeSpace = () => {
  return (
    <section className="safe-space">
      <div className="container safe-space-container">
        <div className="safe-space-left">
          <div className="section_heading">
            <span className="subheading">
              <img src={IconSubheading} alt="Our Curriculum" />
              Safe Space
              <img src={IconSubheading} alt="Our Curriculum" />
            </span>
            <h2>
              Welcome to <span className="highlight">Safe Space</span>
            </h2>
            <p>
              A place where you can ask questions or join in discussions about
              sexuality without facing any judgments.
            </p>
          </div>
          <div className="space-card">
            <h3 className="space-title">Ask a Question</h3>
            <p className="space-description">
              Have a question about sexuality or relationships? Our safe space
              is here for you. No question is too big or too small, and you'll
              receive answers without any judgment.
            </p>
            <a href="/" className="btn" target="_blank" rel="noreferrer">
              Post Your Question
              <img src={Btnarrow} className="btn-arrow" />
            </a>
          </div>
          <div className="space-card">
            <h3 className="space-title">Participate in Discussions</h3>
            <p className="space-description">
              Join the conversation and share your thoughts, experiences, and
              advice. Engage with our community on various topics and learn from
              others in a supportive environment.
            </p>
            <a href="/" className="btn" target="_blank" rel="noreferrer">
              Join the Discussion
              <img src={Btnarrow} className="btn-arrow" />
            </a>
          </div>
        </div>
        <div className="img-wrap">
          <img src={SafeSpaceimg} alt="Safe Space" />
        </div>
      </div>
    </section>
  );
};

export default SafeSpace;
