import backend.db;
import backend.types;

import ballerina/http;
import ballerina/io;
import ballerina/log;
import ballerina/os;
import ballerina/sql;

public function predictDisease(string Symptoms) returns string|http:InternalServerError|http:NotFound {
    string|error result = getPreditedDisease(Symptoms);

    if (result is string) {
        io:println("Python Script Output: ", result);
        string|sql:Error disease = db:selectDisease(result);

        if disease is string {
            return disease;
        }
        if (disease is sql:NoRowsError) {
            return <http:NotFound>{body: {message: "Diease not found"}};
        }
    } else {
        io:println("Error executing Python script: ", result);
    }
    return <http:InternalServerError>{body: {message: "Error occurred while predicting"}};
}

public isolated function getSymptoms() returns types:Symptoms[]|http:NotFound|http:InternalServerError {
    types:Symptoms[]|sql:Error symptomList = db:getSymptoms();

    if symptomList is types:Symptoms[] {
        return symptomList;
    }
    if (symptomList is sql:NoRowsError) {
        return <http:NotFound>{body: {message: "Symptoms not found"}};
    }

    // Log the error to get more details.
    if (symptomList is sql:Error) {
        log:printError("Error while retrieving symptoms from database", symptomList);
    }

    return <http:InternalServerError>{body: {message: "Error occurred while retrieving the data"}};
}

function getPreditedDisease(string inputData) returns string|error {
    // paths are accessing from root directory
    string filepath = "resources/main.py";

    // Convert the int array to a comma-separated string
    // string inputDataStr = string:'join(",", ...inputData);

    // Define the command and arguments to execute the Python script
    os:Process result = check os:exec({
                                          value: "python",
                                          arguments: [filepath, inputData]
                                      });

    int status = check result.waitForExit();
    io:println(string `Process exit with status: ${status}`);

    byte[] outputBytes = check result.output();
    string output = check 'string:fromBytes(outputBytes);

    return output;
}
