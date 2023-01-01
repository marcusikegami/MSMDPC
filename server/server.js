import express from 'express';
import path from 'path';
import authMiddleware from './utils/auth.js';
import userRoutes from './routes/user-routes.js';
import adminRoutes from './routes/admin-routes.js';
import authRoutes from './routes/auth-routes.js';

const PORT = process.env.PORT || 3001;
const app = express();

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