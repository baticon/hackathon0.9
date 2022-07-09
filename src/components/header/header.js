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
            setBool(false); //placeholder for sessionstorage
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
      <ol>
        <a className={style.menu} href="https://jusan.kz/">
          <li>Политика конфиденциальности</li>
        </a>
        <a className={style.menu} href="https://jusan.kz/">
          <li>Вакансии в Jusan</li>
        </a>
        {button()}
      </ol>
    </div>
  );
};

export default Header;
