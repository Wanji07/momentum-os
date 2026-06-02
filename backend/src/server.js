import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db.js';
import { healthCheck } from './controllers/healthCheck.js';


// import path from 'path' = FOR DEPLOYMENT, __DIRNAME

dotenv.config();

// MIDDLEWARE
const app = express();

app.use((req, res, next) => {
    console.log(`The request method is: ${req.method}, and the url is: ${req.url}`);
    next();
});

const PORT = process.env.PORT || 5001;

const router = express.Router();

router.get("/api/health", healthCheck);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT: " + PORT);
    })
})