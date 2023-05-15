import { NavLink } from "react-router-dom";
import {
  ListaDesplegable,
  ListaContenedora,
} from "../../Styles/Header/Style_desplegable";
import { IoIosArrowDown } from "react-icons/io";

function Desplegable() {
  return (
    <>
      <ListaContenedora>
        <a>Contenido</a>
        <IoIosArrowDown style={{ color: "white" }} />
        <ListaDesplegable>
          <li>
            <NavLink to="/Python/Introduccion-a-Python">Python</NavLink>
          </li>
          <li>
            <a href="">Javascript</a>
          </li>
          <li>
            <a href="">Html</a>
          </li>
          <li>
            <a href="">CSS</a>
          </li>
          <li>
            <a href="">Docker</a>
          </li>
        </ListaDesplegable>
      </ListaContenedora>
    </>
  );
}

export default Desplegable;
