import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Main from "./components/layout/Main";
import { appRoutes } from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const routing = useRoutes(appRoutes);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>{routing}</Suspense>      
    </>
    
  );
}

export default App;
