import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

interface PropDefs {
  logo?: string,
  children?: object[],
}

function CommonNavbar({ logo, children}:PropDefs) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand><Image src={logo}></Image></NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {children}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CommonNavbar;
