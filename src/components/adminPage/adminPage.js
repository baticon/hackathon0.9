import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./adminPage.module.css";
import person from "../media/person.png";
import TextField from "@mui/material/TextField";
import List from "./List";
import React, { useState, Component } from "react";
import ReactSearchBox from "react-search-box";
import { Button, Input } from "@chakra-ui/react";
import createUser from "../services/postUser";
import getUser from "../services/getUsers";

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

  async function Users() {
    try {
      const response = await getUser();
      const resJson = await response;

      console.log(resJson);
    } catch (error) {
      console.log(error);
    }
  }

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
              <Button onClick={() => Users()}>Показать профили</Button>
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
