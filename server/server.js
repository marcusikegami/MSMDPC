const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/user-routes.js');
const adminRoutes = require('./routes/admin-routes.js');
const authRoutes = require('./routes/auth-routes.js');

const PORT = process.env.PORT || 3001;
const app = express();


//  Configure Session Storage 
app.use(cookieSession({
  name: 'session',
  keys: ['Authentication'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Configure Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000', // <-- location of the react app were connecting to
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

// Auth Middleware - This will check if the user is logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};



// express middleware, used to be bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use('/', userRoutes);
// app.use(require('./routes'));
app.use('/api/', adminRoutes);
app.use('/auth/', authRoutes);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`),
);