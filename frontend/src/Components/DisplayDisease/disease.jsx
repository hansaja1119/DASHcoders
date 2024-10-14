import React, { useEffect, useState } from "react";
import "./disease.css";
import { useParams } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const Disease = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [diseaseDetail, setDiseaseDetail] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading indicator

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  const { disease } = useParams();
  console.log(disease);

  const renderParagraph = () => {
    switch (selectedSection) {
      case "Medication":
        return (
          <ul>
            {diseaseDetail.Medications.map((item, index) => (
              <li key={index}>{item.Medication}</li>
            ))}
          </ul>
        );
      case "Diet":
        return (
          <ul>
            {diseaseDetail.Dietplans.map((item, index) => (
              <li key={index}>{item.Diet}</li>
            ))}
          </ul>
        );
      case "Workout":
        return (
          <ul>
            {diseaseDetail.Workouts.map((item, index) => (
              <li key={index}>{item.Workout}</li>
            ))}
          </ul>
        );
      case "Precautions":
        return (
          <ul>
            {diseaseDetail.Precautions.map((item, index) => (
              <li key={index}>{item.Precaution}</li>
            ))}
          </ul>
        );
      default:
        return <p>Select a section to view details.</p>;
    }
  };

  useEffect(() => {
    setLoading(true); // Set loading to true before API request
    apiRequest
      .get("/disease/" + disease)
      .then((res) => {
        setDiseaseDetail(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
      });
  }, [disease]);

  console.log(diseaseDetail);

  return (
    <div className="info-page">
      <h1 className="page-title">Predicted Disease Information</h1>

      {loading ? (
        <div className="loading-indicator">
          {/* Display loading spinner or message */}
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {/* Render the disease details only after data is fetched */}
          <div className="subtitle">
            <h2 className="disease-name">{diseaseDetail.Diease}</h2>
            <p className="disease-description">
              {diseaseDetail.Description.Description}
            </p>
          </div>
          <div className="button-container">
            <button onClick={() => handleButtonClick("Medication")}>
              Medication
            </button>
            <button onClick={() => handleButtonClick("Diet")}>Diet</button>
            <button onClick={() => handleButtonClick("Workout")}>
              Workout
            </button>
            <button onClick={() => handleButtonClick("Precautions")}>
              Precautions
            </button>
          </div>

          {selectedSection && (
            <div className="info-paragraph">
              <p>{renderParagraph()}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Disease;
