//import type { JSX } from 'react'
import './App.css'
//import PrintMovie from './components/PrintMovie/PrintMovie'
import MovieList from './components/PrintMovie/MovieList'
import UserForm from './components/userForm/UserForm'
import {mockMovie, movieList } from './mocks/movies.mocks'
/*
function PrintMovie(): JSX.Element{
  return(
    <>
      <h3>ID: 512</h3>
      <h3>Title: Citizen Kane</h3>
      <h3>Descripcion: Esta es uuna pelicula antigua</h3>
      <h3>pictureUrl: ruta de la imagen</h3>
      <h3>releaseDate: 1987-10-05</h3>
    </>
  )
}*/
function App() {
 return (
   <>
    <h1>Catálogo de Peliculas Accenture</h1>
    <hr/>
    {/* <h1><PrintMovie movie={mockMovie}/></h1>    
 
  <h1>Catálogo en Json </h1>
   {JSON.stringify(movieList)}
 
    <h1>Movies mayor a 2024 </h1>
    {
      movieList
      .filter((movie) => movie.releaseDate.getFullYear() >= 2024 )
      .map((movie) => (
        <PrintMovie key={movie.id} movie = {movie} />
      )
    )}
 
      <h1>Movies con palabra clave </h1>
      {movieList.map((movie) => (
            movie.description.includes("to") ? (<PrintMovie key={movie.id} movie={movie} />) : null
       
       
        ))} */}

      {/* <MovieList movies = {movieList}/> */}
 
      <div>
        <h2>Formularios del Usuario:</h2>
        <UserForm />
      </div> 
   </>
   
 )
}
 
export default App