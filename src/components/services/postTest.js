const axios = require("axios").default;

async function uploadFile(files) {
  const formData = new FormData();
  formData.append("ruslan", files);
  console.log("ruslan", files);
  try {
    const response = await axios.post(
      "https://jusanhr.herokuapp.com/photos/upload/1",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
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
