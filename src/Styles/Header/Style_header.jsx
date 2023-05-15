import styled from "styled-components";

export const HeaderP = styled.header`
  position: sticky;
  top: 0px;
  margin: auto;
  height: 80px;
  width: 100%;
  background-color: #000;
  border-bottom: 1px solid #4d4d4c;
  z-index: 1;
`;

export const ImagenLogo = styled.img`
  position: relative;
  left: 3%;
  bottom: 3px;
  float: left;
  width: 150px;
`;

export const Nav = styled.nav`
  display: block;
  position: relative;
  top: 22px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`;

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  float: right;

  @media all and (max-width: 500px) {
    display: none;
  }

  & > li {
    margin: 0px 15px 0px 15px;
  }

  & > li:hover {
    transform: scale(1.09);
    background-color: transparent;
    color: #fff;
  }

  & > li > a {
    background-color: transparent;
    display: inline-block;
    color: #fff;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji;
    text-decoration: none;
    padding: 6px 20px 6px 20px;
  }

  /* & > .boton_content a {
    padding-right: 10px;
    transform: scale(1.09);
    background-color: transparent;
    color: #fff;
  } */
`;
