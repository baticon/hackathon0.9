const data = { username: "example", password: "example" };
const url = "https://example.com/profile";

async function LoginFetch(obj) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const data = await res.json;
    console.log(data);
    // sessionStorage.setItem("access_token", data.access_token);
    // window.localStorage.setItem("access_token", data.access_token);
    console.log(data.access_token);
  } catch (error) {
    console.log(error);
  }
}
