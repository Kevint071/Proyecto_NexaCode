import {
  H1,
  H2,
  Enfasis,
  Contenedor,
  P,
  ImgLenguajes,
  Enlaces,
} from "../../Styles/Index/Style_index";

import { TecnologiasEnseñar } from "./ListadoLenguajes";

import { Footer, Creditos, P_footer } from "../../Styles/Footer/Style_footer";

import imagenLenguajes from "../../assets/Imagenes_index/Lenguajes.png";

function ContentHome() {
  return (
    <>
      <Contenedor>
        <H1>Proyecto NexaCode</H1>
        <Enfasis>Conectando programadores para crear</Enfasis>

        <ImgLenguajes
          src={imagenLenguajes}
          alt="Lenguajes de Python Javascript HTML y CSS"
        />

        <P>
          ¡Bienvenidos a este blog de programación! En este espacio encontrarás
          información detallada sobre lenguajes de programación, proyectos
          relacionados y otros temas importantes en el mundo de la programación.
          Esperamos que la información que compartimos en este blog sea valiosa
          y te ayude en tus objetivos de programación.
        </P>

        <H2>El propósito de crear esta página...</H2>

        <P>
          Un sueño que he tenido desde hace tiempo ha sido el de tener un
          espacio en el que poder compartir proyectos y creaciones con el mundo.
          Sin embargo, con el tiempo me di cuenta de que era mejor crear algo
          que fuera mucho más que solo un espacio para compartir{" "}
          <Enlaces to="/Proyectos">proyectos</Enlaces>. <br />
          <br /> Así es como nació la idea de crear una red de información
          dedicada a la programación, donde se puedan encontrar temas
          específicos y de calidad. Un lugar donde los programadores puedan
          encontrar recursos valiosos y ampliar sus conocimientos. Estoy
          entusiasmado por llevar a cabo este proyecto y en un futuro no muy
          lejano espero que tú también quieras formar parte de él.
        </P>
        <TecnologiasEnseñar></TecnologiasEnseñar>
      </Contenedor>
      <Footer>
        <Creditos>
          <P_footer>© Proyecto NexaCode - Desde 2022</P_footer>
        </Creditos>
      </Footer>
    </>
  );
}

export default ContentHome;
