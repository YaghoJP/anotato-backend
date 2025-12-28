import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(cors());

app.use(router);

//app.use(middleware de erro)

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Servido rodando na porta ${PORT}`);
});