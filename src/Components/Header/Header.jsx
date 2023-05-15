import logo from "../../assets/Logos/Logo_pagina_oscuro.png";
import {HeaderP, ImagenLogo, Nav, Menu} from "../../Styles/Header/Style_header";
import Desplegable from "./Desplegable";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <HeaderP>
      <Nav>
        <NavLink to="/Proyecto_NexaCode">
          <ImagenLogo src={logo} />
        </NavLink>
        <Menu>
          <li>
            <NavLink to="/Proyecto_NexaCode">Inicio</NavLink>
          </li>
          <Desplegable />
          <li>
            <NavLink to="/Proyecto_NexaCode">Portafolio</NavLink>
          </li>
        </Menu>
      </Nav>
    </HeaderP>
  );
}

export default Header;
