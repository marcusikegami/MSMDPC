import express from 'express';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import signToken from '../utils/signToken.js';

dotenv.config();
const router = express.Router();

AWS.config.update({
    region: 'us-west-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = 'Scholl-Posts';

router.post('/login', (req, res) => {
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;

  
    if (req.body.username != username && req.body.password != password) {
        res.status(401).send('Invalid username or password');
        return;
    }
        // login successful, do something here (e.g. set a session cookie)
        console.log('login successful');
        const token = signToken(username);
        return res.json(token) ;
  });

router.post('/admin/', (req, res) => {
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


export default router;