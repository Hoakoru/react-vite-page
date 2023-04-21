import Article from "../../components/article";
import Aside from "../../components/aside";
import Cards from "../../components/cards";
import CardGroup from "react-bootstrap/CardGroup";
import Carrousel from "../../components/carrousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgCard1 from "../../assets/img/galery/img1.jpg";
import imgCard2 from "../../assets/img/galery/card2.jpg";
import imgCard3 from "../../assets/img/galery/card3.jpg";
import imgCard4 from "../../assets/img/galery/card4.jpg";

const Inicio = () => {
  return (
    <>
      <Carrousel />
      <Row className="pt-5">
        <Article titulo="Bienvenidos a la pagina" parrafo="Aqui trataremos muchos temas los cuales seran de mucho de interes y a su vez sera de gran ayuda para informarte acerca sobre el tema de la discriminacion hacia ambos sexos y la desifualdad de genero por lo que te invitamos a que des un recorrido por la pagina."
        parrafo2="Cabe recalcar que hoy en dia vivimos en un mundo confuso donde cualquier cosa que se publica por las redes sociales parece ser verdad, y nos ponemos en duda a quien creer y quien dice la verdad, pero informarse sobre temas que no conoces es una buena manera de enfrentar a la desinformacion y miedo a las redes que buscan divulgar estos temas."
        />

      </Row>
      <CardGroup className="row py-5 mx-auto">
        <Cards image={imgCard1} titulo="desigualdad de genero" parrafo="Es un problema que existe hoy en dia que mantiene separado a un gran grupo de personas que se enfrentan entre ellos." />
        <Cards image={imgCard2} titulo="discriminacion al hombre" parrafo="Todas las cosas que causa el mismo hombre hasta los problemas y normas de la sociedad lo obligan a soportar" />
        <Cards image={imgCard3} titulo="discriminacion a la mujer" parrafo="Las mujeres son igual personas que sufren y son menospreciadas por lo que son vulnerables a distintos tipos de maltrato psicologico o fisico" />
        <Cards image={imgCard4} titulo="igualdad de genero" parrafo="Si nos ponemos a pensar un poco, ambos generos podemos trabajar juntos para crear nuevas cosas y fortalecernos como personas y sobresalir a muchos lugares" />
      </CardGroup>

      <Row>
        <Article titulo="Acerca de nosotros" parrafo="Somos un pequeño grupo de desarrolladores llamado Innovatech Solutions, los cuales ayudamos a crear esta pagina dedicada a la informacion de la desigualdad de genero, discriminacion a la mujer, discriminacion al hombre, dichos que nos dicen de niños, oportunidades de llevarnos bien y diferentes temas"
        parrafo2="De ese modo dariamos a nuestra presentacion y sin mas que decir les invitamos a seguir investigando sobre temas similares a los que tratamos en la pagina" />
      </Row>
    </>
  );
};

export default Inicio;
