import logo from "../media/jusan_logo.png";
import exitIcon from "../media/exit.png";
import style from "./header.module.css";
import { useState } from "react";

const Header = () => {
  const [bool, setBool] = useState(true); //placeholder for sessionstorage

  function button() {
    if (bool === true) {
      return (
        <button
          className={style.exitButton}
          onClick={() => {
            console.log("Exit condition");
            setBool(false);
          }}
        >
          <img src={exitIcon} className={style.exitIcon}></img>
          Выход
        </button>
      );
    }
    return null;
  }

  return (
    <div className={style.container}>
      <a className={style.jusan}>Модуль JUSAN Hire</a>
      <a href="https://jusan.kz/">
        <img src={logo} className={style.logo}></img>
      </a>
      <ol>
        <a className={style.menu} href="#">
          <li>Политика конфиденциальности</li>
        </a>
        <a className={style.menu} href="#">
          <li>Вакансии в Jusan</li>
        </a>
        {button()}
      </ol>
      {/* <a className={style.text}>Политика конфиденциальности</a>
      <a className={style.text}>Вакансии в Jusan</a> */}
    </div>
  );
};

export default Header;
