import "../assets/css/carosel.css";
import Carousel from "react-bootstrap/Carousel";
import imgCarrousel from "../assets/img/galery/imgCarosel.jpg";
import imgCarrousel2 from "../assets/img/galery/imgCarosel2.jpg";
import imgCarrousel3 from "../assets/img/galery/imgCarosel3.jpg";

function Carrousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={imgCarrousel} alt="First slide" />
        <Carousel.Caption className="text-start">
          <h2 className="text-warning shadow-sm">La lucha constra la desigualdad de genero</h2>
          <p className="fs-4 fw-bold">Un movimiento que busca hacer las pases con las personas y castigar a los que infrigen los derechos humanos y fomentan la division de ambos bandos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgCarrousel2}
          alt="Second slide"
          height="50%"
        />

        <Carousel.Caption>
          <h2 className="text-warning shadow-sm">Hombres marchando y apoyando a las mujeres por la igualdad de genero</h2>
          <p className="fs-4 text-info fw-bold">Hombre que estan dispuestos apoyar a sus familias, madres, hijas y compañeras para combatir la desigualdad de genero.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgCarrousel3} alt="Third slide" />

        <Carousel.Caption className="text-end">
          <h2 className="text-warning shadow-sm">Hombre y mujeres unidos por una causa en comun</h2>
          <p className="fs-4 text-info fw-bold"> 
            Movimientos que si vale apoyar, con tal de luchar por los derechos humanos y la igualdad entre ambos generos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
