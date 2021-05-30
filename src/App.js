import './App.css';
import { Navbar , Nav ,NavDropdown,  } from 'react-bootstrap';
import logo from '../src/images/Untitled-1.png'
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav-bar" variant="dark">
       <img src={logo} className="logoImg" alt="" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


    <Header></Header>
    <Shop></Shop>

      
    </div>
  );
}

export default App;
