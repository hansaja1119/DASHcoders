import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DiseaseDetailsPage.css";

const DiseaseDetailsPage = () => {
  const location = useLocation();
  const { selectedSymptoms } = location.state || {};
  const [diseaseDetails, setDiseaseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiseaseDetails = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/diseases", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ symptoms: selectedSymptoms }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch disease details.");
        }

        const data = await response.json();
        setDiseaseDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedSymptoms) {
      fetchDiseaseDetails();
    }
  }, [selectedSymptoms]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!diseaseDetails) return <div>No details available for the selected symptoms.</div>;

  const { diseaseName, description, medication, workout, precautions, diet } = diseaseDetails;

  return (
    <div className="disease-details">
      <h1 className="disease-name">{diseaseName}</h1>
      <p className="disease-description">{description}</p>

      <div className="disease-section">
        <h2>Medication</h2>
        <div className="card-container">
          {medication.map((med, index) => (
            <div className="card" key={index}>
              <h3>{med.name}</h3>
              <p>{med.description}</p>
              <p><strong>Dosage:</strong> {med.dosage}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="disease-section">
        <h2>Workout</h2>
        <div className="card-container">
          {workout.map((exercise, index) => (
            <div className="card" key={index}>
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
              <p><strong>Duration:</strong> {exercise.duration}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="disease-section">
        <h2>Precautions</h2>
        <div className="card-container">
          {precautions.map((precaution, index) => (
            <div className="card" key={index}>
              <h3>Precaution {index + 1}</h3>
              <p>{precaution}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="disease-section">
        <h2>Diet</h2>
        <div className="card-container">
          {diet.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Amount:</strong> {item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetailsPage;
