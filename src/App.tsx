import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "lmu-styles/dist/lmu.css";
import CommonNavbar from "./CommonNavbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import CommonFooter from "./CommonFooter";
import CommonNavbarGrey from "./CommonNavbarGrey";

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
      </article>
      <CommonFooter />
    </div>
  );
}

export default App;
