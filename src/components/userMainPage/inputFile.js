import { useState } from "react";
import style from "../userMainPage/userMainPage.module.css";

function InputFile(files, setFiles, identifier, boolCheck, setBoolCheck) {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    console.log(files);
    setSelectedFile(event.target.files[0]);
    if (identifier === "id") {
      const newFile = event.target.files[0];
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "diploma") {
      const newFile = event.target.files[0];
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "experience") {
      const newFile = event.target.files[0];
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "medical") {
      const newFile = event.target.files[0];
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "military") {
      const newFile = event.target.files[0];
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "photo") {
      const newFile = event.target.files[0];
      setFiles(newFile);
      console.log(files);
    }

    setIsFilePicked(true);
  };

  return (
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
    </div>
  );
}

export default InputFile;
