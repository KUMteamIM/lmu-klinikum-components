import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
function CommonNavbar({ logo, children }) {
    return (<Navbar expand="lg" sticky='top'>
      <Container>
        <NavbarBrand>
          <Image src={logo} className="logo"></Image>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {children}
        </Navbar.Collapse>
      </Container>
    </Navbar>);
}
CommonNavbar.defaultProps = {
    logo: 'https://cdn0.scrvt.com/4d3e519fe5939342b95c7312343779ef/c736dfe931dfb22d/0e6f79ca70bd/Logo-klinikum.svg'
};
export default CommonNavbar;
