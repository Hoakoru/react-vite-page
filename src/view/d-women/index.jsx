import Article from "../../components/article";
import Aside from "../../components/aside";
import ImgModal from "../../components/imgModal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgMod1 from "../../assets/img/galery/img1.png";
import imgMod2 from "../../assets/img/galery/img2.png";
import imgMod3 from "../../assets/img/galery/img6.jpg";
import imgMod4 from "../../assets/img/galery/img7.jpg";

const DesigualdadMujer = () => {
  return (
    <>
      <Row className="pt-5">
        <Article
          titulo="Desigualdad de genero en las mujeres"
          parrafo="Claramente ya todo el mundo sabe que las mujeres sufren varios tipos de maltratos y discriminaciones
          durante toda su vida siendo asi, toman la decision de ponerse a la defensiva de todos los peligros que les aguarda."
          parrafo2="Bueno una gran cantidad de mujeres sufren injusticias pero tambien existen comportamientos que las mujeres causan la desigualdad de genero los cuales pueden ser: misandria, hipergamia, feminismo actual y algunos mensajes que se le dice a las mujeres de niña"
        />

      </Row>

      <Row className="pt-5">
        <ImgModal col={3} image={imgMod1} />
        <Col sm={1}></Col>
        <Article
          titulo="hipergamia"
          col={8}
          parrafo="La hipergamia es un término usado en las ciencias sociales para referirse el acto o práctica de buscar pareja o cónyuge de mejor nivel social y/o económico o de una casta más alta que uno mismo."
          parrafo2="De ese modo podemos decir que ultimamente las mujeres buscan a hombres con mejores aspectos sociales,economicos,personalidad,etc. Por lo que causa que lso hombres luchen por ver quien es el mejor en cada area, pero de esa manera tambien causaria muchas desventajas como: desigualdad de oportunidades, mas mujeres solteras, disminucion de las parejas, socializacion entre individuos"
        />
      </Row>
      <Row className="pt-5">
        <Article
        col={7}
          titulo="misandria"
          parrafo="La misandria o misoandria es un término que hace referencia al odio o aversión hacia los varones u hombres o la tendencia ideológica o psicológica que consiste en despreciar al varón como sexo y con ello todo lo considerado como masculino."
          parrafo2="Con el hecho que existen movimientos que buscan la igualdad de genero otros aumentan cada vez el odio a los hombres por parte de las mujeres, por ese motivo podriamos decir que ambas partes aumentan la guerra de ambos mandos "
        />

        <ImgModal image={imgMod2} col={5}/>
      </Row>
      <Row className="pt-5">
        <ImgModal image={imgMod3} col={5}/>
        <Article
          titulo="feminismo radical"
          col={7}
          parrafo="El feminismo radical es una corriente dentro del movimiento feminista que sostiene que la raíz de la desigualdad social es el patriarcado, definido como el sistema de opresión del hombre sobre la mujer, haciendo hincapié en las relaciones de opresión entre los sexos; este movimiento feminista está muy diversificado en la actualidad y es de gran complejidad."
          parrafo2="Por lo que podemos ver en la actualidad existen diferentes tipos de movimientos feministas que buscan la igualdad de genero, pero que no logran, ya que con sus acciones solo provocan repudio por varias personas en su mayoria a los hombre, por el hecho de que la mayoria de los movimientos buscan erradicar al hombre"
        />
      </Row>
      <Row className="pt-5">
        <Article
          titulo="Mensajes que se les dice a las mujeres:"
          parrafo="Podemos encontrar algunos ejemplos: "
          aprobador={true}
          li1="El fútbol es de chicos."
          li2="Esas cosas son de niños. ¡No seas marimacho!"
          li3="¿Pero cómo vas a dedicarte a eso, si es de hombres?"
          li4="Las niñas son más listas y más tranquilas que los niños, que son unos brutos"
          li5="A las niñas no se les pega"
        />

        <ImgModal image={imgMod4} />
      </Row>
    </>
  );
};

export default DesigualdadMujer;
