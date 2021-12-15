import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
/**
 * Creates a standard footer element
 * @param firstRow | contents for the left row, defaults to LMU Klinikum address
 * @param secondRow | contents for the middle row, defaults to empty
 * @param thirdRow | contents for the right row, defaults to imprint, privacy policy, newsletter
 */
function CommonFooter({ firstRow, secondRow, thirdRow }) {
    return (_jsx("footer", { children: _jsx(Container, { children: _jsxs(Row, { children: [_jsx(Col, { children: firstRow || (_jsxs("span", { children: [_jsx("h4", { children: "LMU Klinikum" }, void 0), _jsxs("p", { children: ["Marchioninistr. 15", _jsx("br", {}, void 0), "81377 M\u00FCnchen", _jsx("br", {}, void 0), _jsx("br", {}, void 0), "Ziemssenstr. 5", _jsx("br", {}, void 0), "80336 M\u00FCnchen", _jsx("br", {}, void 0)] }, void 0), _jsx("i", { className: "fas fa-phone" }, void 0), " ", _jsx("span", { children: "089 4400 - 0" }, void 0)] }, void 0)) }, void 0), _jsx(Col, { children: secondRow }, void 0), _jsx(Col, { children: thirdRow || (_jsx(React.Fragment, { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { href: "https://www.lmu-klinikum.de/imprint?homepage=4c9dc47213c27567", children: "Impressum" }, void 0) }, void 0), _jsx("li", { children: _jsx("a", { href: "https://www.lmu-klinikum.de/data_safety", children: "Datenschutz" }, void 0) }, void 0)] }, void 0) }, void 0)) }, void 0)] }, void 0) }, void 0) }, void 0));
}
export default CommonFooter;
