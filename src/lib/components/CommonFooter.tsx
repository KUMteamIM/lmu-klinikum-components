import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
function CommonFooter({ firstCol, secondCol, thirdCol }: PropDefs) {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            {firstCol || (
              <span>
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
              </span>
            )}
          </Col>
          <Col>{secondCol}</Col>
          <Col>
            {thirdCol || (
              <React.Fragment>
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
              </React.Fragment>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default CommonFooter;
