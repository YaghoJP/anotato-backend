import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { router } from './routes';
import { errorHandler } from '../src/middlewares/errorHandler';

const app = express();

app.use(cors());

app.use(express.json())

app.use(router);

app.use(errorHandler);

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log(`Servido rodando na porta ${PORT}`);
});