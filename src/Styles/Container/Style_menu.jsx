import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Menu = styled.div`
  & > ul {
    margin-bottom: 0px;
    margin-top: 0px;
    padding-left: 0px;
  }
`;

export const MenuContent = styled.ul`
  font-family: "Bahnschrift";
  word-wrap: break-word;
  text-align: left;
  margin: 10px auto auto auto;
  border-top: 1px solid #a1a89e;
  padding: 10px 0px 0px 30px;

  & > li {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const MenuItem = styled.li`
  border-bottom: 1px solid #a1a89e;
  padding: 13px;
  margin-right: 0px;
  list-style: none;
  text-align: left;
`;

export const A = styled.a`
  display: block;
  font-family: "Bahnschrift";
  text-decoration: none;
  color: #fff;
`;

export const Enlace = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: normal;

  &.active{
    color: #db851b;
  }
`;
