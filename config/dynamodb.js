const { DynamoDBClient } =
require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({
    region: process.env.AWS_REGION
});

module.exports = client;
