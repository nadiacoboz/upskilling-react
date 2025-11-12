import "./App.css";
import PrintMovie from "./components/PrintMovie/PrintMovie";

function App() {
  return (
    <>
      <h1><PrintMovie movie={{
        id: 1,
        title: 'Citizen Kane',
        descripcion: 'This film examines the life of Kane',
        pictureUrl: 'imageURL',
        releaseDate: new Date('1941-10-25')
      }} /></h1>

      {/* <h1><PrintMovieTitle title="Citizen Kane" /></h1> */}
    </>
  )
}

export default App
