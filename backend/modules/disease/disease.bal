import backend.db;
import backend.types;

import ballerina/http;
import ballerina/sql;

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
