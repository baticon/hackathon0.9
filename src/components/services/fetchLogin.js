const url = "https://jusanhr.herokuapp.com/login";

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
