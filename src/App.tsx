import "./App.css";
import PrintMovie from "./components/PrintMovie/PrintMovie";
import { mockMovie } from "./mocks/movie.mocks";

function App() {
  return (
    <>      
      <h1>Catálogo de Peliculas Acceture</h1>
      <hr/>
      <h1><PrintMovie movie={mockMovie} /></h1>

      {/* <h1><PrintMovieTitle title="Citizen Kane" /></h1> */}
    </>
  )
}

export default App
