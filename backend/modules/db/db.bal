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

public isolated function selectDiseaseDescription(string diease) returns types:Disease_description|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM disease_description WHERE Disease = ${diease}`;
    return dbClient->queryRow(selectQuery);
}

public isolated function selectMedicine(string diease) returns types:Disease_medication[]|error {
    sql:ParameterizedQuery selectQuery = `SELECT Disease, Medication FROM Disease_medication WHERE Disease = ${diease} `;
    stream<types:Disease_medication, error?> medicationStream = dbClient->query(selectQuery);
    return from types:Disease_medication med in medicationStream
        select med;
}

public isolated function selectWorkouts(string diease) returns types:Workout[]|error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM workout WHERE Disease = ${diease}`;
    stream<types:Workout, error?> workoutStream = dbClient->query(selectQuery);
    return from types:Workout med in workoutStream
        select med;
}

public isolated function getSymptompsCount() returns string|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT count(id) FROM symptom`;
    return dbClient->queryRow(selectQuery);
}
