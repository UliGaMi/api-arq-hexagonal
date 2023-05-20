import { Movie } from "../domain/movie.js";
import { MoviesRepository } from "../domain/movies_repository.js";
import { createPool } from "mysql2/promise";

const pool = createPool({ //Cambiar credenciales
  host: "localhost",
  user: "root",
  password: "MYSQLUlises",
  port: 3306,
  database: "shortflix",
});

export class MemoryMoviesRepository extends MoviesRepository{
    
    async getAll() {
        const [movies] = await pool.query("SELECT * FROM movies");
        console.log(movies);
        return movies.map((movie) => {
          return new Movie(
            movie.id,
            movie.title,
            movie.duration,
            movie.repositoryServerLink,
            movie.synopsis,
            movie.director,
            movie.release,
            movie.genre,
            movie.classification,
            movie.production,
            movie.rate
          );
        });
    }

}