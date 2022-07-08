import logo from "../media/jusan_logo.png";
import style from "./header.module.css";

const header = () => {
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
      </ol>
      {/* <a className={style.text}>Политика конфиденциальности</a>
      <a className={style.text}>Вакансии в Jusan</a> */}
    </div>
  );
};

export default header;
