import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'lmu-styles/dist/lmu.css';
import CommonNavbar from './CommonNavbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div>
      <header className="LMU-header">
        <CommonNavbar logo="logo.png">
          <Nav.Link href="hello">Hello</Nav.Link>
          <Nav.Link href="wow">Wow</Nav.Link>
        </CommonNavbar>
      </header>
    </div>
  );
}

export default App;
