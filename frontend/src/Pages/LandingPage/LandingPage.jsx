import React from 'react';
import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';
import company from '../../Icons/company.avif'

const LandingPage = () => {
  const navigate = useNavigate();

  const handlePredictNowClick = () => {
    navigate('/search');
  };

  return (
    <div className="landing-page">
      <div className="left">
        <div className="plan-item">
        <img src={company} alt="image 01" className='image'/>
        <div className='detail'>
          <p>UnitedHealthcare</p>
          <p>77% Plan Match for BloomTech</p>
        </div>
        </div>
        <div className="plan-item">
        <img src={company} alt="image 01" className='image'/>
        <div className='detail'>
          <p>Humana</p>
          <p>72% Plan Match for BloomTech</p>
          </div>
        </div>
      </div>

      <div className="Topic">
        <h1 className='gradient-text'>Predict Your Health Risks with AI</h1>
        <p>Find Possible Health Issues Based on Symptoms in Seconds</p>
        <div className='buttons'>
        <button className="cta-button" onClick={handlePredictNowClick}>
          Predict Now
        </button>
        <button className="google-signup">Sign Up with <br />Google</button>
        </div>
      </div>

      <div className="right">
        <div className="plan-item">
        <img src={company} alt="image 01" className='image'/>
        <div className='detail'>
          <p>Aetna</p>
          <p>82% Plan Match for BloomTech</p>
          </div>
        </div>
        <div className="plan-item">
          <img src={company} alt="image 01" className='image'/>
          <div className='detail'>
          <p>Anthem Blue Cross</p>
          <p>91% Plan Match for BloomTech</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
