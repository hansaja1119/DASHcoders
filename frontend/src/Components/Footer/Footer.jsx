import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="partners">
        <p>Connect with us on social media:</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-info">
        <p>How can I help you?</p>
        <p>Contact Us: <a href="mailto:support@remedpredict.com">support@remedpredict.com</a></p>
        <p >&copy; {new Date().getFullYear()} Remed Predict. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


