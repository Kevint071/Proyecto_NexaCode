import {
  Article,
  H1,
  H2,
  H3,
  A,
  Ol,
  Enfasis,
  UlSinViñeta,
  P,
} from "../../../Styles/Container/Style_section_content";
import PythonPaginaWindows from '../../../assets/Python/PythonWindows.png'

function InstalarPython() {
  return (
    <Article>
      <H1>Instalar Python en Windows y Linux</H1>
      <Enfasis>Guía fácil para instalar Python</Enfasis>

      <P>
        Para empezar a programar en Python, primero necesitas instalarlo en tu
        computadora y en esta guía te mostraremos cómo descargar e instalar
        Python en los sistemas operativos Windows y Linux. Con la instalación de
        Python, estarás listo para comenzar a desarrollar tus habilidades de
        programación en este popular lenguaje.
      </P>

      <H2>Instalar Python en Windows</H2>

      <P>
        Si deseas instalar Python en tu computadora con Windows, te mostraremos
        cómo hacerlo paso a paso. El proceso es sencillo y se puede realizar en
        cualquier versión de Windows.
      </P>

      <Ol>
        <li>
          <H3>Descargar el instalador de Python</H3>
          <p>
            Para acceder a la página de descarga de Python para Windows, debes
            seguir unos sencillos pasos. En primer lugar, abre tu navegador y
            escribe la dirección{" "}
            <A href="https://www.python.org/downloads/windows " target="_blank">
              https://www.python.org/downloads/windows/
            </A>{" "}
            en la barra de direcciones.
            <br />
            <img src={PythonPaginaWindows} width="600px" alt="" />
          </p>
          <br />
          <p>
            Esta dirección te llevará directamente a la página oficial de
            descarga de Python para Windows. En esta página, encontrarás una
            lista de versiones de Python disponibles para descargar en tu
            computadora con Windows. La versión recomendada será la versión más
            reciente, que se encontrará en la parte superior de la lista.
            <br />
            <br />
            Asegúrate de que la versión que elijas sea compatible con tu sistema
            operativo Windows. Una vez que hayas seleccionado la versión
            adecuada de Python para descargar, haz clic en el enlace
            correspondiente para iniciar la descarga. Dependiendo de la
            velocidad de tu conexión a Internet, la descarga puede tardar unos
            minutos en completarse.
          </p>
        </li>
        <li>
          <H3>Ejecutar el instalador</H3>
        </li>
        <li>
          <H3>Pasos finales</H3>
        </li>
      </Ol>
    </Article>
  );
}

export default InstalarPython;
