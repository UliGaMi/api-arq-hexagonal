import express from 'express';
import {movieRouter} from './movies/infrastructure/movies_routes.js';

const app = express();

app.use(express.json());
app.use(movieRouter);
app.listen(3000);