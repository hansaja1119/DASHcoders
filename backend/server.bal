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

    isolated resource function get symptoms() returns types:Symptoms[]|http:NotFound|http:InternalServerError {
        return predict:getSymptoms();
    };

    resource function post predict(@http:Payload string Symptoms) returns string|http:InternalServerError|http:NotFound {
        return predict:predictDisease(Symptoms);
    };

    // created a master service, so without calling each sub service one by one at frontend now can i call this one only
    isolated resource function get disease/[string Disease]() returns types:Disease|http:InternalServerError {
        return disease:getDisease(Disease);
    };

    // sub services
    isolated resource function get medicines/[string Disease]() returns types:Disease_medication[]|http:NotFound|http:InternalServerError {
        return disease:getMedicines(Disease);
    };

    isolated resource function get workout/[string Disease]() returns types:Workout[]|http:NotFound|http:InternalServerError {
        return disease:getWorkouts(Disease);
    };

    isolated resource function get precaution/[string Disease]() returns types:Precaution[]|http:NotFound|http:InternalServerError {
        return disease:getPrecaution(Disease);
    };

    isolated resource function get diets/[string Disease]() returns types:Diet[]|http:NotFound|http:InternalServerError {
        return disease:getDiets(Disease);
    };

    isolated resource function get description/[string Disease]() returns types:Disease_description|http:NotFound|http:InternalServerError {
        return disease:getDescription(Disease);
    };

}

