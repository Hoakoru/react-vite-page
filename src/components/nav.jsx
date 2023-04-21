import "../assets/css/nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/img/icons/logo.png";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";


const NavBar = () => {
  return (
    <>
      <Navbar expand="" className="mb-3" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

          <Navbar>
            <Navbar.Brand className="text-white text-uppercase">Innovatech Solutions</Navbar.Brand>
            <Navbar.Brand href="/">
              <Image src={logo} className="logo" />
            </Navbar.Brand>
          </Navbar>

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
            scroll={true}
            backdrop={true}
            className="navCanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className="text-uppercase">
              Innovatech Solutions
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="navegadorColor text-center">
                <Nav.Link href="/">inicio</Nav.Link>
                <NavDropdown
                  title="Tipos de discriminacion"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/d-men" className="text-center">
                    Discriminacion al hombre
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/d-women" className="text-center">
                    Discriminacion a la mujer
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/recommendations">Recomendaciones</Nav.Link>
              </Nav>
{/*               <Nav.Link className="d-grid gap-3 mt-3" href="/">
                <Button
                  variant="outline-info"
                  className="shadow p-3 mb-5 rounded"
                >
                  Registrarse
                </Button>
              </Nav.Link> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
