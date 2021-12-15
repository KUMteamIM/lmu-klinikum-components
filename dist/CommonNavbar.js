import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
function CommonNavbar({ logo, children }) {
    return (_jsx(Navbar, { expand: "lg", sticky: 'top', children: _jsxs(Container, { children: [_jsx(NavbarBrand, { children: _jsx(Image, { src: logo, className: "logo" }, void 0) }, void 0), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }, void 0), _jsx(Navbar.Collapse, { id: "basic-navbar-nav", className: "justify-content-end", children: children }, void 0)] }, void 0) }, void 0));
}
CommonNavbar.defaultProps = {
    logo: 'https://cdn0.scrvt.com/4d3e519fe5939342b95c7312343779ef/c736dfe931dfb22d/0e6f79ca70bd/Logo-klinikum.svg'
};
export default CommonNavbar;
