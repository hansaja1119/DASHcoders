import React from 'react';
import './DocumentPage.scss';

const DocumentPage = () => {
  return (
    <div className="document-page ">
      <div className="content-container">
        <h1 className="page-title">About Our Prediction Service</h1>
        <p className="intro-text">
          Welcome to Remed Predict! Our platform uses cutting-edge AI technology to analyze your symptoms and provide personalized health insights. Here, we explain how our prediction system works and how you can benefit from it.
        </p>

        <section className="section">
          <h2 className="section-title">How It Works</h2>
          <p>
            Remed Predict collects symptoms you enter and uses an advanced machine learning model trained on extensive medical data. Based on this, we generate health predictions that can help you identify potential health issues early on.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Why Trust Us?</h2>
          <p>
            Our AI models have been carefully developed in collaboration with medical professionals and data scientists. We prioritize accuracy, reliability, and user privacy in every step of the process.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Privacy & Security</h2>
          <p>
            Your health information is sensitive, and we take this seriously. All your data is encrypted, and we comply with industry standards to ensure that your privacy is always protected.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <p>
            If you have any questions about how Remed Predict works or need assistance, feel free to reach out to our support team at support@remedpredict.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DocumentPage;

