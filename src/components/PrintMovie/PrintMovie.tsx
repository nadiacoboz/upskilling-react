import type { JSX } from "react";
import type { movieProps } from "./type";

function PrintMovie({movie}: movieProps): JSX.Element {
  return (
    <>
      <h3>ID: {movie.id}</h3>
      <h3>Title: {movie.title}</h3>
      <h3>Descripcion: {movie.descripcion}</h3>
      <h3>pictureUrl: {movie.pictureUrl}</h3>
      <h3>releaseDate: {movie.releaseDate.toDateString()}</h3>
    </>
  )
}

// function PrintMovieTitle({title}: moviePropsTitle): JSX.Element {
//   return (
//     <>
//       <h3>ID: 512</h3>
//       <h3>Title: {title}</h3>
//       <h3>Descripcion: Esta es uuna pelicula antigua</h3>
//       <h3>pictureUrl: ruta de la imagen</h3>
//       <h3>releaseDate: 1987-10-05</h3>
//     </>
//   );
// }

export default PrintMovie