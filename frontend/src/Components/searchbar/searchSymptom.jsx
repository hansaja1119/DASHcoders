import React, { useEffect, useState } from "react";
// import { Symptoms } from "./symptoms";
import "./searchSymptom.css";
import apiRequest from "../../lib/apiRequest";

function SearchSymptoms() {
  const [query, setQuery] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symp, setSymp] = useState([]);

  const handleSelectSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const findDisease = () => {
    alert(`Selected symptoms: ${selectedSymptoms.join(", ")}`);
  };

  const highlightText = (text, query) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  useEffect(() => {
    apiRequest
      .get("/symptoms")
      .then((res) => {
        setSymp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log(symp);

  return (
    <div className="searchSymptoms">
      <input
        type="text"
        placeholder="Search Your Symptoms..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {symp
          .filter((symptom) => symptom.name.toLowerCase().includes(query))
          .map((symptom) => (
            <li
              key={symptom.id}
              className={`listItem ${
                selectedSymptoms.includes(symptom.name) ? "selected" : ""
              }`}
              onClick={() => handleSelectSymptom(symptom.name)}
            >
              {highlightText(symptom.name, query)}
            </li>
          ))}
      </ul>

      {selectedSymptoms.length > 0 && (
        <div className="selectedSymptoms">
          <h3>Selected Symptoms:</h3>
          <ul>
            {selectedSymptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedSymptoms.length > 0 && (
        <button className="findDiseaseButton" onClick={findDisease}>
          Find My Disease
        </button>
      )}
    </div>
  );
}

export default SearchSymptoms;
