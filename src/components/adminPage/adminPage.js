import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./adminPage.module.css";
import person from "../media/person.png";
import TextField from "@mui/material/TextField";
import List from "./List";
import React, { useState, Component } from "react";
import ReactSearchBox from "react-search-box";
import { Button, Input } from "@chakra-ui/react";

//https://dev.to/salehmubashar/search-bar-in-react-js-545l
const UserMainPage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const dummydata = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <div className={style.bodyContainer}>
          <div className={style.actionContainer}>
            <div className={style.create}>
              <label>Создать новый профиль кандидата</label>
              <Input placeholder="вставьте адрес электронной почты сюда"></Input>
              <Button>Создать профиль</Button>
            </div>

            <div className={style.searchContainer}>
              <h1 className={style.searchHeader}>Список профилей</h1>
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
