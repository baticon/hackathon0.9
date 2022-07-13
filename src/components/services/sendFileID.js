async function sendFileID(id, type) {
  const userId = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("access_token");
  const obj = {
    documentId: id,
    documentType: type,
  };
  console.log(obj);
  try {
    const data = await fetch(
      `https://jusanhr.herokuapp.com/files/upload/document-type`,
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization: "Bearer_" + token,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    // const dataJson = await data.json();
    console.log(data);
    // console.log(dataJson);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default sendFileID;
