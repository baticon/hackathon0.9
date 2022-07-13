import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import style from "./userProfiePage.module.css";
import fillOutImage from "../media/fillout.jpeg";
import person from "../media/person.png";

const UserProfilePage = () => {
  const navigate = useNavigate();
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
        <div className={style.bodyContainer}>
          <div className={style.actionContainer}>
            <span>Этапы приема на работу утвержденной кандидатуры</span>
            <span>Текущий стату: STATUS TO BE INSERTED</span>
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
                <label className={style.stepOneLabel}>Статус: TBD</label>
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
                <label className={style.stepOneLabel}>Статус: TBD</label>
              </div>
              <div className={style.stepOne}>
                <img className={style.stepOneImage} src={fillOutImage}></img>
                <label className={style.stepOneLabel}>
                  Шаг 3: ожидание ответа отдела кадров
                </label>
                <label className={style.stepOneLabel}>Статус: TBD</label>
              </div>
            </div>
          </div>
          <div className={style.profileContainer}>
            <span>Профиль</span>
            <div className={style.profile}>
              <img className={style.profilePic} src={person}></img>
              <div className={style.profileInfo}>
                <span>Email: </span>
                <span>Имя:</span>
                <span>Фамилия:</span>
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
