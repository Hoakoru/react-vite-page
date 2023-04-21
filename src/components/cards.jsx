import Card from "react-bootstrap/Card";

import "../assets/css/card.css";

const Cards = (props) => {
  return (
    <Card className="cardFondo me-5 shadow p-3 mb-5 rounded">
      <Card.Img
        variant="top"
        src={props.image}
        className="rounded-circle mx-auto imgTall"
      />
      <Card.Body>
        <Card.Title className="text-uppercase text-center text-info">{props.titulo}</Card.Title>
        <Card.Text>{props.parrafo}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
