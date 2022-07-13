async function getPhoto(userId) {
  console.log(userId);
  const token = window.localStorage.getItem("access_token");
  try {
    const data = await fetch(
      `https://jusanhr.herokuapp.com/photos/download/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer_" + token,
          // // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const dataJson = await data.json();
    console.log("test", dataJson);
    return dataJson;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default getPhoto;
