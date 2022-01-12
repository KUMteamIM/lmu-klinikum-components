import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface PropDefs {
  children?: string,
}

function CommonNavbarGrey({children}:PropDefs) {
  return (
    <Navbar expand="lg" className="navbar-grey">
      <Container>
        <Navbar.Toggle aria-controls="grey-navbar-nav" />
        <Navbar.Collapse id="grey-navbar-nav">
          {children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CommonNavbarGrey;
