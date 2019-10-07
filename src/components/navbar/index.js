import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Javascript | PW 1.4</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/exercice-1">Exercice 1</Nav.Link>
                    <Nav.Link as={Link} to="/exercice-2">Exercice 2</Nav.Link>
                    <Nav.Link as={Link} to="/exercice-3">Exercice 3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Navigation;