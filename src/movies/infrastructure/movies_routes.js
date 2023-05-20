import { Router } from "express";
import { moviesController } from "./dependencies.js";
export const movieRouter = Router();

movieRouter.get('/movies', (req, res) => moviesController.getAll(req, res));