"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("bootstrap/dist/css/bootstrap.min.css");
var _react = _interopRequireDefault(require("react"));
var _Row = _interopRequireDefault(require("react-bootstrap/Row"));
var _Col = _interopRequireDefault(require("react-bootstrap/Col"));
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates a standard footer element
 * @param firstCol | contents for the left column, defaults to LMU Klinikum address
 * @param secondCol | contents for the middle column, defaults to empty
 * @param thirdCol | contents for the right column, defaults to imprint, privacy policy, newsletter
 */
function CommonFooter(_ref) {
  let {
    firstCol,
    secondCol,
    thirdCol
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_Row.default, null, /*#__PURE__*/_react.default.createElement(_Col.default, null, firstCol || /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("h4", null, "LMU Klinikum"), /*#__PURE__*/_react.default.createElement("p", null, "Marchioninistr. 15", /*#__PURE__*/_react.default.createElement("br", null), "81377 M\xFCnchen", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Ziemssenstr. 5", /*#__PURE__*/_react.default.createElement("br", null), "80336 M\xFCnchen", /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-phone"
  }), " ", /*#__PURE__*/_react.default.createElement("span", null, "089 4400 - 0"))), /*#__PURE__*/_react.default.createElement(_Col.default, null, secondCol), /*#__PURE__*/_react.default.createElement(_Col.default, null, thirdCol || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.lmu-klinikum.de/imprint?homepage=4c9dc47213c27567"
  }, "Impressum")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.lmu-klinikum.de/data_safety"
  }, "Datenschutz"))))))));
}
var _default = CommonFooter;
exports.default = _default;