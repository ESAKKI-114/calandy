import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 10) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
   
   <div className="logo">
  <img
    src="/applogo1.jpeg"
    alt="Karthik's Calendar Logo"
    className="logo-img"
  />
  <span className="logo-text">Karthik's Calendar</span>
</div>


      {/* Mobile hamburger button */}
      <button
        type="button"
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/design" onClick={() => setMenuOpen(false)}>Design</Link></li>
        <li><Link to="/calendar-summary" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/location" onClick={() => setMenuOpen(false)}>Location</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
