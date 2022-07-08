import logo from "../media/logo.jpg";
import style from "./header.module.css";

const header = () => {
  return (
    <div className={style.container}>
      <a href="https://jusan.kz/">
        <img src={logo} className={style.logo}></img>
      </a>
      <a style={{ fontSize: "100%", color: "#EA4335" }}>JUSAN HR</a>
      <a style={{ fontSize: "100%" }}>Политика конфиденциальности</a>
      <a style={{ fontSize: "100%" }}>Узнать про наем в Жусан</a>
    </div>
  );
};

export default header;
