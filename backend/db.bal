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

isolated function selectDiseaseDescription(string diease) returns Disease_description|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM disease_description WHERE Disease = ${diease}`;
    return dbClient->queryRow(selectQuery);
}

isolated function selectMedicine(string diease) returns Disease_medication[]|error {
    sql:ParameterizedQuery selectQuery = `SELECT Disease, Medication FROM Disease_medication WHERE Disease = ${diease} `;
    stream<Disease_medication, error?> medicationStream = dbClient->query(selectQuery);
    return from Disease_medication med in medicationStream
        select med;
}

isolated function selectWorkouts(string diease) returns Workout[]|error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM workout WHERE Disease = ${diease}`;
    stream<Workout, error?> workoutStream = dbClient->query(selectQuery);
    return from Workout med in workoutStream
        select med;
}
