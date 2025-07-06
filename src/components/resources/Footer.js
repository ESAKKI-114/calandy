import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../CSS/Footer.css'; // Optional: for your footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://wa.me/95655 03920" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/karthikcalendars_1990/?utm_source=qr&igsh=dWxndGhzY3p5bmhw#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="mailto:contact@yourcalendar.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <div className="footer-address">
        <address>
          2/806B1, ThandayuthaPuram<br/>
          Sivakasi 626189<br />
          karthickcalendars2020@gmail.com <br />
          +91 95655 03920
        </address>
        <span className="footer-hours">Mon - Sat, 10:00am - 7:00pm</span>
      </div>
    </footer>
  );
};

export default Footer;
