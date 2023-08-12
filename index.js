import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import { dbConnection } from './database/config.js';

// Create the express server
const app = express();

// Configuration of CORS
app.use( cors() );

// Read and parse of the body
app.use( express.json() );

// Database
dbConnection();

// Public Directory
app.use( express.static('public') );

// Routes
import foodMetricsRouter from './routes/foodMetrics.js';

app.use( '/api/foodMetrics', foodMetricsRouter);

app.listen( process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT );
});
