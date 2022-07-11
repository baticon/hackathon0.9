import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./userMainForm.module.css";
import question from "../media/question.png";
import React, { useState } from "react";
import Select from "react-select";
import { useForm, useFieldArray } from "react-hook-form";

//use https://react-hook-form.com/

// <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />

const defaultUniversity = {
  start: null,
  end: null,
  universityname: null,
  major: null,
  attendance: null,
  degree: null,
};

const defaultCourse = {
  end: null,
  duration: null,
  coursename: null,
  type: null,
  degree: null,
};

const defaultChild = {
  name: null,
  dob: null,
  phone: null,
  place: null,
};

const defaultRelative = {
  relationship: null,
  name: null,
  dob: null,
  place: null,
  title: null,
  home: null,
  phone: null,
};

const defaultCommerceOrg = {
  name: null,
  inn: null,
  address: null,
  type: null,
  phone: null,
};

const defaultJusanRelative = {
  relationship: null,
  name: null,
  department: null,
  title: null,
};

const defaultCar = {
  model: null,
  year: null,
  number: null,
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const UserMainForm = () => {
  const [universities, setUniversities] = useState([defaultUniversity]);
  const [courses, setCourses] = useState([defaultCourse]);
  const [children, setChildren] = useState([defaultChild]);
  const [relatives, setRelatives] = useState([defaultRelative]);
  const [commerceOrg, setCommerceOrg] = useState([defaultCommerceOrg]);
  const [jusanRelatives, setJusanRelatives] = useState([defaultJusanRelative]);
  const [cars, setCars] = useState([defaultCar]);

  const { control, register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const { fields, append, remove } = useFieldArray({
    control,
    name: `items`,
  });

  const [nationality, setNationality] = useState("");

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
              {/* <Select
                options={options}
                className={style.NATIONALITYinput}
                control={control}
                onChange={(choice) => setNationality(choice)}
              /> */}
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
                  (
                    { start, end, major, universityname, attendance, degree },
                    index
                  ) => {
                    return (
                      <div
                        className={style.UNIVERSITYContainerTwo}
                        key={universities.id}
                      >
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Дата начала обучения
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, 01-01-1990"
                            value={start}
                            {...register(`UniversityStart.${index}`)}
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
                            {...register(`UniversityEnd.${index}`)}
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
                            {...register(`UniversityName.${index}`)}
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
                            {...register(`UniversityMajor.${index}`)}
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
                            {...register(`UniversityAttendance.${index}`)}
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
                            {...register(`UniversityDegree.${index}`)}
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
                title="Пожалуйста укажите места высшего и среднеспециального образования, которые Вы окончили."
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
              Добавить университет
            </button>

            <div className={style.UNIVERSITYContainer}>
              <label className={style.UNIVERSITYlabel}>
                Специальные курсы, школы, стажировки, семинары
              </label>
              <div className={style.UNIVERSITYSubContainer}>
                {courses.map(
                  ({ end, duration, coursename, type, degree }, index) => {
                    return (
                      <div
                        className={style.UNIVERSITYContainerTwo}
                        key={courses.id}
                      >
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Год окончания
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, 1990"
                            value={end}
                            {...register(`CourseEnd.${index}`)}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Длительность обучения
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, 1 год"
                            value={duration}
                            {...register(`CourseDuration.${index}`)}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Полное наименование курсов
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, Курсы инженерной квалификации"
                            value={coursename}
                            {...register(`CourseName.${index}`)}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Специальность
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например,инженер"
                            value={type}
                            {...register(`CourseType.${index}`)}
                          ></input>
                        </div>
                        <div className={style.UNIVERSITYContainerThree}>
                          <label className={style.UNIVERSITYlabelTwo}>
                            Учёная степень, сертификаты
                          </label>
                          <input
                            className={style.UNIVERSITYinputTwo}
                            placeholder="например, разряд/грейд"
                            value={degree}
                            {...register(`CourseGrade.${index}`)}
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
                title="Пожалуйста укажите курсы"
              ></img>
            </div>
            <button
              type="button"
              onClick={() =>
                setCourses((courses) => [...courses, defaultCourse])
              }
            >
              Добавить курс
            </button>
            <div className={style.HOMEContainer}>
              <label className={style.HOMElabel}>
                Укажите предшествующие 3 (три) места работы в обратном
                хронологическом порядке, начиная с последнего или действующего
                места работы
              </label>
              <div className={style.HOMEContainerTwo}>
                <label className={style.HOMEContainerTwoLabel}>
                  Последнее (3/3) место работы
                </label>
                <div className={style.HOMEContainerThree}>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Начало рабочего периода
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 01-1990"
                      {...register("WorkStart1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Конец рабочего периода
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 01-1991"
                      {...register("WorkEnd1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Полное название организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, АО First Heartland Jusan Bank"
                      {...register("WorkName1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Вид деятельности организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, банкинг и финансы"
                      {...register("WorkType1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Адрес организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Кабанбай Батыра 205"
                      {...register("WorkAddress1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, +7-7172-777-888"
                      {...register("WorkPhone1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Наименование должности
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, бухгалтер"
                      {...register("WorkTitle1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      ФИО руководителя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Рахимбаев Талгат Ильясович"
                      {...register("WorkManager1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон руководителя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, например, +7-7172-777-888"
                      {...register("WorkManagerPhone1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Причина увольнения
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, по собственному желанию"
                      {...register("WorkLeaveReason1")}
                    ></input>
                  </div>
                </div>
                <label className={style.HOMEContainerTwoLabel}>
                  2/3 место работы
                </label>
                <div className={style.HOMEContainerThree}>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Начало рабочего периода
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 01-1990"
                      {...register("WorkStart2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Конец рабочего периода
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 01-1991"
                      {...register("WorkEnd2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Полное название организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, АО First Heartland Jusan Bank"
                      {...register("WorkName2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Вид деятельности организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, банкинг и финансы"
                      {...register("WorkType2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Адрес организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Кабанбай Батыра 205"
                      {...register("WorkAddress2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, +7-7172-777-888"
                      {...register("WorkPhone2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Наименование должности
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, бухгалтер"
                      {...register("WorkTitle2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      ФИО руководителя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Рахимбаев Талгат Ильясович"
                      {...register("WorkManager2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон руководителя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, например, +7-7172-777-888"
                      {...register("WorkManagerPhone2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Причина увольнения
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, по собственному желанию"
                      {...register("WorkLeaveReason2")}
                    ></input>
                  </div>
                </div>
                <label className={style.HOMEContainerTwoLabel}>
                  1/3 место работы
                </label>
                <div className={style.HOMEContainerThree}>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Начало рабочего периода
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 01-1990"
                      {...register("WorkStart3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Конец рабочего периода
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 01-1991"
                      {...register("WorkEnd3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Полное название организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, АО First Heartland Jusan Bank"
                      {...register("WorkName3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Вид деятельности организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, банкинг и финансы"
                      {...register("WorkType3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Адрес организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Кабанбай Батыра 205"
                      {...register("WorkAddress3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, +7-7172-777-888"
                      {...register("WorkPhone3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Наименование должности
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, бухгалтер"
                      {...register("WorkTitle3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      ФИО руководителя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Рахимбаев Талгат Ильясович"
                      {...register("WorkManager3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон руководителя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, например, +7-7172-777-888"
                      {...register("WorkManagerPhone3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Причина увольнения
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, по собственному желанию"
                      {...register("WorkLeaveReason3")}
                    ></input>
                  </div>
                </div>
              </div>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="Пожалуйста укажите предшествующие 3 (три) места работы в обратном хронологическом порядке, начиная с последнего или действующего места работы"
              ></img>
            </div>
            <div className={style.HOMEContainer}>
              <label className={style.HOMElabel}>
                Укажите не менее 3 (трёх) лиц, которые могут дать Вам
                профессиональную рекомендацию (бывшие и/или настоящие
                руководители, коллеги)
              </label>
              <div className={style.HOMEContainerTwo}>
                <label className={style.HOMEContainerTwoLabel}>
                  Первый рекомендатель
                </label>
                <div className={style.HOMEContainerThree}>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      ФИО рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Рахимбаев Талгат Ильясович"
                      {...register("RecommenderName1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Место работы рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, АО First Heartland Jusan Bank"
                      {...register("RecommenderWork1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Должность рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, бухгалтер"
                      {...register("RecommenderTitle1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, например, +7-7172-777-888"
                      {...register("RecommenderPhone1")}
                    ></input>
                  </div>
                </div>
                <label className={style.HOMEContainerTwoLabel}>
                  Второй рекомендатель
                </label>
                <div className={style.HOMEContainerThree}>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      ФИО рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Рахимбаев Талгат Ильясович"
                      {...register("RecommenderName2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Место работы рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, АО First Heartland Jusan Bank"
                      {...register("RecommenderWork2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Должность рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, бухгалтер"
                      {...register("RecommenderTitle2")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, например, +7-7172-777-888"
                      {...register("RecommenderPhone2")}
                    ></input>
                  </div>
                </div>
                <label className={style.HOMEContainerTwoLabel}>
                  Третий рекомендатель
                </label>
                <div className={style.HOMEContainerThree}>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      ФИО рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Рахимбаев Талгат Ильясович"
                      {...register("RecommenderName3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Место работы рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, АО First Heartland Jusan Bank"
                      {...register("RecommenderWork3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Должность рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, бухгалтер"
                      {...register("RecommenderTitle3")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Телефон рекомендателя
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, например, +7-7172-777-888"
                      {...register("RecommenderPhone3")}
                    ></input>
                  </div>
                </div>
              </div>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="Пожалуйста укажите не менее 3 (трёх) лиц, которые могут дать Вам профессиональную рекомендацию (бывшие и/или настоящие руководители, коллеги)"
              ></img>
            </div>
            <div className={style.NATIONALITYContainer}>
              <label className={style.NATIONALITYlabel}>
                Семейное положение
              </label>
              <select
                className={style.NATIONALITYinput}
                {...register("RelationshipStatus")}
              >
                <option value="">выберите статус</option>
                <option value="Зарегистрированный брак">
                  Зарегистрированный брак
                </option>
                <option value="Не состою в браке">Не состою в браке</option>
                <option value="Незарегистрированный брак">
                  Незарегистрированный брак
                </option>
                <option value="В разводе">В разводе</option>
                <option value="Вдова (ец)">Вдова (ец)</option>
              </select>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="Пожалуйста укажите семейное положение"
              ></img>
            </div>
          </div>
          <div className={style.HOMEContainer}>
            <label className={style.HOMElabel}>Супруг (-а)</label>
            <div className={style.HOMEContainerTwo}>
              <div className={style.HOMEContainerThree}>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    ФИО супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Рахимбаев Талгат Ильясович"
                    {...register("SpouseName")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Дата рождения супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 01-01-1990"
                    {...register("SpouseDOB")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Место работы супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, АО First Heartland Jusan Bank"
                    {...register("SpouseWork")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Должность супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, бухгалтер"
                    {...register("SpouseWorkTitle")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Адрес места жительства супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Кабанбай Батыра 205"
                    {...register("SpouseAddress")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Гражданство супруга (-и)
                  </label>
                  <select
                    className={style.CITIZENSHIPinput}
                    {...register("SpouseNationality")}
                  >
                    <option value="">выберите гражданство</option>
                    <option value="Казахстан">Казахстан</option>
                    <option value="Россия">Россия</option>
                    <option value="беженец">беженец</option>
                  </select>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Контакты супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, +7-777-777-7777"
                    {...register("SpousePhone")}
                  ></input>
                </div>
              </div>
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите актуальные данные семейного положения"
            ></img>
          </div>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>Дети</label>
            <div className={style.UNIVERSITYSubContainer}>
              {children.map(({ name, dob, phone, place }, index) => {
                return (
                  <div
                    className={style.UNIVERSITYContainerTwo}
                    key={children.id}
                  >
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Муса Темирлан Аскарович"
                        value={name}
                        {...register(`ChildName.${index}`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Дата рождения
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 01-01-1994"
                        value={dob}
                        {...register(`ChildDOB.${index}`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Телефон
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, +7-777-777-7777"
                        value={phone}
                        {...register(`ChildPhone.${index}`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Место учебы, работы
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, информатика"
                        value={place}
                        {...register(`ChildPlace.${index}`)}
                      ></input>
                    </div>
                  </div>
                );
              })}
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите детали детей"
            ></img>
          </div>
          <button
            type="button"
            onClick={() =>
              setChildren((children) => [...children, defaultChild])
            }
          >
            Добавить ребенка
          </button>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Ближайшие родственники
            </label>
            <div className={style.UNIVERSITYSubContainer}>
              {relatives.map(
                (
                  { relationship, name, dob, place, title, home, phone },
                  index
                ) => {
                  return (
                    <div
                      className={style.UNIVERSITYContainerTwo}
                      key={relatives.id}
                    >
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Степень родства
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, тесть"
                          value={relationship}
                          {...register(`RelativeRelationship.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, Айдынов Аскар Макарович"
                          value={name}
                          {...register(`RelativeName.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Дата рождения
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, 01-01-1994"
                          value={dob}
                          {...register(`RelativeDOB.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Место работы
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, АО First Heartland Jusan Bank"
                          value={place}
                          {...register(`RelativePlace.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Должность
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, бухгалтер"
                          value={title}
                          {...register(`RelativeTitle.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Домашний адрес
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, Кирова 21/1 горож Нур-Султан"
                          value={home}
                          {...register(`RelativeAddress.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Телефон
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, +7-777-777-7777"
                          value={phone}
                          {...register(`RelativePhone.${index}`)}
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
              title="Пожалуйста укажите детали родственников"
            ></img>
          </div>
          <button
            type="button"
            onClick={() =>
              setRelatives((relatives) => [...relatives, defaultRelative])
            }
          >
            Добавить родственника
          </button>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Дополнительная информация
            </label>
            <div className={style.UNIVERSITYSubContainer}>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Являетесь ли Вы руководителем/учредителем (соучредителем),
                  членом совета директоров и/или правления коммерческих
                  организаций (ИП/ТОО)
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, да/нет"
                  {...register(`CommerceOrgAnswer`)}
                ></input>
              </div>
              {commerceOrg.map(
                ({ answer, name, inn, address, type, phone }, index) => {
                  return (
                    <div
                      className={style.UNIVERSITYContainerTwo}
                      key={commerceOrg.id}
                    >
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Наименование
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, ТОО Балтех"
                          value={name}
                          {...register(`CommerceOrgName.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Идентификационный Номер Налогоплательщика
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, 123456789012"
                          value={inn}
                          {...register(`CommerceOrgINN.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Адрес
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, Шевченко 51, город Шымкент"
                          value={address}
                          {...register(`CommerceOrgAddress.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Вид деятельности
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, строительство"
                          value={type}
                          {...register(`CommerceOrgType.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Телефон
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, +7-777-777-7777"
                          value={phone}
                          {...register(`CommerceOrgPhone.${index}`)}
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
              title="Пожалуйста укажите соучредительские детали"
            ></img>
          </div>
          <button
            type="button"
            onClick={() =>
              setCommerceOrg((commerceOrg) => [
                ...commerceOrg,
                defaultCommerceOrg,
              ])
            }
          >
            Добавить организацию
          </button>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Дополнительная информация
            </label>
            <div className={style.UNIVERSITYSubContainer}>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Имеете ли Вы родственников, членов семьи, работающих в АО "
                  Jusan Bank" или связанных с деятельностью АО "Jusan Bank"
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, да/нет"
                  {...register(`JusanRelativeAnswer`)}
                ></input>
              </div>
              {jusanRelatives.map(
                ({ relationship, name, department, title }, index) => {
                  return (
                    <div
                      className={style.UNIVERSITYContainerTwo}
                      key={jusanRelatives.id}
                    >
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Степень родства
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, брат"
                          value={relationship}
                          {...register(`JusanRelativesRelationship.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, Бахытжанов Аскар Иманович"
                          value={name}
                          {...register(`JusanRelativesName.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Подразделение
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, бухгалтерия"
                          value={department}
                          {...register(`JusanRelativesDepartment.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Должность
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, бухгалтер"
                          value={title}
                          {...register(`JusanRelativesTitle.${index}`)}
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
              title="Пожалуйста укажите родственников, членов семьи, работающих в АО Jusan Bank или связанных с деятельностью  АО Jusan Bank"
            ></img>
          </div>
          <button
            type="button"
            onClick={() =>
              setJusanRelatives((jusanRelatives) => [
                ...jusanRelatives,
                defaultJusanRelative,
              ])
            }
          >
            Добавить аффилированное лицо
          </button>

          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Дополнительная информация
            </label>
            <div className={style.UNIVERSITYSubContainer}>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Наличие автомобиля
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, да/нет"
                  {...register(`carAnswer`)}
                ></input>
              </div>
              {cars.map(({ model, year, number }, index) => {
                return (
                  <div className={style.UNIVERSITYContainerTwo} key={cars.id}>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>Модель</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Лада 9"
                        value={model}
                        {...register(`CarModel.${index}`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 1990"
                        value={year}
                        {...register(`CarYear.${index}`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>Номер</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, A88801KZ"
                        value={number}
                        {...register(`CarNumber.${index}`)}
                      ></input>
                    </div>
                  </div>
                );
              })}
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите детали машины"
            ></img>
          </div>
          <button
            type="button"
            onClick={() => setCars((cars) => [...cars, defaultCar])}
          >
            Добавить машину
          </button>

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
