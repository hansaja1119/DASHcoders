import backend.types;

import ballerina/sql;
import ballerinax/mysql;

configurable int port = ?;
configurable string host = ?;
configurable string user = ?;
configurable string database = ?;
configurable string password = ?;
configurable mysql:Options & readonly connectionOptions = {};

final mysql:Client dbClient = check new (
    host = host,
    port = port,
    database = database,
    user = user,
    password = password,
    options = connectionOptions
);

public isolated function selectDisease(string dieaseID) returns string|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT name FROM disease WHERE id = ${dieaseID}`;
    return dbClient->queryRow(selectQuery);
}

public isolated function selectDiseaseDescription(string diease) returns types:Disease_description|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM disease_description WHERE Disease = ${diease}`;
    return dbClient->queryRow(selectQuery);
}

public isolated function selectMedicine(string diease) returns types:Disease_medication[]|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT Disease, Medication FROM Disease_medication WHERE Disease = ${diease} `;
    stream<types:Disease_medication, sql:Error?> medicationStream = dbClient->query(selectQuery);
    return from types:Disease_medication med in medicationStream
        select med;
}

public isolated function selectWorkouts(string diease) returns types:Workout[]|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM workout WHERE Disease = ${diease}`;
    stream<types:Workout, sql:Error?> workoutStream = dbClient->query(selectQuery);
    return from types:Workout work in workoutStream
        select work;
}

public isolated function selectPrecaution(string diease) returns types:Precaution[]|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM disease_precaution WHERE Disease = ${diease}`;
    stream<types:Precaution, sql:Error?> precautionStream = dbClient->query(selectQuery);
    return from types:Precaution pre in precautionStream
        select pre;
}

public isolated function selectDiet(string diease) returns types:Diet[]|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM diet WHERE Disease = ${diease}`;
    stream<types:Diet, sql:Error?> dietStream = dbClient->query(selectQuery);
    return from types:Diet diet in dietStream
        select diet;
}

public isolated function getSymptompsCount() returns string|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT count(id) FROM symptom`;
    return dbClient->queryRow(selectQuery);
}

public isolated function getSymptoms() returns types:Symptoms[]|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT id, name FROM symptom `;
    stream<types:Symptoms, sql:Error?> symptomStream = dbClient->query(selectQuery);
    return from types:Symptoms med in symptomStream
        select med;
}
