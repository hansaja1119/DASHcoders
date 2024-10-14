import React from 'react';
import './SupportPage.scss';

const SupportPage = () => {
  return (
    <div className="support-page">
      <div className="content-container">
        <h1 className="page-title">Support Us</h1>
        <p className="intro-text">
          At Remed Predict, we are dedicated to making healthcare more accessible by using AI to predict potential health issues based on symptoms. Your support helps us continue developing our technology and expanding access to better health insights.
        </p>

        <section className="section">
          <h2 className="section-title">How You Can Help</h2>
          <p>
            There are many ways to support our mission:
          </p>
          <ul className="support-list">
            <li>Spread the word about Remed Predict to your friends and family.</li>
            <li>Donate to help fund our research and development efforts.</li>
            <li>Provide feedback on how we can improve the platform.</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Make a Donation</h2>
          <p>
            Your contributions make a big difference! You can donate directly through our platform, and all donations go towards enhancing the technology and providing more people with access to life-changing health predictions.
          </p>
          <button className="donate-button">Donate Now</button>
        </section>

        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <p>
            If you'd like to support us in other ways or have questions, feel free to reach out at support@remedpredict.com. We're always looking for partners and collaborators who share our vision.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;
