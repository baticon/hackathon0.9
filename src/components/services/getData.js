async function DataDownload(userId, token) {
  try {
    const data = await fetch(
      `https://jusanhr.herokuapp.com/form/download/maininfo/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer_" + token,
          // // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const dataJson = await data.json();
    console.log("testblah");
    console.log(data);
    console.log(dataJson);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default DataDownload;
