import React from "react";
import "./../styles/OurCurriculum.css";
import OurCurriculum from "../assets/images/Our-Curriculum.svg";
import IconSubheading from "../assets/icons/subheading.svg";
import CurriculumCard from "../assets/images/Curriculum-Card.webp";

// Import Card images
import BasicsImg from "../assets/images/BasicsOfSexualHealth.webp";
import RelationshipCommunication from "../assets/images/RelationshipCommunication.webp";
import DigitalWorldEthics from "../assets/images/DigitalWorldEthics.webp";
import BodyMind from "../assets/images/BodyMind.webp";
import YouthEducation from "../assets/images/YouthEducation.webp";
import ProblemsSolutions from "../assets/images/ProblemsSolutions.webp";
import TechniquesPractices from "../assets/images/TechniquesPractices.webp";
import PostSexCare from "../assets/images/PostSexCare.webp";
import IntimacyParents from "../assets/images/IntimacyParents.webp";

export default function FlipCards() {
  const courseData = [
    {
      id: 1,
      title: "Basics of Sexual Health",
      image: BasicsImg, // 👈 custom image
      backContent:
        "Understanding Consent and Communication, Prioritizing Safety in Relationships, Exploring Masturbation and Its Benefits, Knowing About Pregnancy and Birth Control",
    },
    {
      id: 2,
      title: "Relationship and Communication",
      image: RelationshipCommunication,
      backContent:
        "Navigating Dating and Sex, Understanding Sex in Relationships, Improving Communication Skills",
    },
    {
      id: 3,
      title: "Digital World and Ethics",
      image: DigitalWorldEthics,
      backContent:
        "Managing Online Content and Ethics, Understanding Digital Privacy and Sexting Safety",
    },
    {
      id: 4,
      title: "Body and Mind",
      image: BodyMind,
      backContent:
        "Exploring Our Bodies and How They Work, Understanding Our Minds and Sexual Health",
    },
    {
      id: 5,
      title: " First Times and Youth Education",
      image: YouthEducation,
      backContent:
        "First Time with a New Partner, Sex Education for Youth",
    },
    {
      id: 6,
      title: "Problems and Solutions",
      image: ProblemsSolutions,
      backContent:
        "Addressing Sexual Problems and Finding Solutions",
    },
    {
      id: 7,
      title: "Techniques and Practices",
      image: TechniquesPractices,
      backContent:
        "Exploring Various Sexual Techniques and Practices, Creating Romantic Scenarios and Preparation (includes 30-minute scenarios to enjoy)",
    },
    {
      id: 8,
      title: "Post-Sex Care and Sexual Health",
      image: PostSexCare,
      backContent:
        "Aftercare and Nurturing Post-Sex, Maintaining Sexual Health",
    },
    {
      id: 9,
      title: "Intimacy for New Parents",
      image: IntimacyParents,
      backContent:
        "Body Changes: Rediscovering Your Libido, Making Intimacy Work",
    },
  ];

  return (
    <section className="our_curriculum">
      <div className="container">
        <div className="section_heading">
          <div>
            <span className="subheading">
              <img src={IconSubheading} alt="Our Curriculum" />
              Our Curriculum <img src={IconSubheading} alt="Our Curriculum" />
            </span>
            <h2>
              Meet <span className="highlight">Lustra,</span> immersive audio
              course that will change your perspective on sexual health and
              relationships.
            </h2>
          </div>
          <img src={OurCurriculum} alt="Our Curriculum" />
        </div>

        <div className="cards-grid">
          {courseData.map((course) => (
            <FlipCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ course }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={course.image} alt={course.title} className="card-img" />
          <h3 className="card-title">{course.title}</h3>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <img src={CurriculumCard} alt="" />

          <div className="card_con">
            <h3 className="card-title">{course.title}</h3>
            <ul className="card-list">
              {course.backContent.split(",").map((point, index) => (
                <li key={index}>{point.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
