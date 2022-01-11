"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
function CommonNavbarGrey(_a) {
    var children = _a.children;
    return (<Navbar_1.default expand="lg" className="navbar-grey">
      <Container_1.default>
        <Navbar_1["default"].Toggle aria-controls="grey-navbar-nav"/>
        <Navbar_1["default"].Collapse id="grey-navbar-nav">
          {children}
        </Navbar_1["default"].Collapse>
      </Container_1.default>
    </Navbar_1.default>);
}
exports["default"] = CommonNavbarGrey;
