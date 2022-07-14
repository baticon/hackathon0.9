import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./login.module.css";
import FetchLogin from "../services/fetchLogin";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (info) => {
    try {
      const response = await FetchLogin(info);
      const resJson = await response;

      navigate("/profile");
      console.log(info);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  // Set loading state to true initially
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 1000));
      console.log("test");

      // Toggle loading state
      setLoading(!loading);
    };

    loadData();
  }, []);

  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return <div className={style.dotsbars1}></div>;
  }

  // If page is not in loading state, display page.
  else {
    return (
      <div>
        <Header />
        <div className={style.container}>
          <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.loginContainer}>
              <span className={style.spanHeader}>Введите учётные данные</span>
              <span className={style.spanSubHeader}>
                Используйте учётную запись отправленную на Ваш email
              </span>
            </div>
            <div className={style.formInput}>
              <input
                type="text"
                className={style.inputField}
                placeholder="Логин"
                // pattern="^(?=.{3,15}$)(?=.*[a-zA-Z])([a-zA-Z\d-]+)$"
                // title="Логин — от 3 до 15 символов, только латиница. Без пробелов, без спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать числа, но не полностью состоять из них."
                {...register("username", {
                  required: "Поле обязательно для заполнения",
                  // pattern: {
                  //   value: /^(?=.{3,15}$)(?=.*[a-zA-Z])([a-zA-Z\d-]+)$/i,
                  //   message:
                  //     "Логин — от 3 до 15 символов, только латиница. Без пробелов, без спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать числа, но не полностью состоять из них.",
                  // },
                })}
              />

              <input
                type="password"
                className={style.inputField}
                placeholder="Пароль"
                // pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
                // title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."
                // title={errors.password && errors.password.message}
                {...register("password", {
                  required: "Поле обязательно для заполнения",
                  // pattern: {
                  //   value:
                  //     /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/i,
                  //   message:
                  //     "Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра.",
                  // },
                })}
              />
              <button className={style.button} type="submit">
                Войти
              </button>
              <a className={style.forgotten} href="/registration">
                Забыли пароль?
              </a>
            </div>
          </form>
          <span style={{ fontSize: "0" }}>-</span>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Login;
