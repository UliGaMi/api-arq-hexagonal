export class MoviesController {
    constructor(getAllMoviesUseCase){
      this.getAllMoviesUseCase = getAllMoviesUseCase;
    }
  
    async getAll(req, res) {
      const movies = await this.getAllMoviesUseCase.run();
      res.status(200).json(movies);
    }
  
}
  




