import type { JSX } from "react";
import "./App.css";

const name: string = "Hola Luis!";

function PrintComponent(): JSX.Element {
  return <h3>Mi primer componente</h3>;
}

function PrintMovie(): JSX.Element {
  return (
    <>
      <h3>ID: 512</h3>
      <h3>Title: Citizen Kane</h3>
      <h3>Descripcion: Esta es uuna pelicula antigua</h3>
      <h3>pictureUrl: ruta de la imagen</h3>
      <h3>releaseDate: 1987-10-05</h3>
    </>
  );
}

function App() {
  return (
    <>
      Hola React!

      <p>Hola Mundo</p>
      <br />
      
      {/* Mostrar informacion en react */}
      {5 + 7 + 7 + 8}
      <br />
      {"5+64+4"}
      <br />

      {/* Renderizar informacion */}      
      <p>{"Hola compañero: "}{name}</p>
      <p>{`Hola compañero: ${name}`}</p>
      
      <h1>
        <PrintComponent />
      </h1>
      
      <br />
      <h1><PrintMovie /></h1>
      <h1><PrintMovie /></h1>
      <h1><PrintMovie /></h1>
      <h1><PrintMovie /></h1>
      <h1><PrintMovie /></h1>
    </>
  )
}

export default App;
