// import { useState } from "react";
// import style from "../userMainPage/userMainPage.module.css";

import Header from "../header/header";

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
  const formData = new FormData();
  formData.append("file", files);
  console.log("test", files);
  try {
    // return http.post("http://localhost:8081/upload", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   onUploadProgress,
    // });

    const data = await fetch(
      `https://jusanhr.herokuapp.com/photos/upload/${userId}`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // const dataJson = await data.json();
    console.log(data);
    // console.log(dataJson);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default FileUpload;
