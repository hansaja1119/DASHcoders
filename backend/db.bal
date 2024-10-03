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

// isolated function selectMedicine(string diease) returns Disease_medicationedication|sql:Error {
//     sql:ParameterizedQuery selectQuery = `SELECT Medication FROM disease_medication WHERE Disease = ${diease}`;
//     return dbClient->queryRow(selectQuery);
// }

isolated function selectMedicine(string diease) returns Disease_medicationedication[]|error {
    sql:ParameterizedQuery selectQuery = `SELECT Medication FROM Disease_medication WHERE Disease = ${diease} `;
    stream<Disease_medicationedication, error?> medicationStream = dbClient->query(selectQuery);
    return from Disease_medicationedication med in medicationStream
        select med;
}
