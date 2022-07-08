import logo from "../media/jusan_logo.png";
import style from "./header.module.css";

const header = () => {
  return (
    <div className={style.container}>
      <a href="https://jusan.kz/">
        <img src={logo} className={style.logo}></img>
      </a>
      <a className={style.jusan}>Модуль JUSAN Hire</a>
      <a className={style.text}>Политика конфиденциальности</a>
      <a className={style.text}>Вакансии в Jusan</a>
    </div>
  );
};

export default header;
