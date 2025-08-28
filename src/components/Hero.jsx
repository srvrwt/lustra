import "./../styles/Hero.css";
import Btnarrow from "../assets/icons/btn-arrow.svg";
import HeroImage from "../assets/images/HeroImg.webp";
import UserOne from "../assets/images/user-1.webp";
import UserTwo from "../assets/images/user-2.webp";
import UserThree from "../assets/images/user-3.webp";
import UserFour from "../assets/images/user-4.webp";
import UserFive from "../assets/images/user-5.webp";

export default function Hero() {
  return (
    <section className="hero ">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Your Way to Better <span className="highlight">Sex</span>
          </h1>
          <p>Explore a better sex life and deeper self-understanding</p>

          <a href="/" className="btn">
            Begin Your Journey{" "}
            <img src={Btnarrow} alt="arrow" className="btn-arrow" />
          </a>

          <div className="hero-stats">
            <div className="avatars">
              <img src={UserOne} alt="user 1" />
              <img src={UserTwo} alt="user 2" />
              <img src={UserThree} alt="user 3" />
              <img src={UserFour} alt="user 4" />
              <div className="avatarlast">
                <img src={UserFive} alt="user 5" />
                <span className="more">+245</span>
              </div>
            </div>
            <p className="rating">
              {" "}
              5.0 Rated by 250+ people <span className="stars">
                ⭐⭐⭐⭐⭐
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="hero-image">
          <img src={HeroImage} alt="Hero illustration" />
        </div>
      </div>
    </section>
  );
}
