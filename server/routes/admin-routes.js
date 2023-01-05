const express = require('express');
const AWS = require('aws-sdk');
require('dotenv').config();
const router = express.Router();

const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = 'Scholl-Posts';

router.post('/create-post', (req, res) => {
    const params = {
        TableName: table,
        Item: {
            title: req.body.header,
            video: req.body.video,
            image: req.body.image,
            imagecaption: req.body.imagecaption,
            body: req.body.body,
            category: req.body.category,
            createdAt: Date.now(),
            }
    };
    dynamodb.put(params, (err, data) => {
        if (err) {
            console.error('Unable to add post', req.body.header, '. Error JSON:', JSON.stringify(err, null, 2));
            res.status(400).json({ error: 'Could not create post' });
        } else {
            console.log('PutItem succeeded:', req.body.header);
            res.json({ Added: JSON.stringify(data, null, 2) });
        }
    });
});


module.exports = router;