/// <reference types="react" />
import 'bootstrap/dist/css/bootstrap.min.css';
interface PropDefs {
    logo?: string;
    children?: object[];
    link?: string;
}
declare function CommonNavbar({ logo, children, link }: PropDefs): JSX.Element;
declare namespace CommonNavbar {
    var defaultProps: {
        logo: string;
        link: string;
    };
}
export default CommonNavbar;
