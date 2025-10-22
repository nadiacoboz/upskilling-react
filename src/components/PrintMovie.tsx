import type { JSX } from "react"
import type { movieProps } from "./types"
  
function PrintMovie({movie}:movieProps): JSX.Element{
return(
    <>
    <h3>ID {movie.id} </h3>
    <h3>Title:{movie.title} </h3>
    <h3>Description: {movie.description}</h3>
    <h3>pictureURL: {movie.pictureURL }</h3>
    <h3>releaseDate: {movie.releaseDate.toDateString() }</h3>
    
    </>
)
 
}
export default PrintMovie