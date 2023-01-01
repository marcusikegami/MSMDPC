import express from 'express';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

AWS.config.update({
    region: 'us-west-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

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
        return res.json(token);
  });

router.get('/login', (req, res) => {
    window.location.href(process.env.AWS_COGNITO_LOGIN_URI || 'https://scholl-website.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=7u9sv3qmv6mbiill0c4q5b7nbd&redirect_uri=http://localhost:3000/admin');
});

router.post('/logout', (req, res) => {
    // logout successful, do something here (e.g. clear a session cookie)
    console.log('logout successful');
    res.json({ message: 'logout successful' });
});

export default router;