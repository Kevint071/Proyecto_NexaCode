import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const SeccionMenu = styled.div`
  overflow-y: scroll;
  height: 87vh;
  width: 25%;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #000;
    border: 1px solid #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border: 1px solid #fff;
    border-top: none;
  }
`;

export const SeccionContenido = styled.div`
  overflow-y: visible;
  height: 100%;
  width: 80%;
  margin-left: 20px;
`;
