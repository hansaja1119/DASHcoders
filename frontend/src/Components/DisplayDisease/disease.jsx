import React, { useState } from "react";
import "./disease.css";

const Disease = () => {
  const [selectedSection, setSelectedSection] = useState("");

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  const renderParagraph = () => {
    switch (selectedSection) {
      case "Medication":
        return "This section provides information about the medication needed for the disease.";
      case "Diet":
        return "This section covers the diet plan and nutrition information for the condition.";
      case "Workout":
        return "This section provides details on the recommended workout routines.";
      case "Precautions":
        return "This section lists the precautions to take to manage the condition effectively.";
      default:
        return "";
    }
  };

  return (
    <div className="info-page">
      <h1 className="page-title">Disease Information</h1>
      
      <div className="button-container">
        <button onClick={() => handleButtonClick("Medication")}>
          Medication
        </button>
        <button onClick={() => handleButtonClick("Diet")}>Diet</button>
        <button onClick={() => handleButtonClick("Workout")}>Workout</button>
        <button onClick={() => handleButtonClick("Precautions")}>
          Precautions
        </button>
      </div>

      {selectedSection && (
        <div className="info-paragraph">
          <p>{renderParagraph()}</p>
        </div>
      )}
    </div>
  );
};

export default Disease;
