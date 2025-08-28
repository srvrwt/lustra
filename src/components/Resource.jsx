import React from "react";
import "./../styles/Resource.css";
import IconSubheading from "../assets/icons/subheading.svg";
import Btnarrowblue from "../assets/icons/btn-arrow-blue.svg";
import Btnarrow from "../assets/icons/btn-arrow.svg";

// Import your custom SVG icons here
import AdultSpaces from "../assets/images/Adult-Spaces.webp";
import LibraryPodcasts from "../assets/images/Library-Podcasts.webp";
import Events from "../assets/images/Events.webp";

const Resource = () => {
  return (
    <section className="resource-sec">
      <div className="container">
        <div className="section_heading center">
          <span className="subheading">
            <img src={IconSubheading} alt="Our Curriculum" />
            resource library
            <img src={IconSubheading} alt="Our Curriculum" />
          </span>
          <h2>
            Dive Deeper with Lustra's Resource{" "}
            <span className="highlight">Library</span>
          </h2>
          <p>
            Discover curated content, expert insights, and interactive resources
            to enhance your knowledge and experience.
          </p>
        </div>

        {/* Static resource cards */}
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon">
              <img src={AdultSpaces} alt="Adult Spaces" />
            </div>
            <div className="resource-con">
              <h3 className="resource-title">Adult Spaces</h3>
              <p className="resource-description">
                Discover top-rated adult hotels for a memorable getaway. Enjoy
                luxurious amenities and privacy in the best destinations.
              </p>
              <a className="btn btn-text" href="/">
                Browse Hotels
                <img src={Btnarrowblue} alt="arrow" className="btn-arrow" />
              </a>
            </div>
          </div>
          <div className="resource-card">
            <div className="resource-icon">
              <img src={LibraryPodcasts} alt="Library of Podcasts" />
            </div>
            <div className="resource-con">
              <h3 className="resource-title">Library of Podcasts</h3>
              <p className="resource-description">
                Tune in to our extensive library of podcasts covering a range of
                topics in sexual health & relationships. Listen & learn at your
                convenience.
              </p>
              <a className="btn btn-text" href="/">
                Explore Podcasts
                <img src={Btnarrowblue} alt="arrow" className="btn-arrow" />
              </a>
            </div>
          </div>
          <div className="resource-card">
            <div className="resource-icon">
              <img src={Events} alt="Events" />
            </div>
            <div className="resource-con">
              <h3 className="resource-title">Events</h3>
              <p className="resource-description">
                Stay updated with our latest events, workshops, and webinars.
                Join us for interactive and informative sessions led by experts.{" "}
              </p>
              <a className="btn btn-text" href="/">
                View Events{" "}
                <img src={Btnarrowblue} alt="arrow" className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
        <a className="btn" href="/">
          View All Resources
          <img src={Btnarrow} alt="arrow" className="btn-arrow" />
        </a>
      </div>
    </section>
  );
};

export default Resource;
