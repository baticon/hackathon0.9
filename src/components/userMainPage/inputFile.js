import { useState } from "react";
import style from "../userMainPage/userMainPage.module.css";

function InputFile(files, setFiles, identifier) {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    console.log(files);
    setSelectedFile(event.target.files[0]);
    if (identifier === "id") {
      const newFile = { ...files, id: { file: event.target.files[0] } };
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "diploma") {
      const newFile = { ...files, diploma: { file: event.target.files[0] } };
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "experience") {
      const newFile = { ...files, experience: { file: event.target.files[0] } };
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "medical") {
      const newFile = { ...files, medical: { file: event.target.files[0] } };
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "military") {
      const newFile = { ...files, military: { file: event.target.files[0] } };
      setFiles(newFile);
      console.log(files);
    }
    if (identifier === "photo") {
      const newFile = { ...files, photo: { file: event.target.files[0] } };
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
    </div>
  );
}

export default InputFile;
