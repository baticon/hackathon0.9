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
    fetch(`https://jusanhr.herokuapp.com/form/download/info/${userId}`, {
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
          <div>
            <span>
              ID {user.id} : {user.username}
            </span>
            {/* <Button id={user.id} onClick={() => getPhoto(this.id)}> */}
            <Button id={user.id} onClick={handleClickPhoto}>
              Download photo
            </Button>
            <Button id={`${user.id}a`} onClick={handleClickFiles}>
              Download files
            </Button>
          </div>
        );
      });
    }
  };

  return (
    <div className={style.parent}>
      <Header />
      <div>
        <div className={style.bodyContainer}>
          <div className={style.actionContainer}>
            <div className={style.create}>
              <label>Создать новый профиль кандидата</label>
              <Input
                onChange={handleChange}
                placeholder="вставьте адрес электронной почты сюда"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Email — стандартная проверка: латиница, может содержать спецсимволы и
          цифры, обязательно должна быть «собачка» (@) и точка после неё, но
          перед точкой обязательно должны быть буквы"
              ></Input>
              <Button onClick={() => createUser(email)}>Создать профиль</Button>
              {/* <Button onClick={() => Users()}>Показать профили</Button> */}
            </div>

            <div className={style.searchContainer}>
              <h1 className={style.searchHeader}>Список профилей</h1>
              {renderListItems()}
            </div>
          </div>
          <div className={style.profileContainer}>
            <span>Админ профиль</span>
            <div className={style.profile}>
              <img className={style.profilePic} src={person}></img>
              <div className={style.profileInfo}>
                <span>Email: </span>
                <span>Имя:</span>
                <span>Фамилия:</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserMainPage;
