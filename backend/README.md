# API Endpoints

## Disease Prediction

**POST /predict**

- Payload: List of symptoms (comma-separated string)
- Response: Predicted disease

## Get Disease Details

**GET /disease/{diseaseName}**

- Response: Precautions, Medications, Workouts, Diet plans

**Other API endpoints include:**

- GET /symptoms: List of all symptoms
- GET /precautions: Precautions for a disease
- GET /medications: Medications for a disease
- GET /workouts: Workout plans for a disease
- GET /diets: Diet plans for a disease

## Future Improvements

- Enhance AI model accuracy with more data
- Add a user authentication system
