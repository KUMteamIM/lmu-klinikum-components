"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("bootstrap/dist/css/bootstrap.min.css");
var react_1 = __importDefault(require("react"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var Col_1 = __importDefault(require("react-bootstrap/Col"));
var Container_1 = __importDefault(require("react-bootstrap/Container"));
/**
 * Creates a standard footer element
 * @param firstCol | contents for the left column, defaults to LMU Klinikum address
 * @param secondCol | contents for the middle column, defaults to empty
 * @param thirdCol | contents for the right column, defaults to imprint, privacy policy, newsletter
 */
function CommonFooter(_a) {
    var firstCol = _a.firstCol, secondCol = _a.secondCol, thirdCol = _a.thirdCol;
    return (<footer>
      <Container_1.default>
        <Row_1.default>
          <Col_1.default>
            {firstCol || (<span>
                <h4>LMU Klinikum</h4>
                <p>
                  Marchioninistr. 15
                  <br />
                  81377 München
                  <br />
                  <br />
                  Ziemssenstr. 5<br />
                  80336 München
                  <br />
                </p>
                <i className="fas fa-phone"></i> <span>089 4400 - 0</span>
              </span>)}
          </Col_1.default>
          <Col_1.default>{secondCol}</Col_1.default>
          <Col_1.default>
            {thirdCol || (<react_1["default"].Fragment>
                <ul>
                  <li>
                    <a href="https://www.lmu-klinikum.de/imprint?homepage=4c9dc47213c27567">
                      Impressum
                    </a>
                  </li>
                  <li>
                    <a href="https://www.lmu-klinikum.de/data_safety">
                      Datenschutz
                    </a>
                  </li>
                </ul>
              </react_1["default"].Fragment>)}
          </Col_1.default>
        </Row_1.default>
      </Container_1.default>
    </footer>);
}
exports["default"] = CommonFooter;
