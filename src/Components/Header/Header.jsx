import logo from "../../assets/Logos/Logo_pagina_oscuro.png";
import {HeaderP, ImagenLogo, Nav, Menu} from "../../Styles/Header/Style_header";
import Desplegable from "./Desplegable";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <HeaderP>
      <Nav>
        <NavLink to="/">
          <ImagenLogo src={logo} />
        </NavLink>
        <Menu>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <Desplegable />
          <li>
            <NavLink to="/">Portafolio</NavLink>
          </li>
        </Menu>
      </Nav>
    </HeaderP>
  );
}

export default Header;
