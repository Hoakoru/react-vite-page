import "../assets/css/nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/img/icons/logo.png";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar expand="" className="mb-3" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar>
            <Navbar.Brand className="text-white text-uppercase">
              Innovatech Solutions
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/">
                <Image src={logo} className="logo" />
              </NavLink>
            </Navbar.Brand>
          </Navbar>

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
            scroll={true}
            backdrop={true}
            className="navegadorColor"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel-expand-lg"
                className="text-uppercase"
              >
                Innovatech Solutions
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className=" text-center">
                <Nav.Link>
                  <NavLink to="/" className="text-decoration-none navegadorColor">inicio</NavLink>
                </Nav.Link>
                <NavDropdown
                  title="Tipos de discriminacion"
                  id="collasible-nav-dropdown"
                  className="navegadorColor"
                >
                  <NavDropdown.Item className="text-center">
                    <Nav.Link>
                      <NavLink
                        to="/d-men"
                        className="text-decoration-none"
                      >
                        Discriminacion al hombre
                      </NavLink>
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="text-center">
                    <Nav.Link>
                      <NavLink
                        to="/d-women"
                        className="text-decoration-none"
                      >
                        Discriminacion a la mujer
                      </NavLink>
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <NavLink
                    to="/recommendations"
                    className="text-decoration-none navegadorColor"
                  >
                    Recomendaciones
                  </NavLink>
                </Nav.Link>
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
