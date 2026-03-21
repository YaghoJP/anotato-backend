import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const { Pool } = pkg;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

export default app;