import type { JSX } from "react";
import type { TitleProps } from "./types";
import { Container } from "react-bootstrap";

function Footer({ title }: TitleProps): JSX.Element {
  return (
    <>
      <Container fluid className ="d-flex flex-column min-wh-100">
        <footer className="bg-dark text-light py-3 mt-auto">
          <Container className="text-center">
            <small>@2025{title}.Catalog movies</small>
          </Container>
        </footer>
      </Container>
    </>
  );
}

export default Footer
