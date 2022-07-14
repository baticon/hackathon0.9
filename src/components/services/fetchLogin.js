// const url = "https://jusanhr.herokuapp.com/sign-in";
const url = "http://164.92.192.48:8081/sign-in";

async function FetchLogin(obj) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();
    window.localStorage.setItem("access_token", data.token);
    window.localStorage.setItem("user_id", data.id);
  } catch (error) {
    console.log(error.message);
  }
}

export default FetchLogin;
