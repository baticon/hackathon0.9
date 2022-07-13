import Header from "../header/header";
import Footer from "../footer/footer";
import InputFile from "./inputFile";
import postFile from "../services/postFile";
import question from "../media/question.png";
import style from "./userMainPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";

//https://www.pluralsight.com/guides/uploading-files-with-reactjs

const UserMainPage = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    file: null,
  });

  const [boolCheck, setBoolCheck] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    console.log(files);
    setSelectedFile(event.target.files[0]);
    const newFile = { ...files, file: event.target.files[0] };
    setFiles(newFile);
    setIsFilePicked(true);
  };

  return (
    <div className={style.boxContainer}>
      <Header />
      <div className={style.container}>
        <Button
          style={{ width: "50%" }}
          type="button"
          onClick={() => navigate("/profile")}
        >
          Назад в профиль
        </Button>

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
              <div className={style.fileUpload}>
                <input
                  className={style.fileInput}
                  type="file"
                  name="file"
                  onChange={changeHandler}
                />
                {isFilePicked && selectedFile !== undefined ? (
                  <div>
                    <p className={style.paragraph}>
                      Наименование файла:{" "}
                      {selectedFile.name.length > 10
                        ? "File name in too long"
                        : `✅ ${selectedFile.name}`}
                    </p>
                    <p className={style.paragraph}>
                      Тип файла: {selectedFile.type}
                    </p>
                    <p className={style.paragraph}>
                      Размер в байтах: {selectedFile.size}
                    </p>
                    <p className={style.paragraph}>
                      Последние изменение:{" "}
                      {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <p style={{ paddingTop: "5%" }}>Файл не прикреплен</p>
                )}
              </div>
            </div>
            <Button onClick={() => postFile(files)}>Отправить</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserMainPage;
