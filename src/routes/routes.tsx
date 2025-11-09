import type { RouteObject } from "react-router-dom";
//import MovieList from "../components/PrintMovie/MovieList";
import UserForm from "../components/userForm/UserForm";
import PrintMovieWrapper from "../components/PrintMovie/PrintMovieWrapper";
import Main from "../components/layout/Main";
import MovieList from "../components/PrintMovie/MovieList";
import PageNotFound from "../components/layout/PageNotFound";
import { Container } from "react-bootstrap";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: 
        (
          <Container fluid className="d-flex flex-column justify-content-center"
            style={{ height: "80hv", textAlign: "center"}}>
            <h1>Main Page</h1>
            <p className="text-muted">
                Welcome to out site.
            </p>
           </Container>
        )
        
      },
      {
        path: "/movies",
        element: <MovieList />,
      },
      {
        path: "/movies/:id",
        element: <PrintMovieWrapper />,
      },
      {
        path: "/user-form",
        element: <UserForm />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];
