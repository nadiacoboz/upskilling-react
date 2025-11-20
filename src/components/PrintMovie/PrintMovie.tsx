import type { JSX } from "react";
import type { movieProps } from "./type";

function PrintMovie({movie}: movieProps): JSX.Element {
  return (
    <>
      <h3>ID: {movie.id}</h3>
      <h3>Title: {movie.title}</h3>
      <h3>Descripcion: {movie.description}</h3>
      <h3>pictureUrl: {movie.pictureURL}</h3>
      <h3>releaseDate: {movie.releaseDate.toISOString().split('T')[0]}</h3>
    </>
  )
}

export default PrintMovie