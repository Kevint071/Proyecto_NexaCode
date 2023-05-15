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
  Numero,
  Llaves,
  Operador,
  ContenedorLinea,
} from "../../../Styles/Container/Style_codigo";

function ManipulacionElementos() {
  return (
    <Article>
      <H1>Añadir elementos a un diccionario</H1>
      <Enfasis>Cómo extender diccionarios en Python</Enfasis>

      <P>
        Para agregar nuevos datos a un diccionario, es importante recordar que
        debemos proporcionar una combinación de clave y valor. Es decir, cada
        elemento agregado al diccionario debe tener una clave que lo identifique
        y un valor asociado a esa clave. <br />
        <br />
        <br /> Por ejemplo, el siguiente es un ejemplo básico de un diccionario:
      </P>

      <DivCodigo>
        <pre>
          <code>
            <ol>
              <li>
                <ContenedorLinea>
                  <Variable>datos_personas</Variable>
                  <Operador>{" = "}</Operador>
                  <Llaves>{"{"}</Llaves>
                </ContenedorLinea>
              </li>
              <li>
                <ContenedorLinea>
                  <Texto> "Juan"</Texto>:<Numero> 25</Numero>,
                </ContenedorLinea>
              </li>
              <li>
                <ContenedorLinea>
                  <Texto> "Ana"</Texto>:<Numero> 23</Numero>
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
        En Python, existen varias formas de agregar un dato a un diccionario.
        Aquí te presento algunas de ellas:
      </P>

      <H2>Usando corchetes y la clave del elemento</H2>
      <P>
        Para agregar un nuevo elemento a este diccionario, podemos utilizar la
        notación de corchetes <strong>{"[ ]"}</strong> y la clave del elemento
        que queremos agregar. Por ejemplo, si queremos agregar un nuevo elemento
        con la clave <strong>'Pedro'</strong> y<strong> 27</strong>, podemos
        hacerlo de la siguiente manera:
      </P>

      <DivCodigo>
        <pre>
          <code>
            <ol>
              <li>
                <ContenedorLinea>
                  <Variable>datos_personas</Variable>
                  <Llaves>{"["}</Llaves>
                  <Texto>"Pedro"</Texto>
                  <Llaves>{"]"}</Llaves>
                  <Operador>{" = "}</Operador>
                  <Numero>27</Numero>
                </ContenedorLinea>
              </li>
            </ol>
          </code>
        </pre>
      </DivCodigo>

      <P>
        Esto creará una nueva clave-valor en el diccionario mi_diccionario con
        la clave <strong>'Pedro'</strong> y el valor <strong>27</strong>
        . <br />
        <br /> Es importante tener en cuenta que si la clave que queremos
        agregar ya existe en el diccionario, el valor asociado a esa clave será
        reemplazado por el nuevo valor que estamos agregando. Por lo tanto, es
        recomendable verificar si la clave ya existe antes de agregarla al
        diccionario.
      </P>
    </Article>
  );
}

export default ManipulacionElementos;
