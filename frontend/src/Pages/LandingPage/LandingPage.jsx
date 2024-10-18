import React from "react";
import "./LandingPage.scss";
import { useNavigate } from "react-router-dom";
import google from "../../Icons/Google.webp";
import company from "../../Icons/company.avif";

const LandingPage = () => {
  const navigate = useNavigate();

  const handlePredictNowClick = () => {
    navigate("/search");
  };

  return (
    <div className="landing-page">
      <div className="left">
        <div className="plan-item">
          <img src={company} alt="image 01" className="image" />
          <div className="detail">
            <p>AI-Powered Health Insights</p> <br />
            <p>
              Instantly predict potential health issues with advanced AI
              technology.
            </p>
          </div>
        </div>
        <div className="plan-item">
          <img src={company} alt="image 01" className="image" />
          <div className="detail">
            <p>Comprehensive Symptom Database</p>
            <br />
            <p>
              Our platform covers a vast range of symptoms and diseases to
              deliver accurate predictions.
            </p>
          </div>
        </div>
      </div>

      <div className="Topic">
        <h1 className="gradient-text">Predict Your Health Risks with AI</h1>
        <p>Find Possible Health Issues Based on Symptoms in Seconds</p>
        <div className="buttons">
          <button className="cta-button" onClick={handlePredictNowClick}>
            Predict Now
          </button>
          {/* <button className="google-signup">
            <div className="google-button">
              <img src={google} alt="google" className="google" />
              Sign Up with Google
            </div>
          </button> */}
        </div>
      </div>

      <div className="right">
        <div className="plan-item">
          <img src={company} alt="image 01" className="image" />
          <div className="detail">
            <p>Personalized Medication</p> <br />
            <p>
              Receive tailored medication recommendations based on your
              symptoms.
            </p>
          </div>
        </div>
        <div className="plan-item">
          <img src={company} alt="image 01" className="image" />
          <div className="detail">
            <p>Precautionary Measures</p>
            <br />
            <p>
              Get tips on how to manage your condition with safety precautions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
