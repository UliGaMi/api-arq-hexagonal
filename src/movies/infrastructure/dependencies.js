import { MemoryMoviesRepository } from "./memory_movies_repository.js";
import { GetAllMovies } from "../application/get_all_use_case.js";
import { MoviesController } from "./movies_controller.js";

const memoryMovieRepository = new MemoryMoviesRepository();
const getAllMoviesUseCase = new GetAllMovies(memoryMovieRepository);
export const moviesController = new MoviesController(getAllMoviesUseCase);
