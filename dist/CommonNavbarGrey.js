import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function CommonNavbarGrey({ children }) {
    return (_jsx(Navbar, { expand: "lg", className: "navbar-grey", children: _jsxs(Container, { children: [_jsx(Navbar.Toggle, { "aria-controls": "grey-navbar-nav" }, void 0), _jsx(Navbar.Collapse, { id: "grey-navbar-nav", children: children }, void 0)] }, void 0) }, void 0));
}
export default CommonNavbarGrey;
