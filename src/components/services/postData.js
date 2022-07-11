async function DataUpload(obj, userId, token) {
  console.log(obj);
  console.log("test");
  try {
    const data = await fetch(
      `https://jusanhr.herokuapp.com/form/upload/maininfo/${userId}`,
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer_" + token,
          // // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const dataJson = await data.json();
    console.log(data);
    console.log(dataJson);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default DataUpload;
