import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import type { UseMoviesResult } from "./types";
import { api } from "../lib/axios";
 
function useMovies(): UseMoviesResult {
    const [showRecent, setShowRecent] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const [error, setError] = useState<string|null>(null);
 
     useEffect(() => {
       const controller = new AbortController();
       async function fetchMovies(){
        try{
            setLoading(true);
            setError(null);
 
            //const res = await fetch("https://localhost:44300/api/movie/catalog", {signal: controller.signal});
            //const res = await api.get("https://localhost:44300/api/movie/catalog", {signal: controller.signal});
            const res = await api.get("https://app-react-couse-bk-htbzbpb6g9huh6em.centralus-01.azurewebsites.net/api/movie/catalog", {signal: controller.signal});
 
            // if(!res.ok){
            //     throw new Error(`HTTP ${res.status} - ${res.statusText}`);
            // }
            //const data = await res.json();
            const data = res.data as Array<Movie>;
//console.log(data);
            const normalized:Movie[] = data.map((movie: Movie) => ({
                ...movie,
                releaseDate:new Date(movie.releaseDate)
            }))
            setMovieData(normalized);
 
       }
      //  catch(err:unknown){
      //   if((err as any)?.name === 'AbortError')
      //       setError(err instanceof Error ? err.message : "Unknown error")
      //  }
      catch(err:any){
        if(err?.name === "CanceledError" || err?.code == "ERR_CANCELLED") return;

        const message = err?.response?.data?.message ?? err?.message ?? "UnKnow error";

        setError(message);
       }
       finally{
            setLoading(false);
       }
    }
    fetchMovies();
    return()=> controller.abort();
    }, []);
 
    const filteredMovies = useCallback(() =>{
        return showRecent
    ? movieData.filter((movie) => movie.releaseDate.getFullYear()>2020)
    : movieData;
},[showRecent, movieData]);
 
    return{
 
        loading,
        movies: filteredMovies(),
        showRecent,
        toggleShowRecent: () => setShowRecent(() => !showRecent),
        error,
    }
}
 
    export default useMovies