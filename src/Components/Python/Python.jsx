import MenuPython from "./Menu/MenuPython";
import { Outlet } from "react-router-dom";
import {Container, SeccionContenido, SeccionMenu} from '../../Styles/Container/Style_container'

function Python() {
  return (
    <Container>
      <SeccionMenu>
        <MenuPython />
      </SeccionMenu>
      <SeccionContenido>
        <Outlet/>
      </SeccionContenido>
    </Container>
  );
}

export default Python;
