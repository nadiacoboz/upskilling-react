import type { JSX } from "react";
import { Container } from "react-bootstrap";

function PageNotFound(): JSX.Element{
    return(
        <>
            <Container fluid className="d-flex flex-column justify-content-center"
            style={{ height: "80hv", textAlign: "center"}}>
            <h1>Page Not Found!</h1>
            <p className="text-muted">
                The page you are looking for does not exist
            </p>
            </Container>
        </>
    )
}

export default PageNotFound