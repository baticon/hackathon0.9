import { useState } from "react";
import style from "../userMainPage/userMainPage.module.css";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    const formData = new FormData();
    console.log("dataJson");
    formData.append("file", selectedFile);
    try {
      const data = await fetch(
        `http://164.92.192.48:9095/upload/file/database?name=${selectedFile.name}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const dataJson = await data.json();
      console.log(data);
      console.log(dataJson);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={style.fileUpload}>
      <input
        className={style.fileInput}
        type="file"
        name="file"
        onChange={changeHandler}
      />
      {isFilePicked ? (
        <div>
          <p className={style.paragraph}>
            Наименование файла: {selectedFile.name}
          </p>
          <p className={style.paragraph}>Тип файла: {selectedFile.type}</p>
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

      <div>
        <button
          className={style.submitButton}
          onClick={handleSubmission}
          type="button"
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
