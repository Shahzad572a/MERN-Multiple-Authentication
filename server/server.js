import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import database from './config/database.js';
import colors from 'colors';
import authRoutes from './routes/auth.js';

dotenv.config();
database();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: 'http://localhost:3000' }));
}

// Routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});
