async function DataDownload() {
  const userId = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("access_token");
  try {
    const data = await fetch(
      `https://jusanhr.herokuapp.com/form/download/info/${userId}`,
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
    return { dataJson };
    // return {
    //   ...dataJson,
    //   additionalEducationInfoDtos: [
    //     { yearOfGraduation: "2020-10-10", durationOfTraining: "2016-10-10" },
    //     { yearOfGraduation: "2020-10-10", durationOfTraining: "2016-10-10" },
    //   ],
    //   universityInfoDtos: [],
    // };
  } catch (error) {
    console.error("Error:", error);
  }
}

export default DataDownload;
