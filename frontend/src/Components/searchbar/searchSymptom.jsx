import React, { useEffect, useState } from "react";
import "./searchSymptom.css";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function SearchSymptoms() {
  const [query, setQuery] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symp, setSymp] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelectSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const findDisease = async () => {
    setIsLoading(true);
    const sympList = selectedSymptoms.join(",");

    try {
      const res = await apiRequest.post("/predict", sympList, {
        headers: {
          "Content-Type": "text/plain",
        },
      });
      console.log(res.data);
      navigate("/detail/" + res.data, { state: { selectedSymptoms } });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
                selectedSymptoms.includes(symptom.id) ? "selected" : ""
              }`}
              onClick={() => handleSelectSymptom(symptom.id)}
            >
              {highlightText(
                symptom.name.charAt(0).toUpperCase() + symptom.name.slice(1),
                query
              )}
            </li>
          ))}
      </ul>

      {selectedSymptoms.length > 0 && (
        <div className="selectedSymptoms">
          <h3>Selected Symptoms:</h3>
          <ul>
            {selectedSymptoms.map((symptom, index) => (
              <li key={index}>
                {symp[symptom].name.charAt(0).toUpperCase() +
                  symp[symptom].name.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedSymptoms.length > 0 && (
        <button
          className="findDiseaseButton"
          onClick={findDisease}
          disabled={isLoading}
        >
          {isLoading ? "Predicting..." : "Predict My Disease"}
        </button>
      )}

      {isLoading && (
        <div className="loading-indicator">
          <h2>Predicting, please wait...</h2>
        </div>
      )}
    </div>
  );
}

export default SearchSymptoms;
