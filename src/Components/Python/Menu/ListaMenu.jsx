import { NavLink } from "react-router-dom";
import {MenuContent, Enlace} from '../../../Styles/Container/Style_menu'

const listaMenu = [
  {
    id: 0,
    title: "Introduccion a Python",
    content: (
      <MenuContent>
        <li>
          <Enlace 
            to="/Python/Introduccion-a-Python"
          >
            Python como lenguaje de programación
          </Enlace>
        </li>
        <li>
          <Enlace 
            to="/Python/Instalar-Python"
          >
            Instalar Python
          </Enlace>
        </li>
        <li>
          <Enlace to="/">Usar pip</Enlace>
        </li>
        <li>
          <Enlace to="/">Buenas practicas</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 1,
    title: "Strings",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Método capitalize</Enlace>
        </li>
        <li>
          <Enlace to="/">Método lower</Enlace>
        </li>
        <li>
          <Enlace to="/">Método maketrans</Enlace>
        </li>
        <li>
          <Enlace to="/">Método title</Enlace>
        </li>
        <li>
          <Enlace to="/">Método translate</Enlace>
        </li>
        <li>
          <Enlace to="/">Método upper</Enlace>
        </li>
        <li>
          <Enlace to="/">Métodos de datos string con parámetros</Enlace>
        </li>
        <li>
          <Enlace to="/">Slices strings</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 2,
    title: "Listas",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Clonar listas</Enlace>
        </li>
        <li>
          <Enlace to="/">Desempaquetar listas</Enlace>
        </li>
        <li>
          <Enlace to="/">List comprenhensions</Enlace>
        </li>
        <li>
          <Enlace to="/">Método pop</Enlace>
        </li>
        <li>
          <Enlace to="/">Método remove</Enlace>
        </li>
        <li>
          <Enlace to="/">Método reverse</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 3,
    title: "Diccionarios",
    content: (
      <MenuContent>
        <li>
          <Enlace
            to="Diccionarios/Definicion"
          >
            Definición
          </Enlace>
        </li>
        <li>
          <Enlace
            to="Diccionarios/Manipulacion-elementos-en-diccionario"
          >
            Añadir elementos
          </Enlace>
        </li>
        <li>
          <Enlace to="/">Método get</Enlace>
        </li>
        <li>
          <Enlace to="/">Método items</Enlace>
        </li>
        <li>
          <Enlace to="/">Método keys</Enlace>
        </li>
        <li>
          <Enlace to="/">Método values</Enlace>
        </li>
        <li>
          <Enlace to="/">Mostrar valor de una key</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 4,
    title: "Excepciones",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Zero division error</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 5,
    title: "Funciones",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Función anonima lambda</Enlace>
        </li>
        <li>
          <Enlace to="/">Función \b</Enlace>
        </li>
        <li>
          <Enlace to="/">Función id</Enlace>
        </li>
        <li>
          <Enlace to="/">Función print</Enlace>
        </li>
        <li>
          <Enlace to="/">Función return</Enlace>
        </li>
        <li>
          <Enlace to="/">Función round</Enlace>
        </li>
        <li>
          <Enlace to="/">Operador is</Enlace>
        </li>
        <li>
          <Enlace to="/">Operador not</Enlace>
        </li>
        <li>
          <Enlace to="/">Palabra clave assert</Enlace>
        </li>
        <li>
          <Enlace to="/">Palabra clave class</Enlace>
        </li>
        <li>
          <Enlace to="/">Palabra clave del</Enlace>
        </li>
        <li>
          <Enlace to="/">Palabra clave pass</Enlace>
        </li>
        <li>
          <Enlace to="/">Punto de entrada</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 6,
    title: "Módulo Random",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Non content</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 7,
    title: "Módulo Sys",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Non content</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 8,
    title: "Módulo Datetime",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Non content</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 9,
    title: "Módulo Time",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Non content</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 10,
    title: "Módulo Pandas",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Non content</Enlace>
        </li>
      </MenuContent>
    ),
  },
  {
    id: 11,
    title: "Módulo CSV",
    content: (
      <MenuContent>
        <li>
          <Enlace to="/">Non content</Enlace>
        </li>
      </MenuContent>
    ),
  },
];

export default listaMenu;
