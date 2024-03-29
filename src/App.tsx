import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@lmu-med/styles/dist/lmu.css";
import CommonNavbar from "./lib/components/CommonNavbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import CommonFooter from "./lib/components/CommonFooter";
import CommonNavbarGrey from "./lib/components/CommonNavbarGrey";
import CommonCookieNotice from "./lib/components/CommonCookieNotice";
import CommonSpinner from "./lib/components/CommonSpinner";

function App() {
  return (
    <div>
      <header>
        <CommonNavbar>
          <Nav.Link href="hello">Hello</Nav.Link>
          <Nav.Link href="wow">Wow</Nav.Link>
        </CommonNavbar>
        <CommonNavbarGrey>
          Some element
        </CommonNavbarGrey>
      </header>
      <article>
        <Container>
          <h2>Die Kopfzeile des Abschnittes</h2>
          <p>Der Absatz des Textes.</p>
        </Container>
        <Container>
          <h3>
            CommonSpinner
          </h3>
          <CommonSpinner />
        </Container>
      </article>
      <CommonFooter />
      <CommonCookieNotice expires={new Date()} />
    </div>
  );
}

export default App;
