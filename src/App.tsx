import { useRoutes } from 'react-router-dom'
import './App.css'
import { appRoutes } from './routes/routes';
import { Suspense } from 'react';

function App() {
  const routing = useRoutes(appRoutes);
 return (
   <>
    <h1>Catálogo de Peliculas Accenture</h1>
    <hr/>
    <Suspense fallback={<p>Loading...</p>}>{routing}</Suspense>
    
   </>   
 )
}

export default App