import "./App.css";
import PrintMovie from "./components/PrintMovie/PrintMovie";
import { mockMovie, movieList } from "./mocks/movie.mocks";

function App() {
  return (
    <>      
      <h1>Catálogo de Peliculas Acceture</h1>
      <hr/>
      <h1><PrintMovie movie={mockMovie} /></h1>     

      {/* {JSON.stringify(movieList)} */}

      {/* {movieList
        .filter((movie) => movie.releaseDate.getFullYear() >= 2024)
        .map((movie) => (<PrintMovie key={movie.id} movie={movie} />)        
      )} */}

      {movieList.map((movie) => 
        movie.description.includes("to") ? (<PrintMovie key={movie.id} movie={movie} />) : null
      )}
    </>
  )
}

export default App