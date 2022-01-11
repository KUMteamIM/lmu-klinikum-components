/// <reference types="react" />
import "bootstrap/dist/css/bootstrap.min.css";
interface PropDefs {
    firstRow?: object;
    secondRow?: object;
    thirdRow?: object;
}
/**
 * Creates a standard footer element
 * @param firstRow | contents for the left row, defaults to LMU Klinikum address
 * @param secondRow | contents for the middle row, defaults to empty
 * @param thirdRow | contents for the right row, defaults to imprint, privacy policy, newsletter
 */
declare function CommonFooter({ firstRow, secondRow, thirdRow }: PropDefs): JSX.Element;
export default CommonFooter;
