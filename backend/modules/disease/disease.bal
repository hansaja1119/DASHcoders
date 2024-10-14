import backend.db;
import backend.types;

import ballerina/http;
import ballerina/sql;

//  master service function
public isolated function getDisease(string Disease) returns types:Disease|http:InternalServerError {
    types:Disease_description|sql:Error disease_description = db:selectDiseaseDescription(Disease);
    if (disease_description is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving disease description"}};
    }

    types:Disease_medication[]|sql:Error medications = db:selectMedicine(Disease);
    if (medications is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving medications"}};
    }

    types:Precaution[]|sql:Error disease_precaution = db:selectPrecaution(Disease);
    if (disease_precaution is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving precautions"}};
    }

    types:Workout[]|sql:Error workouts = db:selectWorkouts(Disease);
    if (workouts is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving workouts"}};
    }

    types:Diet[]|sql:Error diets = db:selectDiet(Disease);
    if (diets is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving diet plans"}};
    }

    // If all data is retrieved successfully, construct the Disease record
    types:Disease diseaseRecord = {
        Diease: Disease,
        Description: <types:Disease_description>disease_description,
        Medications: <types:Disease_medication[]>medications,
        Precautions: <types:Precaution[]>disease_precaution,
        Workouts: <types:Workout[]>workouts,
        Dietplans: <types:Diet[]>diets
    };

    return diseaseRecord;
}

//  sub servces functions

public isolated function getDescription(string Disease) returns types:Disease_description|http:NotFound|http:InternalServerError {
    types:Disease_description|sql:Error disease_description = db:selectDiseaseDescription(Disease);

    if disease_description is types:Disease_description {
        return disease_description;
    }
    if (disease_description is sql:NoRowsError) {
        return <http:NotFound>{body: {message: "Diease not found"}};
    }
    return <http:InternalServerError>{body: {message: "Error occurred while retrieving the data"}};
}

public isolated function getPrecaution(string Disease) returns types:Precaution[]|http:NotFound|http:InternalServerError {
    types:Precaution[]|sql:Error disease_precaution = db:selectPrecaution(Disease);

    // Check if the result is an array and if it's empty
    if (disease_precaution is types:Precaution[]) {
        if (disease_precaution.length() == 0) {
            return <http:NotFound>{body: {message: "Precautions not found"}};
        }
        return disease_precaution;
    }

    if (disease_precaution is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving the data"}};
    }
}

public isolated function getWorkouts(string Disease) returns types:Workout[]|http:NotFound|http:InternalServerError {
    types:Workout[]|sql:Error workouts = db:selectWorkouts(Disease);

    // Check if the result is an array and if it's empty
    if (workouts is types:Workout[]) {
        if (workouts.length() == 0) {
            return <http:NotFound>{body: {message: "Workouts not found"}};
        }
        return workouts;
    }

    if (workouts is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving the data"}};
    }
}

public isolated function getMedicines(string Disease) returns types:Disease_medication[]|http:NotFound|http:InternalServerError {
    types:Disease_medication[]|sql:Error medications = db:selectMedicine(Disease);

    // Check if the result is an array and if it's empty
    if (medications is types:Disease_medication[]) {
        if (medications.length() == 0) {
            return <http:NotFound>{body: {message: "Medications not found"}};
        }
        return medications;
    }

    if (medications is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving the data"}};
    }
}

public isolated function getDiets(string Disease) returns types:Diet[]|http:NotFound|http:InternalServerError {
    types:Diet[]|sql:Error diets = db:selectDiet(Disease);

    // Check if the result is an array and if it's empty
    if (diets is types:Diet[]) {
        if (diets.length() == 0) {
            return <http:NotFound>{body: {message: "Diets not found"}};
        }
        return diets;
    }

    if (diets is sql:Error) {
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving the data"}};
    }
}
