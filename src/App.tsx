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

      {movieList.map((movie) =>
        <PrintMovie key={movie.id} movie={movie} />
      )}
    </>
  )
}

export default App
