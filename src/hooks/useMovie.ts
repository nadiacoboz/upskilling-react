import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import type { UseMoviesResult } from "./types";

function useMovies(MovieListProps: Movie[]): UseMoviesResult {
  const [showRecent, setShowRecent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMovieData(MovieListProps);
      setLoading(false);
    }, 2000);
  }, [MovieListProps]);

  const filteredMovies = useCallback(() => {
    return showRecent
      ? movieData.filter((movie) => movie.releaseDate.getFullYear() > 2024)
      : movieData;
  }, [showRecent, movieData]);

  return {
    loading,
    movies: filteredMovies(),
    showRecent,
    toggleShowRecent: () => setShowRecent(() => !showRecent),
  };
}

export default useMovies;
