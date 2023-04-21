import Col from "react-bootstrap/Col";
import "../assets/css/nav.css";
import Image from "react-bootstrap/Image";
import logo1 from "../assets/img/icons/logFace.png";
import logo2 from "../assets/img/icons/logTwi.png";
import logo3 from "../assets/img/icons/logIns.png";

const Footer = () => {
  return (
    <>
      <Col sm={6} className="bg-dark text-start text-light p-5">
        <small >@Derechos reservados<br />
        Innovatech Solutions
        </small>
        <br />
        <small >Constactos:<br />
        75251415 - 64115053
        </small>
      </Col>
      <Col sm={6} className="bg-dark text-end text-light p-5">
        <div>
            <h5 className="text-capitalize text-info">redes sociales:</h5>
            <Image src={logo1} className="logo" />
            <Image src={logo2} className="logo" />
            <Image src={logo3} className="logo" />
        </div>
      </Col>
    </>
  );
};

export default Footer;
