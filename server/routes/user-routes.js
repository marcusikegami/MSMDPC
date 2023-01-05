const express = require('express');
const AWS = require('aws-sdk');
const router = express.Router();

AWS.config.update({
    region: 'us-west-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = 'Scholl-Posts';

router.get('/home', (req, res) => {
    const params = {
        TableName: table
    };
    // scan returns all the post items in our table
    dynamodb.scan(params, (err, data) => {
        if (err) {
            res.status(400).json({ error: 'Could not get posts' });
        }
        res.json(data.Items);
    });
});

router.get('/posts/:category', (req, res) => {
    console.log(`querying for posts from ${req.params.category}`);
    const params = {
        TableName: table,
        FilterExpression: '#ctg = :category', // The search condition is the category
        ExpressionAttributeNames: {
            '#ttl': 'title',
            '#ca': 'createdAt',
            '#ctg': 'category',
            '#img': 'image',
            '#imgcpt': 'imagecaption',
            '#vid': 'video',
            '#bdy': 'body',
        },
        ExpressionAttributeValues: { // This is where the category is defined which is passed in the URL by the client
            ':category': req.params.category,
        },
        ProjectionExpression: '#ttl, #ca, #ctg, #img, #imgcpt, #vid, #bdy', // These attributes are returned
        ScanIndexForward: false, // true is default, false is descending which shows newest posts first
    };

    dynamodb.scan(params, (err, data) => {
        if (err) {
            console.error('Unable to query. Error:', JSON.stringify(err, null, 2));
            res.status(500).json(err); // an error occurred
          } else {
            console.log('Query succeeded.');
            res.json(data.Items);
          }
    });
});

module.exports = router;