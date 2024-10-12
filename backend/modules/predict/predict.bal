import backend.db;

import ballerina/http;
import ballerina/io;
import ballerina/os;
import ballerina/sql;

public function predictDisease(string[] Symptoms) returns string|http:InternalServerError|http:NotFound {
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

function getPreditedDisease(string[] inputData) returns string|error {
    string filepath = "resources/main.py";

    // Convert the int array to a comma-separated string
    string inputDataStr = string:'join(",", ...inputData);

    // Define the command and arguments to execute the Python script
    os:Process result = check os:exec({
        value: "python",
        arguments: [filepath, inputDataStr]
    });

    int status = check result.waitForExit();
    io:println(string `Process exit with status: ${status}`);

    byte[] outputBytes = check result.output();
    string output = check 'string:fromBytes(outputBytes);

    return output;
}
