import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import Container from "react-bootstrap/Container";
import Inicio from "./view/home";
import DesigualdadHombre from "./view/d-men";
import DesigualdadMujer from "./view/d-women";
import Helper from "./view/helper";
import { Route, Routes } from "react-router-dom";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/d-men" element={<DesigualdadHombre />} />
          <Route path="/d-women" element={<DesigualdadMujer />} />
          <Route path="/recommendations" element={<Helper />} />
        </Routes>
      </Container>
      <Row className="pt-5">
        <Footer />
      </Row>
    </>
  );
}

export default App;
