import sendFileID from "./sendFileID";

async function FileUpload(files, type) {
  const userId = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("access_token");
  const formData = new FormData();
  formData.append("file", files);
  console.log("test", files);
  try {
    const data = await fetch(
      // `https://jusanhr.herokuapp.com/photos/upload/${userId}`,
      `http://164.92.192.48:8081/photos/upload/${userId}`,
      formData,
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
    sendFileID(type);
    // console.log(dataJson);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default FileUpload;
