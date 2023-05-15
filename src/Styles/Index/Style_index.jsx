import styled from "styled-components";
import { Link } from "react-router-dom";

export const Contenedor = styled.div`
  display: block;
  max-width: 1300px;
  margin: auto;
`;

export const H1 = styled.h1`
  background-image: linear-gradient(to right, #d8c65d, #9bc537);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 10px auto 10px auto;
  width: fit-content;
  position: relative;
  font-size: 45px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;

export const H2 = styled.h2`
  background-image: linear-gradient(90deg, rgb(230, 139, 27) 0%, rgb(251, 170, 42) 47%, rgb(253, 170, 45) 69%, rgb(255, 166, 49) 93%, rgb(255, 166, 97) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 26px;
  position: relative;
  margin: 40px auto 30px 4.8%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;

export const Enfasis = styled.p`
  color: #97ab4a;
  font-size: 33px;
  position: relative;
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  width: fit-content;
  margin: auto;
  margin-bottom: 70px;
`;

export const P = styled.p`
  color: #e5e7eb;
  margin: 50px 20px auto 4.8%;
  position: relative;
  font-size: 19px;
  font-family: "Bahnschrift", sans-serif;
  font-weight: normal;
  line-height: 150%;
  word-spacing: 0.5px;
`;

export const ImgLenguajes = styled.img`
  position: relative;
  width: 400px;
  float: right;
  bottom: 10px;
  margin-left: 20px;
  margin-right: 35px;
`;

export const Enlaces = styled(Link)`
  display: inline-block;
  font-weight: normal;
  color: #1b91e5;
  text-decoration: none;
`;
