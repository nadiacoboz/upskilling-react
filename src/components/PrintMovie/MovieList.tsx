//import { useCallback, useEffect, useState, type JSX } from "react"
import { type JSX } from "react"
import type { MovieListProps } from "./types";
import PrintMovie from "./PrintMovie";
import type { Movie } from "../../types/movie";
import useUser from "../../hooks/useUser";
import useMovies from "../../hooks/useMovie";

function MovieList({movies}: MovieListProps): JSX.Element{
    
    const {loading, movies: filteredMovies, showRecent, toggleShowRecent} = useMovies(movies);
    const {username} = useUser();
  
    if(loading){
        return <p>Cargando Peliculas ... </p>;
    }
    return (
       <>
            <button onClick={toggleShowRecent}> 
                { showRecent ? "Mostrar todas las pelucias" : "Mostrar las recientes"}
            </button>

            <p>
                Bienvenido {username}!
            </p>
            {filteredMovies.length > 0 
            ? filteredMovies.map((movie: Movie) => (
                <PrintMovie key = {movie.id} movie = {movie} />
                ))
            : 
            (<p>No se encontratron peliculas</p>)
            }
            
       </>
    )    
}

export default MovieList