const axios = require("axios").default;

async function createUser(usermail) {
  console.log(usermail);

  const userId = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("access_token");
  const obj = { email: usermail };
  try {
    const response = await axios.post(
      `https://jusanhr.herokuapp.com/users/sign-up`,
      {
        email: usermail,
        headers: {
          "Content-Type": "application/json",
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

export default createUser;
