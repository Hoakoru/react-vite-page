import Article from "../../components/article";
import Aside from "../../components/aside";
import ImgModal from "../../components/imgModal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgMod1 from "../../assets/img/galery/img3.jpg";
import imgMod2 from "../../assets/img/galery/img4.png";
import imgMod3 from "../../assets/img/galery/img4.jpg";
import imgMod4 from "../../assets/img/galery/img5.jpg";

const DesigualdadHombre = () => {
  return (
    <>
      <Row className="pt-5">
        <Article
          titulo="Desigualdad de genero en los hombres"
          parrafo="Podemos decir que estas son algunas acciones que realiza el hombre para provocar desigualdad entre ambos sexos por lo que aqui les mostramos unos cuantos temas los cuales hablan del comportamiento del hombre."
          parrafo2="Tomaremos importantes tales como:Misoginia,Machismo,hipogamia y algunas frases comunes que se les dice a los varones en su niñez y entre su desarrollo hasta ser una persona adulta"
        />

      </Row>

      <Row className="pt-5">
        <ImgModal col={3} image={imgMod2} />
        <Col sm={1}></Col>
        <Article
          titulo="hipogamia"
          col={8}
          parrafo="La hipogamia es  se refiere al matrimonio en 
        el que uno de los cónyuges experimenta un descenso en la escala social al incorporarse al 
        grupo social del otro (de nivel inferior), lo cual hace que el hombre busca parejas con menor rango social."
          parrafo2="De esa manera podemos decir que los hombres rechazan a mujeres mas exitosas que ellos y buscan a mujeres con menor exito para asi poder sentirse satisfechos y no sentir debilidad hacia las tareas que realiza en su dia a dia"
        />
      </Row>
      <Row className="pt-5">
        <Article
          titulo="misoginia"
          parrafo="La palabra misoginia proviene de dos voces griegas miso y gyne que significan detestar a la mujer. Se usa para referirse a creencias o expresiones emocionales, psicológicas e ideológicas de odio hacia las mujeres y a lo femenino."
          parrafo2="Podemos decir que con las acciones poco eticas de algunos movimientos feministas, los hombres cada vez estan odiando a las mujeres, ya que los tratan de bandalos, machistas, abusadores, etc. Y lo peor es que engloba a todos los hombres sean buenos o malos por lo que cada vez los hombre buscan estar solos a esyar en una relacion."
        />

        <ImgModal image={imgMod4} />
      </Row>
      <Row className="pt-5">
        <ImgModal image={imgMod3} />
        <Article
          titulo="machismo"
          col={8}
          parrafo="El machismo es una actitud o creencia donde el hombre se cree superior a la mujer, también hace 
          referencia a un conjunto de actitudes, conductas, creencias y prácticas sociales destinadas a promover el 
          enaltecimiento y prevalencia del hombre en perjuicio de la mujer."
          parrafo2="Aunque la mayoria de personas piensan que el machismo ya no existe, pues dejame decirte que esyas personas
          se equivocan, ya que vivimos en un mundo con distintas personas las cuales no todas cumplen las leyes, y muchas personas
          ni se ponen a ayudar a las personas, por ese motivo debemos tomar en cuenta este punto."
        />
      </Row>
      <Row className="pt-5">
        <Article
          titulo="Algunos mensajes que los hombres reciben desde
          que son niños:"
          parrafo="Podemos encontrar algunos ejemplos: "
          aprobador={true}
          li1="No llores, porque los hombres no deben llorar."
          li2="Sal de la cocina, porque aquí sólo mujeres pueden estar."
          li3="Acompaña a tu hermanita, recuerda que eres el hombre y ella una mujer."
          li4="Bueno, díme lo que quieres, pero no me hables como una niña."
          li5="Anda y busca trabajo... no seas mankagasto."
        />

        <ImgModal image={imgMod1} />
      </Row>
    </>
  );
};

export default DesigualdadHombre;
