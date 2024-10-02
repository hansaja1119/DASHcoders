import ballerina/http;
import ballerina/sql;

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:3000"],
        allowMethods: ["GET", "POST", "OPTIONS"]
    }
}

service /predict on new http:Listener(9090) {

    isolated resource function get cargos/[string cargoId]/orders() returns Order[]|error {
        return selectOrdersByCargoId(cargoId);
    };
}
