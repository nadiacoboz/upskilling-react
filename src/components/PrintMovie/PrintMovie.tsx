import type { JSX } from "react"
import type { movieProps } from "./types"
  
function PrintMovie({movie}:movieProps): JSX.Element{
return(
    <>
    <h3>ID {movie.movieId} </h3>
    <h3>Title:{movie.title} </h3>
    <h3>Description: {movie.description}</h3>
    <div>
        <img 
            src={movie.pictureUrl} 
            style={{width: "200px", height: "auto", borderRadius: "8px" }} 
            />
    </div>
    <h3>releaseDate: {movie.releaseDate.toISOString().split('T')[0] }</h3>
    
    </>
)
 
}
export default PrintMovie