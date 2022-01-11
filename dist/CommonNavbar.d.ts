/// <reference types="react" />
import 'bootstrap/dist/css/bootstrap.min.css';
interface PropDefs {
    logo?: string;
    children?: object[];
}
declare function CommonNavbar({ logo, children }: PropDefs): JSX.Element;
declare namespace CommonNavbar {
    var defaultProps: {
        logo: string;
    };
}
export default CommonNavbar;
