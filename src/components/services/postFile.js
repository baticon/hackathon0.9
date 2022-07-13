// import { useState } from "react";
// import style from "../userMainPage/userMainPage.module.css";

// function FileUpload() {
//   const handleSubmission = async () => {
//     const formData = new FormData();
//     formData.append("file", selectedFile);
//     try {
//       const data = await fetch(
//         `http://164.92.192.48:9095/upload/file/database?name=${selectedFile.name}`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const dataJson = await data.json();
//       console.log(data);
//       console.log(dataJson);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
// }

async function FileUpload(files) {
  const userId = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("access_token");
  try {
    const data = await fetch(
      // `http://164.92.192.48:9095/upload/file/database?name=test`,
      // "https://app-hr-project.herokuapp.com/login",
      `https://jusanhr.herokuapp.com/upload/photo/${userId}`,
      {
        method: "POST",
        body: files,
      }
    );
    const dataJson = await data.json();
    console.log(data);
    console.log(dataJson);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default FileUpload;
