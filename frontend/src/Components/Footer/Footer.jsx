import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="partners">
        <img src="humana-logo.png" alt="Humana" />
        <img src="anthem-logo.png" alt="Anthem" />
        <img src="united-logo.png" alt="UnitedHealthcare" />
        <img src="aetna-logo.png" alt="Aetna" />
        <img src="cigna-logo.png" alt="Cigna" />
      </div>
      <div className="footer-info">
        <p>How we can help you</p>
      </div>
    </footer>
  );
}

export default Footer;
