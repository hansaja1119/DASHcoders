import ballerina/sql;
import ballerinax/mysql;

configurable int port = ?;
configurable string host = ?;
configurable string user = ?;
configurable string database = ?;
configurable string password = ?;
configurable mysql:Options & readonly connectionOptions = {};

final mysql:Client dbClient = check new (
    host = host,
    port = port,
    database = database,
    user = user,
    password = password,
    options = connectionOptions
);

isolated function selectOrder(string id) returns Order|sql:Error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM Orders WHERE id = ${id}`;
    return dbClient->queryRow(selectQuery);
}

isolated function selectOrdersByCargoId(string cargoId) returns Order[]|error {
    sql:ParameterizedQuery selectQuery = `SELECT * FROM Orders WHERE cargoId = ${cargoId} order by quantity desc`;
    stream<Order, error?> orderStream = dbClient->query(selectQuery);
    return from Order ord in orderStream
        select ord;
}
