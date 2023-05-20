
export class GetAllMovies{
    constructor(userRepository){ 
        this.userRepository = userRepository;
    }

    async run(){
        const movies = this.userRepository.getAll();
        return movies;
    }


}