import backend.db;
import backend.disease;
import backend.predict;
import backend.types;

import ballerina/http;

// import ballerina/io;
// import ballerina/os;

// import ballerina/sql;

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:3000"],
        allowCredentials: true,
        allowMethods: ["GET", "POST", "OPTIONS"]
    }
}

service /api on new http:Listener(9090) {

    resource function post predict(@http:Payload string[] Symptoms) returns string|http:InternalServerError|http:NotFound {
        return predict:predictDisease(Symptoms);
    };

    isolated resource function get medicines/[string Disease]() returns types:Disease_medication[]|error {
        return db:selectMedicine(Disease);
    };

    isolated resource function get symptomCount() returns string|error {
        return db:getSymptompsCount();
    };

    isolated resource function get workout/[string Workout]() returns types:Workout[]|error {
        return db:selectWorkouts(Workout);
    };

    isolated resource function get description/[string Disease]() returns types:Disease_description|http:NotFound|http:InternalServerError {
        return disease:getDescription(Disease);
    };

    isolated resource function get symptoms() returns types:Symptoms[]|http:NotFound|http:InternalServerError {
        return predict:getSymptoms();
    };
}

