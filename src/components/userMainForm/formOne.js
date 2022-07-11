import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./userMainForm.module.css";
import question from "../media/question.png";
import React, { useEffect, useState, useCallback } from "react";
import Select from "react-select";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import dataUpload from "../services/postData";

const personalData = {
  iin: null,
  dob: null,
  pob: "Hello",
  nationality: null,
  citizenship: null,
  passportSeries: null,
  passportNumber: null,
  passportIssued: null,
};

const FormOne = () => {
  const navigate = useNavigate();
  const { control, register, handleSubmit, reset } = useForm({
    defaultValues: personalData,
  });

  const onSubmit = (data) => console.log(data); //do fetch to server here to post data

  //get data from backend when user returns to certain page

  const resetAsyncForm = useCallback(async () => {
    // const result = await fetch("./api/formValues.json"); // result: { firstName: 'test', lastName: 'test2' }
    // reset(result); // asynchronously reset your form values
    reset({
      iin: "bye",
      dob: "howdy",
      pob: "Hello",
      nationality: null,
      citizenship: null,
      passportSeries: null,
      passportNumber: null,
      passportIssued: null,
    });
  }, [reset]);

  useEffect(() => {
    resetAsyncForm();
  }, [resetAsyncForm]);

  return (
    <div>
      <Header />
      <button type="button" onClick={() => navigate("/profile")}>
        Назад в профиль
      </button>
      <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginTop: "2%" }}>
          <div className={style.IINContainer}>
            <label className={style.IINlabel}>ИИН</label>
            <input
              className={style.IINinput}
              placeholder="например, 900101250050"
              {...register(`iin`)}
            ></input>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="ИИН расположен на лицевой стороне удостоверения личности гражданина Республики Казахстан, ниже даты рождения в виде комбинации из 12-ти цифр, в паспорте гражданина Республики Казахстан ИИН указан на 2 странице.  Иностранцы и лица без гражданства, постоянно проживающие в Казахстане, у которых на лицевой стороне вида на жительство иностранца в Республике Казахстан ниже даты рождения или на 2 странице удостоверения лица без гражданства ИИН не указан, должны обратиться в органы внутренних дел по месту пребывания для переоформления документов."
            ></img>
          </div>
          <div className={style.DOBContainer}>
            <label className={style.DOBlabel}>
              Число, месяц и год рождения
            </label>
            <input
              className={style.DOBinput}
              placeholder="например, 01-01-1900"
              {...register(`dob`)}
            ></input>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Дата рождения в формате ЧЧ-ММ-ГГГГ"
            ></img>
          </div>
          <div className={style.POBContainer}>
            <label className={style.POBlabel}>Место рождения</label>
            <input
              className={style.POBinput}
              placeholder="например, Казахстан, Астана"
              {...register(`pob`)}
            ></input>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите страну и город (или село/деревню)"
            ></img>
          </div>
          <div className={style.NATIONALITYContainer}>
            <label className={style.NATIONALITYlabel}>Национальность</label>
            <select
              className={style.NATIONALITYinput}
              {...register(`nationality`)}
            >
              <option value="">выберите национальность</option>
              <option value="казах">казах</option>
              <option value="русский">русский</option>
              <option value="другое">другое</option>
            </select>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите национальность"
            ></img>
          </div>
          <div className={style.CITIZENSHIPContainer}>
            <label className={style.CITIZENSHIPlabel}>Гражданство</label>
            <select
              className={style.CITIZENSHIPinput}
              {...register(`citizenship`)}
            >
              <option value="">выберите гражданство</option>
              <option value="Казахстан">Казахстан</option>
              <option value="Россия">Россия</option>
              <option value="беженец">беженец</option>
            </select>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите гражданство"
            ></img>
          </div>
          <div className={style.IDCARDContainer}>
            <label className={style.IDCARDlabel}>
              Паспорт, удостоверение личности
            </label>
            <div className={style.IDCARDContainerTwo}>
              <input
                className={style.IDCARDinput}
                placeholder="например, N07080900"
                {...register(`passportSeries`)}
              ></input>
              <label style={{ fontSize: "70%" }}>Серия</label>
            </div>
            <div className={style.IDCARDContainerTwo}>
              <input
                className={style.IDCARDinput}
                placeholder="например, 044332211"
                {...register(`passportNumber`)}
              ></input>
              <label style={{ fontSize: "70%" }}>Номер</label>
            </div>
            <div className={style.IDCARDContainerTwo}>
              <input
                className={style.IDCARDinput}
                placeholder="например, МВД РК"
                {...register(`passportIssued`)}
              ></input>
              <label style={{ fontSize: "70%" }}>Кем выдан</label>
            </div>

            <img
              src={question}
              alt=""
              className={style.hint}
              title="1. Серия паспорта указана в паспорте гражданина РК и начинается с латинской буквы N. 2. Номер удостоверения указан на тыльной стороне удостоверения гражданина РК.  3. Орган выдачи удостоверения указан на передней части удостоверения гражданина РК"
            ></img>
          </div>
        </div>

        <button>Hello</button>
      </form>
      <button
        onClick={(data) => {
          dataUpload();
        }}
      >
        Сохранить
      </button>
      <Footer />
    </div>
  );
};

export default FormOne;
