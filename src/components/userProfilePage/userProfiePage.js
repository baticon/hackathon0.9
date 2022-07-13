import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import style from "./userProfiePage.module.css";
import fillOutImage from "../media/fillout.jpeg";
import person from "../media/person.png";
import getUserDetails from "../services/getUserDetails";
import { useState, useEffect } from "react";

const UserProfilePage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState();

  getUserDetails(userData, setUserData);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />
      <div>
        <span>Этапы приема на работу утвержденной кандидатуры</span>
        <div className={style.bodyContainer}>
          <div className={style.actionContainer}>
            <span>
              Здравствуйте, {userData ? userData.oldSurname : ""}, мы рады, что
              Вы решили стать частью команды Jusan. Пожалуйста заполните
              информацию согласно шагам 1 и 2 указанным ниже. Для заполнения
              данных нажмите на одну из иконок.
            </span>
            <div className={style.stepsContainer}>
              <div className={style.stepOne}>
                <img
                  onClick={() => navigate("/mainform")}
                  className={style.stepOneImage}
                  src={fillOutImage}
                ></img>
                <label className={style.stepOneLabel}>
                  Шаг 1: заполнение анкеты
                </label>
              </div>
              <div className={style.stepOne}>
                <img
                  onClick={() => navigate("/mainpage")}
                  className={style.stepOneImage}
                  src={fillOutImage}
                ></img>
                <label className={style.stepOneLabel}>
                  Шаг 2: загрузка документов
                </label>
              </div>
              <div className={style.stepOne}>
                <img className={style.stepOneImage} src={fillOutImage}></img>
                <label className={style.stepOneLabel}>
                  Шаг 3: ожидание ответа отдела кадров
                </label>
              </div>
            </div>
          </div>
          <div className={style.profileContainer}>
            <span>Профиль</span>
            <div className={style.profile}>
              <img className={style.profilePic} src={person}></img>
              <div className={style.profileInfo}>
                <span>{userData ? userData.oldSurname : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
