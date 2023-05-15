import React, { useState } from "react";
import { Menu, MenuItem, A } from "../../../Styles/Container/Style_menu";
import ListaMenu from "./ListaMenu";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

function MenuPython() {
  const [itemsAbiertos, setItemsAbiertos] = useState([ListaMenu[0].id]);

  // useEffect( () => {
  //   console.log(itemsAbiertos)
  // }, [itemsAbiertos])

  const handleClick = (id, e) => {
    e.preventDefault();
    if (itemsAbiertos.includes(id)) {
      setItemsAbiertos(itemsAbiertos.filter((itemId) => itemId !== id));
    } else {
      setItemsAbiertos([...itemsAbiertos, id]);
    }
  };

  return (
    <Menu>
      <ul>
        {ListaMenu.map((item) => (
          <MenuItem key={item.id}>
            <A href="#" onClick={(e) => handleClick(item.id, e)}>
              {item.title}{" "}
              {itemsAbiertos.includes(item.id) ? (
                <IoIosArrowDropupCircle
                  style={{ float: "right", color: "#ff8d00" }}
                />
              ) : (
                <IoIosArrowDropdownCircle
                  style={{ float: "right", color: "#ff8d00" }}
                />
              )}
            </A>
            {itemsAbiertos.includes(item.id) ? <>{item.content}</> : null}
          </MenuItem>
        ))}
      </ul>
    </Menu>
  );
}

export default MenuPython;
