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
            <NavLink to="#">Javascript</NavLink>
          </li>
          <li>
            <NavLink to="#">Html</NavLink>
          </li>
          <li>
            <NavLink to="#">CSS</NavLink>
          </li>
          <li>
            <NavLink to="#">Docker</NavLink>
          </li>
        </ListaDesplegable>
      </ListaContenedora>
    </>
  );
}

export default Desplegable;
