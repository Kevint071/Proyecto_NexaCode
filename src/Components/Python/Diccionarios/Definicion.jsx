import {
  Article,
  Enfasis,
  H1,
  H2,
  P,
} from "../../../Styles/Container/Style_section_content";
import {
  DivCodigo,
  Variable,
  Texto,
  Llaves,
  Operador,
  ContenedorLinea,
} from "../../../Styles/Container/Style_codigo";

function Definicion() {
  return (
    <Article>
      <H1>Diccionarios</H1>
      <Enfasis>La llave maestra del lenguaje</Enfasis>

      <H2>Explorando la potencia de los Diccionarios en Python</H2>

      <P>
        ¿Alguna vez te has preguntado qué son los diccionarios en Python? Si
        bien parecen un simple conjunto de pares de claves y valores, los
        diccionarios son en realidad una estructura de datos increíblemente
        versátil y poderosa.
      </P>

      <DivCodigo>
        <pre>
          <code>
            <ol start="1">
              <li>
                <ContenedorLinea>
                  <Variable>nombre_diccionario</Variable>
                  <Operador>{" = "}</Operador>
                  <Llaves>{"{"}</Llaves>
                </ContenedorLinea>
              </li>
              <li>
                <ContenedorLinea>
                  <Variable> clave</Variable>: <Texto>valor</Texto>
                </ContenedorLinea>
              </li>
              <li>
                <ContenedorLinea>
                  <Llaves>{"}"}</Llaves>
                </ContenedorLinea>
              </li>
            </ol>
          </code>
        </pre>
      </DivCodigo>
      <P>
        En esencia, los diccionarios permiten a los programadores almacenar y
        recuperar datos utilizando una clave única en lugar de un índice
        numérico, lo que los hace ideales para tareas que van desde la gestión
        de bases de datos hasta la programación de juegos y aplicaciones web.{" "}
        <br />
        <br /> Con su capacidad para manejar grandes cantidades de información y
        su facilidad de uso, no es de extrañar que los diccionarios sean una de
        las características más populares y útiles de Python.
      </P>
    </Article>
  );
}

export default Definicion;
