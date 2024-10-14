import React from 'react';
import './Footer.scss';
import company from '../../Icons/company.avif';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="partners">
        <img src={company} alt="Humana" />
        <img src={company} alt="Anthem" />
        <img src={company} alt="UnitedHealthcare" />
        <img src={company} alt="Aetna" />
        <img src={company} alt="Cigna" />
      </div>
      <div className="footer-info">
        <p>How we can help you</p>
      </div>
    </footer>
  );
}

export default Footer;
