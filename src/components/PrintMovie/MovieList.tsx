//import { useCallback, useEffect, useState, type JSX } from "react"
import { type JSX } from "react";
//import type { MovieListProps } from "./types";
import PrintMovie from "./PrintMovie";
import type { Movie } from "../../types/movie";
import useUser from "../../hooks/useUser";
import useMovies from "../../hooks/useMovie";
import { Button, Col, Container, Row } from "react-bootstrap";

//function MovieList({movies}: MovieListProps): JSX.Element{
function MovieList(): JSX.Element {
  //const {loading, movies: filteredMovies, showRecent, toggleShowRecent} = useMovies(movies);
  const {
    loading,
    movies: filteredMovies,
    showRecent,
    toggleShowRecent,
  } = useMovies();
  const { username } = useUser();

  if (loading) {
    return <p>Cargando Peliculas ... </p>;
  }
  return (
    <>
      <Container className="my-4">
        <div className="d-flex justify-content-between align-items-center mb-3 ">
            <p>
                Bienvenido {username}!
            </p>
        
            <Button variant="secondary" onClick={toggleShowRecent}>
            {showRecent ? "Mostrar todas las pelucias" : "Mostrar las recientes"}
            </Button>

        </div>
        
        <Row xs={1} md={2} lg={4} class="g-4">
          {filteredMovies.length > 0 
          ? 
          (
            filteredMovies.map((movie: Movie) => (
              <Col key={movie.movieId} className="d-flex">
                <PrintMovie movie={movie} />
              </Col>
            ))
          ) : 
          (
            <p>No se encontratron peliculas</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default MovieList;
