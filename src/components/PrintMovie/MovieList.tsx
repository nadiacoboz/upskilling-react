import { useState, type JSX } from "react"
import type { MovieListProps } from "./types";
import PrintMovie from "./PrintMovie";
import type { Movie } from "../../types/movie";

function MovieList({movies}: MovieListProps): JSX.Element{
    const [showRecent, setShowRecent] = useState<boolean>(false);

    const filteredMovies = showRecent
    ? movies.filter((movie) => movie.releaseDate.getFullYear() >= 2025 )
    : movies;

    return (
       <>
            <button onClick={()=> setShowRecent(!showRecent) }> 
                { showRecent ? "Mostrar todas las pelucias" : "Mostrar las recientes"}
            </button>

            {filteredMovies.map((movie: Movie) => (
                <PrintMovie key = {movie.id} movie = { movie} />
            ))}
       </>
    )
    
}

export default MovieList