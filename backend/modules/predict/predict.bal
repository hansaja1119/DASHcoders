import ballerina/io;
import ballerina/os;

public function predictDisease(string Symptoms) returns string|error? {
    string|error result = getPreditedDisease(Symptoms);
    // io:println("Current Working Directory: ", os:getCurrentDir);

    if (result is string) {
        io:println("Python Script Output: ", result);
    } else {
        io:println("Error executing Python script: ", result);
    }
    return result;
}

function getPreditedDisease(string inputData) returns string|error {
    string filepath = "resources/main.py";

    // Define the command and arguments to execute the Python script
    os:Process result = check os:exec({
        value: "python",
        arguments: [filepath, inputData]
    });

    int status = check result.waitForExit();
    io:println(string `Process exit with status: ${status}`);

    byte[]|os:Error err = result.output(io:stderr);
    if (err is os:Error) {
        return err;
    }
    string output = check 'string:fromBytes(err);

    return output;
}
