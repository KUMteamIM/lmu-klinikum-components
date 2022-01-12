/// <reference types="react" />
import "bootstrap/dist/css/bootstrap.min.css";
interface PropDefs {
    firstCol?: object;
    secondCol?: object;
    thirdCol?: object;
}
/**
 * Creates a standard footer element
 * @param firstCol | contents for the left column, defaults to LMU Klinikum address
 * @param secondCol | contents for the middle column, defaults to empty
 * @param thirdCol | contents for the right column, defaults to imprint, privacy policy, newsletter
 */
declare function CommonFooter({ firstCol, secondCol, thirdCol }: PropDefs): JSX.Element;
export default CommonFooter;
