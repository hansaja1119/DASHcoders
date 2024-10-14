# ReMeD Prediction

This web-based application allows users to predict diseases based on their symptoms using an AI model. It also provides relevant precautions, medications, diet plans, and workout suggestions for the predicted disease.

## Features

- **Symptom Selection**: Users can select symptoms they are experiencing.
- **Disease Prediction**: An AI module predicts the disease based on the selected symptoms.
- **Precautions**: Suggested precautions are provided for the predicted disease.
- **Medications**: Relevant medications are recommended.
- **Diet Plans**: Users receive diet recommendations based on the disease.
- **Workouts**: Workout suggestions are given to aid recovery or improve health conditions.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Ballerina
- **Database**: MySQL-based database
- **AI Model**: Python (for disease prediction)
- **Communication**: Ballerina services handle the connection between frontend and backend

## Project Structure

```bash
├── frontend/               # React.js frontend
├── backend/                # Ballerina services and database operations
    ├── modules/            # Ballerina modules for db connection and types
    └── resources/          # Python scripts and other resources
        ├── models/         # AI models for disease prediction
        ├── datasets/       # Training dataset
```

## Set up

1. Clone the project

```
$ git clone https://github.com/hansaja1119/DASHcoders.git
```

2. Add a new file named `Config.toml` in the `/backend` directory and add the following configurations for the MySQL server.

```
[backend.db]
host = "<Database Host>"
port = <Database Port>
user = <Username of MySQL user>
password = <Password of MySQL user>
database = <database name>
```

3. Run the following SQL query to create a new database in the MySQL server.

```
CREATE DATABASE <database name>;
```

4. Run the SQL scripts `backend/resources/dashcoders.sql` to create the tables and insert data into the tables in the MySQL database.

5. Open a new Terminal in the project path and run the Ballerina service

```
$ cd DASHCODERS/backend
$ bal run
```

6. Then open a new terminal in the project path and run the React service

```
$ cd DASHCODERS/frontend
$ npm start
```
