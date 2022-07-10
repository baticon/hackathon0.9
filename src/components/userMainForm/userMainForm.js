import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./userMainForm.module.css";
import question from "../media/question.png";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

//use https://react-hook-form.com/

// <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />

const defaultUniversity = {
  start: null,
  end: null,
  universityname: "",
  major: "",
  attendance: "",
  degree: "",
};

const UserMainForm = () => {
  const [universities, setUniversities] = useState([defaultUniversity]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
  //   {
  //     name: "test", // unique name for your Field Array
  //   }
  // );

  return (
    <div>
      <Header />
      <div>
        <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginTop: "2%" }}>
            <div className={style.IINContainer}>
              <label className={style.IINlabel}>ИИН</label>
              <input
                className={style.IINinput}
                placeholder="например, 900101250050"
                {...register("IIN")}
              ></input>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="ИИН расположен на лицевой стороне удостоверения личности гражданина Республики Казахстан, ниже даты рождения в виде комбинации из 12-ти цифр, в паспорте гражданина Республики Казахстан ИИН указан на 2 странице.  Иностранцы и лица без гражданства, постоянно проживающие в Казахстане, у которых на лицевой стороне вида на жительство иностранца в Республике Казахстан ниже даты рождения или на 2 странице удостоверения лица без гражданства ИИН не указан, должны обратиться в органы внутренних дел по месту пребывания для переоформления документов."
              ></img>
            </div>
            <div className={style.NAMEContainer}>
              <label className={style.NAMElabel}>ФИО</label>
              <input
                className={style.NAMEinput}
                placeholder="например, Данов Руслан Багданович"
                {...register("Name")}
              ></input>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="ФИО - если Вы сменили фамилию, укажите, пожалуйста, прежнюю"
              ></img>
            </div>
            <div className={style.DOBContainer}>
              <label className={style.DOBlabel}>
                Число, месяц и год рождения
              </label>
              <input
                className={style.DOBinput}
                placeholder="например, 01-01-1900"
                {...register("DOB")}
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
                {...register("POB")}
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
                {...register("Nationality")}
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
                {...register("Citizenship")}
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
                  {...register("IDcardPassportID")}
                ></input>
                <label style={{ fontSize: "70%" }}>Серия</label>
              </div>
              <div className={style.IDCARDContainerTwo}>
                <input
                  className={style.IDCARDinput}
                  placeholder="например, 044332211"
                  {...register("IDcardID")}
                ></input>
                <label style={{ fontSize: "70%" }}>Номер</label>
              </div>
              <div className={style.IDCARDContainerTwo}>
                <input
                  className={style.IDCARDinput}
                  placeholder="например, МВД РК"
                  {...register("IDcardIssue")}
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
            <div className={style.CONTACTSContainer}>
              <label className={style.CONTACTSlabel}>Контактные данные</label>
              <div className={style.CONTACTSContainerTwo}>
                <div className={style.CONTACTSContainerThree}>
                  <label className={style.CONTACTSlabelTwo}>
                    Домашний телефон
                  </label>
                  <input
                    className={style.CONTACTSinputTwo}
                    placeholder="например, +7-7172-111-222"
                    {...register("HomeNumber")}
                  ></input>
                </div>
                <div className={style.CONTACTSContainerThree}>
                  <label className={style.CONTACTSlabelTwo}>
                    Рабочий телефон
                  </label>
                  <input
                    className={style.CONTACTSinputTwo}
                    placeholder="например, +7-777-111-2222"
                    {...register("WorkNumber")}
                  ></input>
                </div>
                <div className={style.CONTACTSContainerThree}>
                  <label className={style.CONTACTSlabelTwo}>
                    Мобильный телефон
                  </label>
                  <input
                    className={style.CONTACTSinputTwo}
                    placeholder="например, +7-777-333-4444"
                    {...register("MobileNumber")}
                  ></input>
                </div>
                <div className={style.CONTACTSContainerThree}>
                  <label className={style.CONTACTSlabelTwo}>
                    Адрес электронной почты
                  </label>
                  <input
                    className={style.CONTACTSinputTwo}
                    placeholder="например, jusan@gmail.com"
                    {...register("Email")}
                  ></input>
                </div>
                <div className={style.CONTACTSContainerThree}>
                  <label className={style.CONTACTSlabelTwo}>
                    Контактный - ФИО (родственника и/или знакомого)
                  </label>
                  <input
                    className={style.CONTACTSinputTwo}
                    placeholder="например, Баглан Данов"
                    {...register("RelativeContactName")}
                  ></input>
                </div>
                <div className={style.CONTACTSContainerThree}>
                  <label className={style.CONTACTSlabelTwo}>
                    Контактный - номер телефона (родственника и/или знакомого)
                  </label>
                  <input
                    className={style.CONTACTSinputTwo}
                    placeholder="например, +7-777-555-6677"
                    {...register("RelativeContactNumber")}
                  ></input>
                </div>
                <div className={style.CONTACTSContainerThree}>
                  <label className={style.CONTACTSlabelTwo}>
                    Контактный - степень родства (родственника и/или знакомого)
                  </label>
                  <input
                    className={style.CONTACTSinputTwo}
                    placeholder="например, отец"
                    {...register("RelativeContactType")}
                  ></input>
                </div>
              </div>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="Пожалуйста укажите актуальные контактные данные по которым отдел кадров Jusan сможет установить контакт с Вами и Вашим ближайшим контактным лицом.  Контактные данные будут использоваться для рабочих и экстренных случаев"
              ></img>
            </div>
            <div className={style.HOMEContainer}>
              <label className={style.HOMElabel}>Местожительство</label>
              <div className={style.HOMEContainerTwo}>
                <label className={style.HOMEContainerTwoLabel}>
                  Адрес постоянной регистрации
                </label>
                <div className={style.HOMEContainerThree}>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Город
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Караганда"
                      {...register("CityRegistration")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Область
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Карагандинская"
                      {...register("StateRegistration")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Район
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Казыбекбийский"
                      {...register("AreaRegistration")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Улица
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Степная"
                      {...register("StreetRegistration")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>Дом</label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 1"
                      {...register("BuildingRegistration")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Корпус
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, А1"
                      {...register("BlockRegistration")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Квартира
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 101"
                      {...register("ApartmentRegistration")}
                    ></input>
                  </div>
                </div>
                <label className={style.HOMEContainerTwoLabel}>
                  Адрес фактического проживания
                </label>
                <div className={style.HOMEContainerFive} style={{}}>
                  <input type="checkbox"></input>
                  <label className={style.HOMEContainerTwoLabel}>
                    Cовпадает с адресом постоянной регистрации
                  </label>
                </div>
                <div className={style.HOMEContainerThree}>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Город
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Караганда"
                      {...register("CityRegistrationFactual")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Область
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Карагандинская"
                      {...register("StateRegistrationFactual")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Район
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Казыбекбийский"
                      {...register("AreaRegistrationFactual")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Улица
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Степная"
                      {...register("StreetRegistrationFactual")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>Дом</label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 1"
                      {...register("BuildingRegistrationFactual")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Корпус
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, А1"
                      {...register("BlockRegistrationFactual")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Квартира
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 101"
                      {...register("ApartmentRegistrationFactual")}
                    ></input>
                  </div>
                </div>
              </div>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="Пожалуйста укажите актуальные контактные данные по которым отдел кадров Jusan сможет установить контакт с Вами и Вашим ближайшим контактным лицом.  Контактные данные будут использоваться для рабочих и экстренных случаев"
              ></img>
            </div>
            <div className={style.UNIVERSITYContainer}>
              <label className={style.UNIVERSITYlabel}>
                Образование (в том числе неоконченное)
              </label>
              <div className={style.UNIVERSITYSubContainer}>
                {universities.map(
                  ({
                    start,
                    end,
                    major,
                    universityname,
                    attendance,
                    degree,
                  }) => {
                    return (
                      <div className={style.UNIVERSITYContainerTwo}>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Дата начала обучения
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, 01-01-1990"
                            value={start}
                            {...register(`UniversityStart`)}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Дата конца обучения
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, 01-01-1994"
                            value={end}
                            {...register("UniversityEnd")}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Полное название учебного заведения
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, Назарбаев Университет"
                            value={universityname}
                            {...register("UniversityName")}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Специальность
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, информатика"
                            value={major}
                            {...register("UniversityMajor")}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Форма обучения
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, очная"
                            value={attendance}
                            {...register("UniversityAttendance")}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Квалификация
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, бакалавр"
                            value={degree}
                            {...register("UniversityDegree")}
                          ></input>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              <img
                src={question}
                alt=""
                className={style.hint}
                title="Пожалуйста укажите актуальные контактные данные по которым отдел кадров Jusan сможет установить контакт с Вами и Вашим ближайшим контактным лицом.  Контактные данные будут использоваться для рабочих и экстренных случаев"
              ></img>
            </div>
            <button
              type="button"
              onClick={() =>
                setUniversities((universities) => [
                  ...universities,
                  defaultUniversity,
                ])
              }
            >
              Добавить
            </button>
          </div>
          <input type="submit" />

          <div>
            <label></label>
            <input></input>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserMainForm;
