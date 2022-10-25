"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CommonNavbarGrey(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    expand: "lg",
    className: "navbar-grey"
  }, /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_Navbar.default.Toggle, {
    "aria-controls": "grey-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_Navbar.default.Collapse, {
    id: "grey-navbar-nav"
  }, children)));
}
var _default = CommonNavbarGrey;
exports.default = _default;