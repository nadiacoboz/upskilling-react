import type { JSX } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import type { TitleProps } from './types';

function Header({title}: TitleProps):JSX.Element {
    return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies" end>Movies</Nav.Link>
            <Nav.Link as={NavLink} to="/user-form" end>User-Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header