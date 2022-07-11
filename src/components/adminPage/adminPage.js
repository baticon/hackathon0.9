import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./adminPage.module.css";
import person from "../media/person.png";
import TextField from "@mui/material/TextField";
import List from "./List";
import React, { useState } from "react";

const UserMainPage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <Header />
      <div>
        <div className={style.bodyContainer}>
          <div className={style.actionContainer}>
            <label>Создать новый профиль кандидата</label>
            <input placeholder="вставьте адрес электронной почты сюда"></input>
            <button>Создать профиль</button>

            <div className={style.searchContainer}>
              <h1 className={style.searchHeader}>Поиск</h1>
              <div className={style.searchBox}>
                <TextField
                  id="outlined-basic"
                  onChange={inputHandler}
                  variant="outlined"
                  fullWidth
                  label="Search"
                />
              </div>
              <List input={inputText} />
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
