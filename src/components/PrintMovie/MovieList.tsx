import { useCallback, useEffect, useState, type JSX } from "react"
import type { MovieListProps } from "./types";
import PrintMovie from "./PrintMovie";
import type { Movie } from "../../types/movie";
import useUser from "../../hooks/useUser";

function MovieList({movies}: MovieListProps): JSX.Element{
    const [showRecent, setShowRecent] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const {username} = useUser();
    
    useEffect(() => {
        setTimeout(() => {
            setMovieData(movies);
            setLoading(false);
        }, 2000)
    }, [movies]);

    const filteredMovies = showRecent
    ? movieData.filter((movie) => movie.releaseDate.getFullYear() > 2025 )
    : movieData;

    
    if(loading){
        return <p>Cargando Peliculas ... </p>;
    }
    return (
       <>
            <button onClick={()=> setShowRecent(!showRecent) }> 
                { showRecent ? "Mostrar todas las pelucias" : "Mostrar las recientes"}
            </button>

            <p>
                Bienvenido {username}!
            </p>
            {filteredMovies.length > 0 
            ? filteredMovies.map((movie: Movie) => (
                <PrintMovie key = {movie.id} movie = { movie} />
                ))
            : 
            (<p>No se encontratron peliculas</p>)
            }

            
       </>
    )
    
}

export default MovieList