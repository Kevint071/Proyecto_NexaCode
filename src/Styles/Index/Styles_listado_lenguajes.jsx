import styled from "styled-components";

export const SeccionLenguajes = styled.div`
  display: block;
  background-color: #010101;
  padding: 10px 10px 40px 10px;
  margin: 50px 40px 50px 60px;
  border-radius: 10px;
  height: 80vh;

  & h2 {
  }
`;

export const H2Stack = styled.h2`
  position: relative;
  text-align: center;
  background-image: linear-gradient(
    90deg,
    rgb(230, 139, 27) 0%,
    rgb(251, 170, 42) 47%,
    rgb(253, 170, 45) 69%,
    rgb(255, 166, 49) 93%,
    rgb(255, 166, 97) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 28px;
  position: relative;
  display: block;

  margin: 20px auto 50px auto;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;

export const ContainerLenguajes = styled.div`
  display: flex;
  justify-content: left;
  margin: 40px auto auto 60px;
`;

export const ContainerLenguaje = styled.div`
  display: inline-block;

  border-radius: 6px;
  width: 230px;
  margin: auto 10px auto 10px;
  background-color: #171717;
  color: #a7a7a7;
  height: 300px;

  & img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: block;
    width: 230px;
    margin: auto;
  }

  & p {
    font-size: 15px;
    font-family: "Bahnschrift";
    line-height: 150%;
    padding: 10px 15px 7px 15px;
    word-spacing: 0.5px;

    margin: 0px;
    margin-right: 0px;
  }
`;
