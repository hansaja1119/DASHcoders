import React from 'react';
import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handlePredictNowClick = () => {
    navigate('/search');
  };

  return (
    <div className="landing-page">
      <div className="left">
        <div className="plan-item">
          <p>UnitedHealthcare</p>
          <p>77% Plan Match for BloomTech</p>
        </div>
        <div className="plan-item">
          <p>Humana</p>
          <p>72% Plan Match for BloomTech</p>
        </div>
      </div>

      <div className="middle">
        <h1>Predict Your Health Risks with AI</h1>
        <p>Find Possible Health Issues Based on Symptoms in Seconds</p>
        <button className="cta-button" onClick={handlePredictNowClick}>
          Predict Now
        </button>
        <button className="google-signup">Sign Up with Google</button>
      </div>

      <div className="right">
        <div className="plan-item">
          <p>Aetna</p>
          <p>82% Plan Match for BloomTech</p>
        </div>
        <div className="plan-item">
          <p>Anthem Blue Cross</p>
          <p>91% Plan Match for BloomTech</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
