import Header from "../header/header";
import Footer from "../footer/footer";
import InputFile from "./inputFile";
import postFile from "../services/postFile";
import question from "../media/question.png";
import style from "./userMainPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//https://www.pluralsight.com/guides/uploading-files-with-reactjs

const stringid = "id";
const stringdiploma = "diploma";
const stringexperience = "experience";
const stringmedical = "medical";
const stringmilitary = "military";
const stringphoto = "photo";

const UserMainPage = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    id: {
      file: null,
    },
    diploma: {
      file: null,
    },
    experience: {
      file: null,
    },
    medical: {
      file: null,
    },
    military: {
      file: null,
    },
    photo: {
      file: null,
    },
  });
  return (
    <div>
      <Header />
      <button type="button" onClick={() => navigate("/profile")}>
        Назад в профиль
      </button>
      <div className={style.container}>
        <form className={style.formContainer}>
          <div className={style.uploadContainer}>
            <span className={style.formHeader}>
              Пожалуйста приложите следующие документы
            </span>
            <div className={style.fileUploadContainer}>
              <div className={style.documentType}>
                <span className={style.documentTypeText}>
                  1. Вид на жительство или удостоверение
                </span>
                <img
                  src={question}
                  alt=""
                  className={style.hint}
                  title="Вид на жительство иностранца в Республике Казахстан или
                удостоверение лица без гражданства (для иностранцев и лиц без
                гражданства, постоянно проживающих на территории Республики
                Казахстан)"
                ></img>
              </div>
              {InputFile(files, setFiles, stringid)}
            </div>
            <div className={style.fileUploadContainer}>
              <div className={style.documentType}>
                <span className={style.documentTypeText}>
                  2. Документ об образовании
                </span>
                <img
                  src={question}
                  alt=""
                  className={style.hint}
                  title="Документ об образовании (с приложением), квалификации, наличии специальных знаний или профессиональной подготовки при заключении трудового договора на работу, требующую соответствующих знаний, умений и навыков"
                ></img>
              </div>
              {InputFile(files, setFiles, stringdiploma)}
            </div>
            <div className={style.fileUploadContainer}>
              <div className={style.documentType}>
                <span className={style.documentTypeText}>
                  3. Документ, подтверждающий трудовую деятельность
                </span>
                <img
                  src={question}
                  alt=""
                  className={style.hint}
                  title="Для лиц, имеющих трудовой стаж"
                ></img>
              </div>
              {InputFile(files, setFiles, stringexperience)}
            </div>
            <div className={style.fileUploadContainer}>
              <div className={style.documentType}>
                <span className={style.documentTypeText}>
                  4. Медицинская справка
                </span>
                <img
                  src={question}
                  alt=""
                  className={style.hint}
                  title="Документ о прохождении предварительного медицинского освидетельствования (форма 075/у, для водителей 083/у)"
                ></img>
              </div>
              {InputFile(files, setFiles, stringmedical)}
            </div>
            <div className={style.fileUploadContainer}>
              <div className={style.documentType}>
                <span className={style.documentTypeText}>5. Военный билет</span>
                <img
                  src={question}
                  alt=""
                  className={style.hint}
                  title="Военный билет/приписное свидетельство (для военнообязанных)"
                ></img>
              </div>
              {InputFile(files, setFiles, stringmilitary)}
            </div>
            <div className={style.fileUploadContainer}>
              <div className={style.documentType}>
                <span className={style.documentTypeText}>6. Фото</span>
                <img
                  src={question}
                  alt=""
                  className={style.hint}
                  title="Фото 3*4 в формате Jpeg для оформления служебного пропуска"
                ></img>
              </div>
              {InputFile(files, setFiles, stringphoto)}
            </div>
            <button
              className={style.submitButton}
              onClick={() => postFile(files)}
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserMainPage;
