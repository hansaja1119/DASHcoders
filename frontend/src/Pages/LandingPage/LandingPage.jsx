import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="plans">
        <div className="plan-item">
          <p>UnitedHealthcare</p>
          <p>77% Plan Match for BloomTech</p>
        </div>
        <div className="plan-item">
          <p>Humana</p>
          <p>72% Plan Match for BloomTech</p>
        </div>
        <div className="plan-item">
          <p>Aetna</p>
          <p>82% Plan Match for BloomTech</p>
        </div>
        <div className="plan-item">
          <p>Anthem Blue Cross</p>
          <p>91% Plan Match for BloomTech</p>
        </div>
      </div>
      <h1>Explore Modern Health Plans with AI Solutions</h1>
      <p>Use AI to find and manage the best health coverage for your business needs and budget.</p>
      <button className="cta-button">Activate Your Account</button>
      <button className="google-signup">Sign Up with Google</button>
    </div>
  );
}

export default LandingPage;
