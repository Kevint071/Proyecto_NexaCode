import styled from "styled-components";

export const DivCodigo = styled.div`
  background-color: black;
  color: white;
  padding: 8px;
  font-family: "Fira code", monospace, "Courier new";
  margin: 50px 20px 50px 0px;
  border-radius: 10px;
  width: 90%;

  > pre {
    margin: 0;
    padding: 0;
  }

  ol {
    counter-reset: line;
    list-style: none;
    padding-left: 15px;
  }

  ol > li {
    font-size: 15px;
    font-family: "Fira code", monospace, "Courier new";
    line-height: 150%;
    font-weight: 500;
    display: block;
    counter-increment: line;
    position: relative;
  }

  ol > li::before {
    content: counter(line) ". ";
    position: relative;
  }
`;

export const ContenedorLinea = styled.div`
  position: relative;
  display: inline-block;
  padding: 2px 0 2px 20px;
  border-left: 1px solid #8b8b8b;
`;

export const Variable = styled.span`
  color: white;
`;

export const Texto = styled.span`
  color: #a6e22e;
`;

export const Llaves = styled.span`
  color: #e6c874;
`;

export const Operador = styled.span`
  color: #ff8800;
`;

export const Numero = styled.span`
  color: #aa61db;
`;
