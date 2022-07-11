import logo from "../media/jusan_logo.png";
import exitIcon from "../media/exit.png";
import style from "./header.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hamburger from "../media/hamburger.png";
import { display } from "@mui/system";
import FadeInOut from "./FadeInOut";

const Header = () => {
  const navigate = useNavigate();
  const [bool, setBool] = useState(true); //placeholder for sessionstorage

  const [toggle, setToggle] = useState(false);

  function button(toggle) {
    if (bool === true && toggle == true) {
      return (
        <button
          className={style.exitButton}
          onClick={() => {
            console.log("Exit condition");
            // window.localStorage.clear();
            window.localStorage.removeItem("access_token");
            navigate("/login");
          }}
        >
          <img src={exitIcon} className={style.exitIcon} alt=""></img>
          Выход
        </button>
      );
    }
    if (bool === true && toggle == false) {
      return <button className={style.exitButtonHidden}>Выход</button>;
    }
  }

  return (
    <div className={style.container}>
      <a className={style.jusan} href="https://jusan.kz/">
        Модуль JUSAN Hire
      </a>
      <a href="https://jusan.kz/">
        <img src={logo} className={style.logo} alt=""></img>
      </a>

      <div style={{ display: "flex" }}>
        {toggle === true && (
          <FadeInOut show={toggle} duration={1500}>
            <ol>
              <a className={style.menu} href="https://jusan.kz/">
                <li>Политика конфиденциальности</li>
              </a>
              <a className={style.menu} href="https://jusan.kz/">
                <li>Вакансии в Jusan</li>
              </a>
              {button(toggle)}
            </ol>
          </FadeInOut>
        )}
        {toggle === false && (
          <ol>
            <a className={style.menuHidden} href="">
              <li>Политика конфиденциальности</li>
            </a>
            <a className={style.menuHidden} href="">
              <li>Вакансии в Jusan</li>
            </a>
            {button(toggle)}
          </ol>
        )}

        <img
          src={hamburger}
          style={{ width: "100px" }}
          onClick={() => {
            setToggle(!toggle);
          }}
        ></img>
      </div>
    </div>
  );
};

export default Header;
