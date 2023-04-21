import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Article = (props) => {
  return (
    <Col sm={props.col} className="p-5">
      <h2 className="display-5 text-uppercase text-info">{props.titulo}</h2>
      <p className="fs-5 text-white">{props.parrafo}</p>
      <p className="fs-5 text-white">{props.parrafo2}</p>
      <Listas listas={props} />
    </Col>
  );
};

Article.defaultProps = {
  col: 8,
  parrafo2:""
};

const Listas = (props) => {
  const resultado = props.listas.aprobador ? (
    <ul className="fs-5 text-white">
      <li>{props.listas.li1}</li>
      <li>{props.listas.li2}</li>
      <li>{props.listas.li3}</li>
      <li>{props.listas.li4}</li>
      <li>{props.listas.li5}</li>
    </ul>
  ) : (
    <br />
  );
  return resultado;
};
export default Article;
