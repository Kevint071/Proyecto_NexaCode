import {
  ContainerLenguaje,
  ContainerLenguajes,
  H2Stack,
} from "../../Styles/Index/Styles_listado_lenguajes";
import { P } from "../../Styles/Index/Style_index";
import PythonContainer from "../../assets/Python/PythonContainer.png";
import { BiBookContent } from "react-icons/bi";

export function TecnologiasEnseñar() {
  return (
    <>
      {/* <H2Stack>Las herramientas tecnológicas imprescindibles</H2Stack>

      <P>
        En la actualidad, existen diversas herramientas y tecnologías que
        permiten crear soluciones tecnológicas de alta calidad. Te presentamos
        algunas de las más utilizadas en el desarrollo de aplicaciones web,
        servicios en la nube, automatización de tareas, entre otros:{" "}
      </P> */}
      <P>
        <BiBookContent /> Contenido
      </P>
      <ContainerLenguajes>
        <ContainerLenguaje>
          <img
            src={PythonContainer}
            alt="Imagen de Python en un contenedor de index"
          />
          <p>
            Utilizado en desarrollo web, análisis de datos e inteligencia
            artificial, con bibliotecas populares como NumPy, Pandas y
            TensorFlow.
          </p>
        </ContainerLenguaje>

        <ContainerLenguaje>
          <img
            src={PythonContainer}
            alt="Imagen de Python en un contenedor de index"
          />
          <p>
            JavaScript es ampliamente utilizado en desarrollo web, creación de
            aplicaciones móviles y desarrollo de juegos, con frameworks
            populares como React.
          </p>
        </ContainerLenguaje>
        <ContainerLenguaje>Moa skdjfsldjflkszdjflksdfj</ContainerLenguaje>
        <ContainerLenguaje>alsdjflaskjdlkasjd</ContainerLenguaje>
        <ContainerLenguaje>jsadlkfjsaldfjslkd</ContainerLenguaje>
        <ContainerLenguaje></ContainerLenguaje>
        <ContainerLenguaje></ContainerLenguaje>
        <ContainerLenguaje></ContainerLenguaje>
        <ContainerLenguaje></ContainerLenguaje>
        <ContainerLenguaje></ContainerLenguaje>
      </ContainerLenguajes>
    </>
  );
}
