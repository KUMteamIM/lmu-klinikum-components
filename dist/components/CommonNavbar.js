"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _Container = _interopRequireDefault(require("react-bootstrap/Container"));

var _Image = _interopRequireDefault(require("react-bootstrap/Image"));

var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));

var _NavbarBrand = _interopRequireDefault(require("react-bootstrap/NavbarBrand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CommonNavbar(_ref) {
  let {
    logo,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    expand: "lg",
    sticky: "top"
  }, /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_NavbarBrand.default, null, /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: logo,
    className: "logo"
  })), /*#__PURE__*/_react.default.createElement(_Navbar.default.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_Navbar.default.Collapse, {
    id: "basic-navbar-nav",
    className: "justify-content-end"
  }, children)));
}

CommonNavbar.defaultProps = {
  logo: 'https://cdn0.scrvt.com/4d3e519fe5939342b95c7312343779ef/c736dfe931dfb22d/0e6f79ca70bd/Logo-klinikum.svg'
};
var _default = CommonNavbar;
exports.default = _default;