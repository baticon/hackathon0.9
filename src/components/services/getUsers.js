async function usersDownload() {
  const userId = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("access_token");
  try {
    // const data = await fetch(`https://jusanhr.herokuapp.com/users/all`, {
    const data = await fetch(`http://164.92.192.48:8081/users/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer_" + token,
        // // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const dataJson = await data.json();
    console.log(dataJson);
    return dataJson;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default usersDownload;
