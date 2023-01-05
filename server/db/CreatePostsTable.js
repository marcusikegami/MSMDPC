const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = {
    TableName: 'Scholl-Posts',
    KeySchema: [
        { AttributeName: 'title', KeyType: 'HASH' }, // Partition key
        { AttributeName: 'createdAt', KeyType: 'RANGE' } // Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: 'title', AttributeType: 'S' },
        { AttributeName: 'createdAt', AttributeType: 'N' }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    },
};

dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
        console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
    }
});