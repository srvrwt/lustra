import "./../styles/Footer.css";
import Whitelogo from "../assets/images/LustraWhiteLogo.webp";
import Instagram from "../assets/icons/insta.jsx";
import Facebook from "../assets/icons/fb.jsx";
import Youtube from "../assets/icons/yt.jsx";
import Twitter from "../assets/icons/twt.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <a className="logo" href="/">
          <img src={Whitelogo} alt="Lustra Logo" />
        </a>
        <p>
          At Lustra, we believe that sexual education is a fundamental right and
          an essential aspect of overall well-being.
        </p>
        <div className="social_meadia">
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Youtube />
          </a>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Twitter />
          </a>
        </div>
      </div>

      <ul className="footer-menu">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <div className="copyright container">
        <p>© {new Date().getFullYear()} LUSTRA | All Rights Reserved</p>
        <ul className="policies">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
