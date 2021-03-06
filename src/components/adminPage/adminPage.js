import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./adminPage.module.css";
import person from "../media/person.png";
import TextField from "@mui/material/TextField";
import List from "./List";
import React, { useState, useEffect, Component } from "react";
import ReactSearchBox from "react-search-box";
import { Button, Input } from "@chakra-ui/react";
import createUser from "../services/postUser";
import getUser from "../services/getUsers";
import getPhoto from "../services/getPhoto";

//https://dev.to/salehmubashar/search-bar-in-react-js-545l
const UserMainPage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);

    // console.log("value is:", event.target.value);
  };

  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    async function pullData() {
      const fetchedData = await getUser();
      if (fetchedData !== undefined) {
        setUserDetails(fetchedData);
        console.log(fetchedData);
      }
    }
    pullData();
  }, []);

  const handleClickPhoto = (event) => {
    console.log(event.currentTarget.id);
    doFetchDownloadPhoto(event.currentTarget.id);
  };

  function doFetchDownloadPhoto(userId) {
    const token = window.localStorage.getItem("access_token");
    fetch(`https://jusanhr.herokuapp.com/photos/download/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer_" + token,
        // // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        return res.blob();
      })
      .then((data) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download = "FILENAME";
        a.click();
      });
  }

  const handleClickFiles = (event) => {
    console.log(event.currentTarget.id);
    doFetchDownloadFiles(event.currentTarget.id);
  };

  function doFetchDownloadFiles(userId) {
    const token = window.localStorage.getItem("access_token");
    fetch(`https://jusanhr.herokuapp.com/files/download/${userId}`, {
      Accept: "*/*",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer_" + token,
        // // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        return res.blob();
      })
      .then((data) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download = "FILENAME";
        a.click();
      });
  }

  const renderListItems = () => {
    if (userDetails !== undefined && userDetails !== null) {
      return userDetails.users.map((user) => {
        return (
          <div className={style.profiles}>
            <span className={style.profileHeader}>
              ID {user.id} : {user.username}
            </span>
            <div>
              <Button
                id={user.id}
                style={{
                  backgroundColor: "#a7c957",
                  margin: "2%",
                }}
              >
                ?????????????? ??????????????????
              </Button>
              <Button
                id={user.id}
                style={{
                  backgroundColor: "#4895ef",
                  margin: "2%",
                  color: "white",
                }}
                onClick={handleClickPhoto}
              >
                ?????????????????? ????????????????????
              </Button>
              <Button
                id={user.id}
                style={{
                  backgroundColor: "#4895ef",
                  margin: "2%",
                  color: "white",
                }}
                onClick={handleClickFiles}
              >
                ?????????????????? ??????????????????
              </Button>
              <Button
                id={user.id}
                style={{
                  backgroundColor: "#4895ef",
                  margin: "2%",
                  color: "white",
                }}
                onClick={handleClickFiles}
              >
                ?????????????????? ????????????
              </Button>
            </div>
          </div>
        );
      });
    }
  };

  // Set loading state to true initially
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 1000));
      console.log("test");

      // Toggle loading state
      setLoading(!loading);
    };

    loadData();
  }, []);

  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return <div className={style.dotsbars1}></div>;
  } else {
    return (
      <div className={style.parent}>
        <Header />
        <div className={style.subparent}>
          <div className={style.actionContainer}>
            <div className={style.profile}>
              <div>
                <img className={style.profilePic} src={person}></img>
                <div className={style.profileInfo}>
                  <span>?????????? ??????????????</span>
                  <span>Email: admin </span>
                  <span>??????: admin</span>
                  <span>??????????????: admin</span>
                </div>
              </div>
              <div>
                <div className={style.profileInfo}>
                  <span>
                    ???????????????????? ????????????:{" "}
                    {userDetails ? userDetails.users.length : ""}
                  </span>
                  <span>
                    ?? ????????????????: {userDetails ? userDetails.users.length : ""}
                  </span>
                  <span>
                    ?????? ?????????????????????? ????????????????????????:{" "}
                    {userDetails ? userDetails.users.length : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.bodyContainer}>
            <div className={style.actionContainer}>
              <div className={style.create}>
                <label>?????????????? ?????????? ?????????????? ??????????????????</label>
                <Input
                  onChange={handleChange}
                  placeholder="???????????????? ?????????? ?????????????????????? ?????????? ????????"
                ></Input>
                <Button onClick={() => createUser(email)}>
                  ?????????????? ??????????????
                </Button>
                {/* <Button onClick={() => Users()}>???????????????? ??????????????</Button> */}
              </div>
            </div>
          </div>

          <div className={style.bodyContainer}>
            <div className={style.actionContainer}>
              <div className={style.create}>
                <h1 className={style.searchHeader}>???????????? ????????????????</h1>
                {renderListItems()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default UserMainPage;
