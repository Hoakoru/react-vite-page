import { useState } from "react";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import "../assets/css/card.css";
import Col from "react-bootstrap/Col";

const ImgModal = (props) => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <Col sm={props.col} className="text-center my-auto">
      <Image
        rounded
        alt="me"
        fluid
        src={props.image}
        onClick={() => setLgShow(true)}
      />

      <Modal
        size="md"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image src={props.image} rounded />
        </Modal.Body>
      </Modal>
    </Col>
  );
};

ImgModal.defaultProps = {
  col: 4,
};

export default ImgModal;
