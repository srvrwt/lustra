import { useState, useEffect } from "react";
import "./../styles/Header.css";
import logo from "../assets/images/Logo-Lustra.webp";
import Btnarrow from "../assets/icons/btn-arrow.svg";
import Menu from "../assets/icons/Menu.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header container ${isSticky ? "sticky-s" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="Logo-Lustra" />
      </a>

      {/* nav with conditional class */}
      <nav className={`nav ${menuOpen ? "open-s" : ""}`}>
        <a href="/">Courses</a>
        <a href="/about">About Us</a>
        <a href="/contact">Blog</a>
        <a href="/contact">Resources</a>
        <a href="/contact">Community</a>
      </nav>

      <span
        className={`menu-icon ${menuOpen ? "open-s" : ""}`}
        onClick={toggleMenu}
      >
        <Menu />
      </span>

      <a href="#" className="btn">
        Contact us <img src={Btnarrow} alt="arrow" className="btn-arrow" />
      </a>
    </header>
  );
}
