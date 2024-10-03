import ballerina/http;

// import ballerina/sql;

// @http:ServiceConfig {
//     cors: {
//         allowOrigins: ["http://localhost:3000"],
//         allowMethods: ["GET", "POST", "OPTIONS"]
//     }
// }

service /api on new http:Listener(9090) {

    isolated resource function get medicines/[string Disease]() returns Disease_medicationedication[]|error {
        return selectMedicine(Disease);
    };
}
