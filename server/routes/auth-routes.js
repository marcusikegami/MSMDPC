const express = require('express');
const passport = require('passport');

const router = express.Router();

// Auth Routes

router.get('/google/callback', passport.authenticate('google', { 
  scope: ['profile', 'email'],
  failureRedirect: '/login/failure',
  successRedirect: process.env.CLIENT_URL,
}));

router.get('/login/failure', (req, res) => {
  res.status(401).json({
    error: true,
    message: 'Login Failed'
  });
});

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: 'Login Successful',
      user: req.user
    });
  }
})
//Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

module.exports = router;