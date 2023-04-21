import Article from "../../components/article";
import ImgModal from "../../components/imgModal";
import Row from "react-bootstrap/Row";
import imgMod1 from "../../assets/img/galery/pg1.jpg";
import imgMod2 from "../../assets/img/galery/pg2.jpg";
import imgMod3 from "../../assets/img/galery/pg3.jpg";
import imgMod4 from "../../assets/img/galery/pg4.jpg";
import imgMod5 from "../../assets/img/galery/pg5.jpg";

const Helper = () => {
  return (
    <>
      <Row className="pt-5">
        <Article
          titulo="5 claves para fomentar la igualdad de género"
          parrafo="Viendo las siguiente recomendciones podremos realizar una buena accion o al menos una buena oportunidad para poder solucionar este conflicto que tenemos entre hombres y mujeres, de acuerdo a eso aqui te muestro 5 recomendacinoes"
        />
      </Row>

      <Row className="pt-5">
        <ImgModal image={imgMod1} />
        <Article
          titulo="Convivir y crecer con igualdad de oportunidades en todas las áreas sociales."
          parrafo="Nos referimos a la idea de justicia social que propugna que un sistema es socialmente justo cuando todas las personas potencialmente iguales tienen básicamente las mismas posibilidades de acceder al bienestar social y poseen los mismos derechos políticos y civiles."
        />
      </Row>
      <Row className="pt-5">
        
        <Article
          titulo="Realizar actividades para fomentar la equidad de género en la escuela."
          parrafo="Explicamos la idea de promover la igualdad de género en el entorno escolar a través de actividades que fomenten la igualdad de oportunidades entre hombres y mujeres"
        />
        <ImgModal image={imgMod2} />
      </Row>
      <Row className="pt-5">
        <ImgModal image={imgMod3} />
        <Article
          titulo="Utilizar un lenguaje no sexista."
          parrafo="Tambien podemos utilizar un lenguaje que no discrimine por género y que incluya tanto a hombres como a mujeres. Por ejemplo, en lugar de utilizar términos como “hombre” o “mujer”, se puede utilizar términos más inclusivos como “personas” o “ciudadanos”."
        />
      </Row>
      <Row className="pt-5">
        
        <Article
          titulo="Apoyar la asunción de responsabilidades por igual."
          parrafo="Luego debemos tener en mente de que tanto hombres como mujeres deben tener las mismas oportunidades para asumir responsabilidades en el entorno escolar. "
        />
        <ImgModal image={imgMod4} />
      </Row>
      <Row className="pt-5">
        <ImgModal image={imgMod5} />
        <Article
          titulo="Eliminar los prejuicios y las ideas preconcebidas."
          parrafo="Se debe fomentar la igualdad de oportunidades entre hombres y mujeres y que se deben tratar a todos por igual sin conferir mayor importancia por el hecho de que sea niño o niña."
        />
      </Row>
    </>
  );
};

export default Helper;
