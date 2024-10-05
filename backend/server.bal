import ballerina/http;
import ballerina/io;
import ballerina/os;
import ballerina/sql;

// @http:ServiceConfig {
//     cors: {
//         allowOrigins: ["http://localhost:3000"],
//         allowMethods: ["GET", "POST", "OPTIONS"]
//     }
// }

service /api on new http:Listener(9090) {

    resource function get predict/[string Symptoms]() returns error? {
        var result = executePythonScript(Symptoms);
        if (result is string) {
            io:println("Python Script Output: ", result);
        } else {
            io:println("Error executing Python script: ", result);
        }
    };

    isolated resource function get medicines/[string Disease]() returns Disease_medication[]|error {
        return selectMedicine(Disease);
    };

    isolated resource function get description/[string Disease]() returns Disease_description|http:NotFound|http:InternalServerError {
        Disease_description|sql:Error disease_description = selectDiseaseDescription(Disease);

        if disease_description is Disease_description {
            return disease_description;
        }
        if (disease_description is sql:NoRowsError) {
            return <http:NotFound>{body: {message: "Diease not found"}};
        }
        return <http:InternalServerError>{body: {message: "Error occurred while retrieving the data"}};
    };

    isolated resource function get workout/[string Disease]() returns Workout[]|error {
        return selectWorkouts(Disease);
    };
}

public function executePythonScript(string inputData) returns string|error? {
    string filepath = "model/main.py";

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
