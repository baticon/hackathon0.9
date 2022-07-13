import Header from "../header/header";
import Footer from "../footer/footer";
import InputFile from "./inputFile";
import postFile from "../services/postFile";
import question from "../media/question.png";
import style from "./userMainPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";
import UploadPhoto from "../services/postTest";
import UploadFile from "../services/postTestFiles";

//https://www.pluralsight.com/guides/uploading-files-with-reactjs

const stringid = "id";
const stringdiploma = "diploma";
const stringexperience = "experience";
const stringmedical = "medical";
const stringmilitary = "military";
const stringphoto = "photo";

const UserMainPage = () => {
  const navigate = useNavigate();

  const file = {};

  const [idFile, setIDFile] = useState(file);
  const [diplomaFile, setDiplomaFile] = useState(file);
  const [experienceFile, setExperienceFile] = useState(file);
  const [medicalFile, setMedicalFile] = useState(file);
  const [militaryFile, setMilitaryFile] = useState(file);
  const [photoFile, setPhotoFile] = useState(file);
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <div>
      <Header />
      <div>
        <Button
          style={{ width: "50%" }}
          type="button"
          onClick={() => navigate("/profile")}
        >
          Назад в профиль
        </Button>
        <div className={style.container}>
          <form className={style.formContainer} encType="multipart/form-data">
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
                {InputFile(idFile, setIDFile, stringid)}
                <Button
                  onClick={() => {
                    console.log("fdsfsdf", idFile);
                    UploadPhoto(idFile);
                  }}
                >
                  Сохранить
                </Button>
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

                {InputFile(diplomaFile, setDiplomaFile, stringdiploma)}
                <Button
                  onClick={() => {
                    console.log("fdsfsdf", diplomaFile);
                    UploadFile(diplomaFile);
                  }}
                >
                  Сохранить
                </Button>
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
                {InputFile(experienceFile, setExperienceFile, stringexperience)}
                <Button
                  onClick={() => {
                    console.log("fdsfsdf", experienceFile);
                    UploadFile(experienceFile);
                  }}
                >
                  Сохранить
                </Button>
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
                {InputFile(medicalFile, setMedicalFile, stringmedical)}
                <Button
                  onClick={() => {
                    console.log("fdsfsdf", medicalFile);
                    UploadFile(medicalFile);
                  }}
                >
                  Сохранить
                </Button>
              </div>
              <div className={style.fileUploadContainer}>
                <div className={style.documentType}>
                  <span className={style.documentTypeText}>
                    5. Военный билет
                  </span>
                  <img
                    src={question}
                    alt=""
                    className={style.hint}
                    title="Военный билет/приписное свидетельство (для военнообязанных)"
                  ></img>
                </div>
                {InputFile(militaryFile, setMilitaryFile, stringmilitary)}
                <Button
                  onClick={() => {
                    console.log("fdsfsdf", militaryFile);
                    UploadFile(militaryFile);
                  }}
                >
                  Сохранить
                </Button>
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
                {InputFile(photoFile, setPhotoFile, stringphoto)}
                <Button
                  onClick={() => {
                    console.log("fdsfsdf", photoFile);
                    UploadFile(photoFile);
                  }}
                >
                  Сохранить
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserMainPage;
