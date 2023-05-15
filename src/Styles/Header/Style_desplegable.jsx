import styled from "styled-components";

export const ListaDesplegable = styled.ul`
  display: none;
  position: absolute;
  top: 60px;
  left: 20px;
  padding: 4px 15px;
  background-color: #000;
  list-style: none;
  border-radius: 8px;
  z-index: 1;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;

  & li {
    margin-left: 0px;
  }

  & li a {
    display: block;
    text-decoration: none;
    padding: 6px 20px;
    color: #fff;
  }

  &:hover li:hover a {
    transform: scale(1.09);
  }
`;

export const ListaContenedora = styled.li`

  & > a {
    padding-right: 10px;
    background-color: transparent;
  }

  &:hover > ${ListaDesplegable} {
    list-style: none;
    display: block;
    border-radius: 8px;
    z-index: 1;
  }

  &:hover > a {
    padding-bottom: 40px;
  }
`;
