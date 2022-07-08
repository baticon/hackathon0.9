import Header from "../header/header";
import Footer from "../footer/footer";
import HeaderImg from "../media/header.jpg";
import checkIcon from "../media/check.png";
import style from "./login.module.css";

const login = () => {
  return (
    <div>
      <Header></Header>
      <img
        src={HeaderImg}
        alt="header image"
        style={{ width: "100%", height: "100%" }}
      />
      <div className={style.container}>
        <form className={style.loginForm}>
          <div className={style.loginContainer}>
            <span className={style.spanHeader}>Введите учётные данные</span>
            <span className={style.spanSubHeader}>
              Используйте учётную запись отправленную на Ваш email
            </span>
          </div>
          <div className={style.formInput}>
            <label className={style.label}>Логин</label>
            <input
              type="text"
              className={style.inputField}
              placeholder="Логин"
              pattern="^(?=.{3,15}$)(?=.*[a-zA-Z])([a-zA-Z\d-]+)$"
              title="Логин — от 3 до 15 символов, только латиница. Без пробелов, без спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать числа, но не полностью состоять из них."
            />
            <label className={style.label}>Пароль</label>
            <input
              type="password"
              className={style.inputField}
              placeholder="Пароль"
              pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
              title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
            />
            <button className={style.button}>Enter</button>
            <a href="/registration">Забыли пароль?</a>
          </div>
        </form>
        <span style={{ fontSize: "0" }}>-</span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default login;
