import sendFileID from "./sendFileID";

const axios = require("axios").default;

async function uploadFile(files, type) {
  console.log("test");
  console.log(files.name);
  const userId = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("access_token");
  const formData = new FormData();
  formData.append("file", files);
  console.log("file", files);
  try {
    const response = await axios.post(
      `https://jusanhr.herokuapp.com/files/upload/${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer_` + token,
        },
      }
    );
    console.log("test2");
    console.log(response.data.fileId);
    sendFileID(response.data.fileId, type);
  } catch (error) {
    if (error.response) {
      // get response with a status code not in range 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // no response
      console.log(error.request);
    } else {
      // Something wrong in setting up the request
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
}

export default uploadFile;
