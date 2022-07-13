import logo from "../media/jusan_logo.png";
import exitIcon from "../media/exit.png";
import style from "./header.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  const navigate = useNavigate();
  const [bool, setBool] = useState(true); //placeholder for sessionstorage

  function button() {
    if (bool === true) {
      return (
        <button
          className={style.exitButton}
          onClick={() => {
            console.log("Exit condition");
            window.localStorage.clear();
            navigate("/");
          }}
        >
          <img src={exitIcon} className={style.exitIcon} alt=""></img>
          Выход
        </button>
      );
    }
    return null;
  }

  return (
    <div className={style.container}>
      <a className={style.jusan} href="https://jusan.kz/">
        Модуль JUSAN Hire
      </a>
      <a href="https://jusan.kz/">
        <img src={logo} className={style.logo} alt=""></img>
      </a>
      <Menu>
        <MenuButton
          as={Button}
          style={{
            backgroundColor: "white",
            color: "#ea4335",
            width: "17%",
            fontSize: "150%",
          }}
        >
          Меню
        </MenuButton>
        <MenuList>
          <MenuItem>Политика конфиденциальности</MenuItem>
          <MenuItem>Вакансии в Jusan</MenuItem>
          <MenuItem
            onClick={() => {
              window.localStorage.clear();
              navigate("/");
            }}
          >
            Выход
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Header;
