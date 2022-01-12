"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var Image_1 = __importDefault(require("react-bootstrap/Image"));
var Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
var NavbarBrand_1 = __importDefault(require("react-bootstrap/NavbarBrand"));
function CommonNavbar(_a) {
    var logo = _a.logo, children = _a.children;
    return (<Navbar_1.default expand="lg" sticky='top'>
      <Container_1.default>
        <NavbarBrand_1.default>
          <Image_1.default src={logo} className="logo"></Image_1.default>
        </NavbarBrand_1.default>
        <Navbar_1["default"].Toggle aria-controls="basic-navbar-nav"/>
        <Navbar_1["default"].Collapse id="basic-navbar-nav" className="justify-content-end">
          {children}
        </Navbar_1["default"].Collapse>
      </Container_1.default>
    </Navbar_1.default>);
}
CommonNavbar.defaultProps = {
    logo: 'https://cdn0.scrvt.com/4d3e519fe5939342b95c7312343779ef/c736dfe931dfb22d/0e6f79ca70bd/Logo-klinikum.svg'
};
exports["default"] = CommonNavbar;
