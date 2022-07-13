import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./userMainForm.module.css";
import question from "../media/question.png";
import React, { useEffect, useState, useCallback } from "react";
import Select from "react-select";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";
import { textAlign } from "@mui/system";
import dataUpload from "../services/postData.js";
import dataDownload from "../services/getData.js";

//use https://react-hook-form.com/

// <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const defaultUniversity = {
  start: "",
  end: "",
  universityname: "",
  major: "",
  attendance: "",
  degree: "",
};

const defaultCourse = {
  end: "",
  duration: "",
  coursename: "",
  type: "",
  degree: "",
};

const defaultChild = {
  name: "",
  dob: "",
  phone: "",
  place: "",
};

const defaultRelative = {
  relationship: "",
  name: "",
  dob: "",
  place: "",
  title: "",
  home: "",
  phone: "",
};

const defaultCommerceOrg = {
  name: "",
  inn: "",
  address: "",
  type: "",
  phone: "",
};

const defaultJusanRelative = {
  relationship: "",
  name: "",
  department: "",
  title: "",
};

const defaultCar = {
  model: "",
  year: "",
  number: "",
};

const UserMainForm = () => {
  const navigate = useNavigate();

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const [agree, setAgree] = useState(false);

  const [jusanRelatives, setJusanRelatives] = useState([defaultJusanRelative]);
  const [cars, setCars] = useState([defaultCar]);

  const { control, register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      universityInfoDtos: [defaultUniversity],
      additionalEducationInfoDtos: [defaultCourse],
      childrenInfoDtos: [defaultChild],
      relativesInfoDtos: [defaultRelative],
      additionalWorkingInfoDtos: [defaultCommerceOrg],
      relativesInJusanDtos: [defaultJusanRelative],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    dataUpload(data);
  }; //do fetch to server here to post data

  //get data from backend when user returns to certain page

  const resetAsyncForm = useCallback(async () => {
    const result = await dataDownload();
    console.log(result);
    reset(result);
  }, [reset]);

  useEffect(() => {
    resetAsyncForm();
  }, [resetAsyncForm]);

  const {
    fields: universityFields,
    append: universityAppend,
    remove: universityRemove,
  } = useFieldArray({
    control,
    name: `universityInfoDtos`,
  });

  const {
    fields: courseFields,
    append: courseAppend,
    remove: courseRemove,
  } = useFieldArray({
    control,
    name: `additionalEducationInfoDtos`,
  });

  const {
    fields: childFields,
    append: childAppend,
    remove: childRemove,
  } = useFieldArray({
    control,
    name: `childrenInfoDtos`,
  });

  const {
    fields: relativeFields,
    append: relativeAppend,
    remove: relativeRemove,
  } = useFieldArray({
    control,
    name: `relativesInfoDtos`,
  });

  const {
    fields: commerceFields,
    append: commerceAppend,
    remove: commerceRemove,
  } = useFieldArray({
    control,
    name: `additionalWorkingInfoDtos`,
  });

  const {
    fields: jusanRelativeFields,
    append: jusanRelativeAppend,
    remove: jusanRelativeRemove,
  } = useFieldArray({
    control,
    name: `relativesInJusanDtos`,
  });

  const [boolLivingPlace, setBoolLivingPlace] = useState(false);
  const cityName = watch("permanentRegistrationAddressCity");
  const stateName = watch("permanentRegistrationAddressDistrict");
  const areaName = watch("permanentRegistrationAddressRegion");
  const streetName = watch("permanentRegistrationAddressStreet");
  const buildingName = watch("permanentRegistrationAddressHouseNumber");
  const blockName = watch("permanentRegistrationAddressCorpus");
  const apartmentName = watch("permanentRegistrationAddressApartment");

  function cityNameFunc(boolLivingPlace) {
    if (boolLivingPlace === true) {
      return (
        <input
          value={cityName}
          className={style.HOMEContainerFourInput}
          placeholder="например, Караганда"
          {...register("actualAddressCity")}
        ></input>
      );
    } else {
      return (
        <input
          className={style.HOMEContainerFourInput}
          placeholder="например, Караганда"
          {...register("actualAddressCity")}
        ></input>
      );
    }
  }

  function stateNameFunc(boolLivingPlace) {
    if (boolLivingPlace === true) {
      return (
        <input
          value={stateName}
          className={style.HOMEContainerFourInput}
          placeholder="например, Карагандинская"
          {...register("actualAddressDistrict")}
        ></input>
      );
    } else {
      return (
        <input
          className={style.HOMEContainerFourInput}
          placeholder="например, Карагандинская"
          {...register("actualAddressDistrict")}
        ></input>
      );
    }
  }
  function areaNameFunc(boolLivingPlace) {
    if (boolLivingPlace === true) {
      return (
        <input
          value={areaName}
          className={style.HOMEContainerFourInput}
          placeholder="например, Казыбекбийский"
          {...register("actualAddressRegion")}
        ></input>
      );
    } else {
      return (
        <input
          className={style.HOMEContainerFourInput}
          placeholder="например, Казыбекбийский"
          {...register("actualAddressRegion")}
        ></input>
      );
    }
  }
  function streetNameFunc(boolLivingPlace) {
    if (boolLivingPlace === true) {
      return (
        <input
          value={streetName}
          className={style.HOMEContainerFourInput}
          placeholder="например, Степная"
          {...register("actualAddressStreet")}
        ></input>
      );
    } else {
      return (
        <input
          className={style.HOMEContainerFourInput}
          placeholder="например, Степная"
          {...register("actualAddressStreet")}
        ></input>
      );
    }
  }
  function buildingNameFunc(boolLivingPlace) {
    if (boolLivingPlace === true) {
      return (
        <input
          value={buildingName}
          className={style.HOMEContainerFourInput}
          placeholder="например, 1"
          {...register("actualAddressHouseNumber")}
        ></input>
      );
    } else {
      return (
        <input
          className={style.HOMEContainerFourInput}
          placeholder="например, 1"
          {...register("actualAddressHouseNumber")}
        ></input>
      );
    }
  }
  function blockNameFunc(boolLivingPlace) {
    if (boolLivingPlace === true) {
      return (
        <input
          value={blockName}
          className={style.HOMEContainerFourInput}
          placeholder="например, А1"
          {...register("actualAddressCorpus")}
        ></input>
      );
    } else {
      return (
        <input
          className={style.HOMEContainerFourInput}
          placeholder="например, А1"
          {...register("actualAddressCorpus")}
        ></input>
      );
    }
  }
  function apartmentNameFunc(boolLivingPlace) {
    if (boolLivingPlace === true) {
      return (
        <input
          value={apartmentName}
          className={style.HOMEContainerFourInput}
          placeholder="например, 101"
          {...register("actualAddressApartment")}
        ></input>
      );
    } else {
      return (
        <input
          className={style.HOMEContainerFourInput}
          placeholder="например, 101"
          {...register("actualAddressApartment")}
        ></input>
      );
    }
  }

  const [boolAdditionalInfoToo, setBoolAdditionalInfoToo] = useState(false);
  const [boolADDITIONALINFO, setBoolADDITIONALINFO] = useState(false);
  const [boolCarInfo, setBoolCarInfo] = useState(false);

  return (
    <div>
      <Header />
      <Button
        type="button"
        onClick={() => navigate("/profile")}
        style={{ width: "50%" }}
      >
        Назад в профиль
      </Button>
      <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginTop: "2%" }}>
          <div className={style.IINContainer}>
            <label className={style.IINlabel}>ИИН</label>
            <input
              className={style.IINinput}
              placeholder="например, 900101250050"
              // pattern="^[0-9]{12}$"
              title="ИИН состоит из 12 цифр"
              required="required"
              {...register("iin")}
            ></input>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="ИИН расположен на лицевой стороне удостоверения личности гражданина Республики Казахстан, ниже даты рождения в виде комбинации из 12-ти цифр, в паспорте гражданина Республики Казахстан ИИН указан на 2 странице.  Иностранцы и лица без гражданства, постоянно проживающие в Казахстане, у которых на лицевой стороне вида на жительство иностранца в Республике Казахстан ниже даты рождения или на 2 странице удостоверения лица без гражданства ИИН не указан, должны обратиться в органы внутренних дел по месту пребывания для переоформления документов."
            ></img>
          </div>
          <div className={style.IINContainer}>
            <label className={style.IINlabel}>ФИО</label>
            <input
              className={style.IINinput}
              placeholder="например, Абишева Айгуль Муратовна"
              pattern="([А-ЯЁ][а-яё]+[\-\s]?){3,}"
              title="Введите полное имя"
              required="required"
              {...register("oldSurname")}
            ></input>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="ИИН расположен на лицевой стороне удостоверения личности гражданина Республики Казахстан, ниже даты рождения в виде комбинации из 12-ти цифр, в паспорте гражданина Республики Казахстан ИИН указан на 2 странице.  Иностранцы и лица без гражданства, постоянно проживающие в Казахстане, у которых на лицевой стороне вида на жительство иностранца в Республике Казахстан ниже даты рождения или на 2 странице удостоверения лица без гражданства ИИН не указан, должны обратиться в органы внутренних дел по месту пребывания для переоформления документов."
            ></img>
          </div>

          <div className={style.IINContainer}>
            <label className={style.IINlabel}>
              Число, месяц и год рождения
            </label>
            <input
              className={style.IINinput}
              type="date"
              {...register("dateOfBirthday")}
            ></input>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Дата рождения в формате ММ-ЧЧ-ГГГГ"
            ></img>
          </div>
          <div className={style.IINContainer}>
            <label className={style.IINlabel}>Место рождения</label>
            <input
              className={style.IINinput}
              placeholder="например, Казахстан, Астана"
              {...register("placeOfBirth")}
            ></input>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите страну и город (или село/деревню)"
            ></img>
          </div>
          <div className={style.IINContainer}>
            <label className={style.IINlabel}>Национальность</label>
            <select
              className={style.NATIONALITYinput}
              {...register("nationality")}
            >
              <option value="">выберите национальность</option>
              <option value="AF">AFGHANISTAN</option>
              <option value="AL">ALBANIA</option>
              <option value="DZ">ALGERIA</option>
              <option value="AS">AMERICAN SAMOA</option>
              <option value="AD">ANDORRA</option>
              <option value="AO">ANGOLA</option>
              <option value="AI">ANGUILLA</option>
              <option value="AQ">ANTARCTICA</option>
              <option value="AG">ANTIGUA AND BARBUDA</option>
              <option value="AR">ARGENTINA</option>
              <option value="AM">ARMENIA</option>
              <option value="AW">ARUBA</option>
              <option value="AU">AUSTRALIA</option>
              <option value="AT">AUSTRIA</option>
              <option value="AZ">AZERBAIJAN</option>
              <option value="BS">BAHAMAS</option>
              <option value="BH">BAHRAIN</option>
              <option value="BD">BANGLADESH</option>
              <option value="BB">BARBADOS</option>
              <option value="BY">BELARUS</option>
              <option value="BE">BELGIUM</option>
              <option value="BZ">BELIZE</option>
              <option value="BJ">BENIN</option>
              <option value="BM">BERMUDA</option>
              <option value="BT">BHUTAN</option>
              <option value="BO">BOLIVIA</option>
              <option value="BA">BOSNIA AND HERZEGOWINA</option>
              <option value="BW">BOTSWANA</option>
              <option value="BV">BOUVET ISLAND</option>
              <option value="BR">BRAZIL</option>
              <option value="IO">BRITISH INDIAN OCEAN TERRITORY</option>
              <option value="BN">BRUNEI DARUSSALAM</option>
              <option value="BG">BULGARIA</option>
              <option value="BF">BURKINA FASO</option>
              <option value="BI">BURUNDI</option>
              <option value="KH">CAMBODIA</option>
              <option value="CM">CAMEROON</option>
              <option value="CA">CANADA</option>
              <option value="CV">CAPE VERDE</option>
              <option value="KY">CAYMAN ISLANDS</option>
              <option value="CF">CENTRAL AFRICAN REPUBLIC</option>
              <option value="TD">CHAD</option>
              <option value="CL">CHILE</option>
              <option value="CN">CHINA</option>
              <option value="CX">CHRISTMAS ISLAND</option>
              <option value="CO">COLOMBIA</option>
              <option value="KM">COMOROS</option>
              <option value="CK">COOK ISLANDS</option>
              <option value="CR">COSTA RICA</option>
              <option value="CI">COTE D'IVOIRE</option>
              <option value="CU">CUBA</option>
              <option value="CY">CYPRUS</option>
              <option value="CZ">CZECH REPUBLIC</option>
              <option value="DK">DENMARK</option>
              <option value="DJ">DJIBOUTI</option>
              <option value="DM">DOMINICA</option>
              <option value="DO">DOMINICAN REPUBLIC</option>
              <option value="EC">ECUADOR</option>
              <option value="EG">EGYPT</option>
              <option value="SV">EL SALVADOR</option>
              <option value="GQ">EQUATORIAL GUINEA</option>
              <option value="ER">ERITREA</option>
              <option value="EE">ESTONIA</option>
              <option value="ET">ETHIOPIA</option>
              <option value="FO">FAROE ISLANDS</option>
              <option value="FJ">FIJI</option>
              <option value="FI">FINLAND</option>
              <option value="FR">FRANCE</option>
              <option value="GF">FRENCH GUIANA</option>
              <option value="PF">FRENCH POLYNESIA</option>
              <option value="TF">FRENCH SOUTHERN TERRITORIES</option>
              <option value="GA">GABON</option>
              <option value="GM">GAMBIA</option>
              <option value="GE">GEORGIA</option>
              <option value="DE">GERMANY</option>
              <option value="GH">GHANA</option>
              <option value="GI">GIBRALTAR</option>
              <option value="GR">GREECE</option>
              <option value="GL">GREENLAND</option>
              <option value="GD">GRENADA</option>
              <option value="GP">GUADELOUPE</option>
              <option value="GU">GUAM</option>
              <option value="GT">GUATEMALA</option>
              <option value="GN">GUINEA</option>
              <option value="GW">GUINEA-BISSAU</option>
              <option value="GY">GUYANA</option>
              <option value="HT">HAITI</option>
              <option value="HM">HEARD AND MC DONALD ISLANDS</option>
              <option value="HN">HONDURAS</option>
              <option value="HK">HONG KONG</option>
              <option value="HU">HUNGARY</option>
              <option value="IS">ICELAND</option>
              <option value="IN">INDIA</option>
              <option value="ID">INDONESIA</option>
              <option value="IQ">IRAQ</option>
              <option value="IE">IRELAND</option>
              <option value="IL">ISRAEL</option>
              <option value="IT">ITALY</option>
              <option value="JM">JAMAICA</option>
              <option value="JP">JAPAN</option>
              <option value="JO">JORDAN</option>
              <option value="KZ">KAZAKHSTAN</option>
              <option value="KE">KENYA</option>
              <option value="KI">KIRIBATI</option>
              <option value="KW">KUWAIT</option>
              <option value="KG">KYRGYZSTAN</option>
              <option value="LA">LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>
              <option value="LV">LATVIA</option>
              <option value="LB">LEBANON</option>
              <option value="LS">LESOTHO</option>
              <option value="LR">LIBERIA</option>
              <option value="LY">LIBYAN ARAB JAMAHIRIYA</option>
              <option value="LI">LIECHTENSTEIN</option>
              <option value="LT">LITHUANIA</option>
              <option value="LU">LUXEMBOURG</option>
              <option value="MO">MACAU</option>
              <option value="MG">MADAGASCAR</option>
              <option value="MW">MALAWI</option>
              <option value="MY">MALAYSIA</option>
              <option value="MV">MALDIVES</option>
              <option value="ML">MALI</option>
              <option value="MT">MALTA</option>
              <option value="MH">MARSHALL ISLANDS</option>
              <option value="MQ">MARTINIQUE</option>
              <option value="MR">MAURITANIA</option>
              <option value="MU">MAURITIUS</option>
              <option value="YT">MAYOTTE</option>
              <option value="MX">MEXICO</option>
              <option value="MC">MONACO</option>
              <option value="MN">MONGOLIA</option>
              <option value="MS">MONTSERRAT</option>
              <option value="MA">MOROCCO</option>
              <option value="MZ">MOZAMBIQUE</option>
              <option value="MM">MYANMAR</option>
              <option value="NA">NAMIBIA</option>
              <option value="NR">NAURU</option>
              <option value="NP">NEPAL</option>
              <option value="NL">NETHERLANDS</option>
              <option value="AN">NETHERLANDS ANTILLES</option>
              <option value="NC">NEW CALEDONIA</option>
              <option value="NZ">NEW ZEALAND</option>
              <option value="NI">NICARAGUA</option>
              <option value="NE">NIGER</option>
              <option value="NG">NIGERIA</option>
              <option value="NU">NIUE</option>
              <option value="NF">NORFOLK ISLAND</option>
              <option value="MP">NORTHERN MARIANA ISLANDS</option>
              <option value="NO">NORWAY</option>
              <option value="OM">OMAN</option>
              <option value="PK">PAKISTAN</option>
              <option value="PW">PALAU</option>
              <option value="PA">PANAMA</option>
              <option value="PG">PAPUA NEW GUINEA</option>
              <option value="PY">PARAGUAY</option>
              <option value="PE">PERU</option>
              <option value="PH">PHILIPPINES</option>
              <option value="PN">PITCAIRN</option>
              <option value="PL">POLAND</option>
              <option value="PT">PORTUGAL</option>
              <option value="PR">PUERTO RICO</option>
              <option value="QA">QATAR</option>
              <option value="RE">REUNION</option>
              <option value="RO">ROMANIA</option>
              <option value="RU">RUSSIAN FEDERATION</option>
              <option value="RW">RWANDA</option>
              <option value="SH">SAINT HELENA</option>
              <option value="KN">SAINT KITTS AND NEVIS</option>
              <option value="LC">SAINT LUCIA</option>
              <option value="PM">SAINT PIERRE AND MIQUELON</option>
              <option value="VC">SAINT VINCENT AND THE GRENADINES</option>
              <option value="WS">SAMOA</option>
              <option value="SM">SAN MARINO</option>
              <option value="ST">SAO TOME AND PRINCIPE</option>
              <option value="SA">SAUDI ARABIA</option>
              <option value="SN">SENEGAL</option>
              <option value="CS">SERBIA AND MONTENEGRO</option>
              <option value="SC">SEYCHELLES</option>
              <option value="SL">SIERRA LEONE</option>
              <option value="SG">SINGAPORE</option>
              <option value="SK">SLOVAKIA</option>
              <option value="SI">SLOVENIA</option>
              <option value="SB">SOLOMON ISLANDS</option>
              <option value="SO">SOMALIA</option>
              <option value="ZA">SOUTH AFRICA</option>
              <option value="GS">
                SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS
              </option>
              <option value="ES">SPAIN</option>
              <option value="LK">SRI LANKA</option>
              <option value="SD">SUDAN</option>
              <option value="SR">SURINAME</option>
              <option value="SJ">SVALBARD AND JAN MAYEN ISLANDS</option>
              <option value="SZ">SWAZILAND</option>
              <option value="SE">SWEDEN</option>
              <option value="CH">SWITZERLAND</option>
              <option value="SY">SYRIAN ARAB REPUBLIC</option>
              <option value="TW">TAIWAN</option>
              <option value="TJ">TAJIKISTAN</option>
              <option value="TH">THAILAND</option>
              <option value="TL">TIMOR-LESTE</option>
              <option value="TG">TOGO</option>
              <option value="TK">TOKELAU</option>
              <option value="TO">TONGA</option>
              <option value="TT">TRINIDAD AND TOBAGO</option>
              <option value="TN">TUNISIA</option>
              <option value="TR">TURKEY</option>
              <option value="TM">TURKMENISTAN</option>
              <option value="TC">TURKS AND CAICOS ISLANDS</option>
              <option value="TV">TUVALU</option>
              <option value="UG">UGANDA</option>
              <option value="UA">UKRAINE</option>
              <option value="AE">UNITED ARAB EMIRATES</option>
              <option value="GB">UNITED KINGDOM</option>
              <option value="US">UNITED STATES</option>
              <option value="UM">UNITED STATES MINOR OUTLYING ISLANDS</option>
              <option value="UY">URUGUAY</option>
              <option value="UZ">UZBEKISTAN</option>
              <option value="VU">VANUATU</option>
              <option value="VE">VENEZUELA</option>
              <option value="VN">VIET NAM</option>
              <option value="WF">WALLIS AND FUTUNA ISLANDS</option>
              <option value="EH">WESTERN SAHARA</option>
              <option value="YE">YEMEN</option>
              <option value="ZM">ZAMBIA</option>
              <option value="ZW">ZIMBABWE</option>
            </select>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите национальность"
            ></img>
          </div>
          <div className={style.IINContainer}>
            <label className={style.IINlabel}>Гражданство</label>
            <select
              className={style.CITIZENSHIPinput}
              {...register("citizenship")}
            >
              <option value="">выберите гражданство</option>
              <option value="AF">AFGHANISTAN</option>
              <option value="AL">ALBANIA</option>
              <option value="DZ">ALGERIA</option>
              <option value="AS">AMERICAN SAMOA</option>
              <option value="AD">ANDORRA</option>
              <option value="AO">ANGOLA</option>
              <option value="AI">ANGUILLA</option>
              <option value="AQ">ANTARCTICA</option>
              <option value="AG">ANTIGUA AND BARBUDA</option>
              <option value="AR">ARGENTINA</option>
              <option value="AM">ARMENIA</option>
              <option value="AW">ARUBA</option>
              <option value="AU">AUSTRALIA</option>
              <option value="AT">AUSTRIA</option>
              <option value="AZ">AZERBAIJAN</option>
              <option value="BS">BAHAMAS</option>
              <option value="BH">BAHRAIN</option>
              <option value="BD">BANGLADESH</option>
              <option value="BB">BARBADOS</option>
              <option value="BY">BELARUS</option>
              <option value="BE">BELGIUM</option>
              <option value="BZ">BELIZE</option>
              <option value="BJ">BENIN</option>
              <option value="BM">BERMUDA</option>
              <option value="BT">BHUTAN</option>
              <option value="BO">BOLIVIA</option>
              <option value="BA">BOSNIA AND HERZEGOWINA</option>
              <option value="BW">BOTSWANA</option>
              <option value="BV">BOUVET ISLAND</option>
              <option value="BR">BRAZIL</option>
              <option value="IO">BRITISH INDIAN OCEAN TERRITORY</option>
              <option value="BN">BRUNEI DARUSSALAM</option>
              <option value="BG">BULGARIA</option>
              <option value="BF">BURKINA FASO</option>
              <option value="BI">BURUNDI</option>
              <option value="KH">CAMBODIA</option>
              <option value="CM">CAMEROON</option>
              <option value="CA">CANADA</option>
              <option value="CV">CAPE VERDE</option>
              <option value="KY">CAYMAN ISLANDS</option>
              <option value="CF">CENTRAL AFRICAN REPUBLIC</option>
              <option value="TD">CHAD</option>
              <option value="CL">CHILE</option>
              <option value="CN">CHINA</option>
              <option value="CX">CHRISTMAS ISLAND</option>
              <option value="CO">COLOMBIA</option>
              <option value="KM">COMOROS</option>
              <option value="CK">COOK ISLANDS</option>
              <option value="CR">COSTA RICA</option>
              <option value="CI">COTE D'IVOIRE</option>
              <option value="CU">CUBA</option>
              <option value="CY">CYPRUS</option>
              <option value="CZ">CZECH REPUBLIC</option>
              <option value="DK">DENMARK</option>
              <option value="DJ">DJIBOUTI</option>
              <option value="DM">DOMINICA</option>
              <option value="DO">DOMINICAN REPUBLIC</option>
              <option value="EC">ECUADOR</option>
              <option value="EG">EGYPT</option>
              <option value="SV">EL SALVADOR</option>
              <option value="GQ">EQUATORIAL GUINEA</option>
              <option value="ER">ERITREA</option>
              <option value="EE">ESTONIA</option>
              <option value="ET">ETHIOPIA</option>
              <option value="FO">FAROE ISLANDS</option>
              <option value="FJ">FIJI</option>
              <option value="FI">FINLAND</option>
              <option value="FR">FRANCE</option>
              <option value="GF">FRENCH GUIANA</option>
              <option value="PF">FRENCH POLYNESIA</option>
              <option value="TF">FRENCH SOUTHERN TERRITORIES</option>
              <option value="GA">GABON</option>
              <option value="GM">GAMBIA</option>
              <option value="GE">GEORGIA</option>
              <option value="DE">GERMANY</option>
              <option value="GH">GHANA</option>
              <option value="GI">GIBRALTAR</option>
              <option value="GR">GREECE</option>
              <option value="GL">GREENLAND</option>
              <option value="GD">GRENADA</option>
              <option value="GP">GUADELOUPE</option>
              <option value="GU">GUAM</option>
              <option value="GT">GUATEMALA</option>
              <option value="GN">GUINEA</option>
              <option value="GW">GUINEA-BISSAU</option>
              <option value="GY">GUYANA</option>
              <option value="HT">HAITI</option>
              <option value="HM">HEARD AND MC DONALD ISLANDS</option>
              <option value="HN">HONDURAS</option>
              <option value="HK">HONG KONG</option>
              <option value="HU">HUNGARY</option>
              <option value="IS">ICELAND</option>
              <option value="IN">INDIA</option>
              <option value="ID">INDONESIA</option>
              <option value="IQ">IRAQ</option>
              <option value="IE">IRELAND</option>
              <option value="IL">ISRAEL</option>
              <option value="IT">ITALY</option>
              <option value="JM">JAMAICA</option>
              <option value="JP">JAPAN</option>
              <option value="JO">JORDAN</option>
              <option value="KZ">KAZAKHSTAN</option>
              <option value="KE">KENYA</option>
              <option value="KI">KIRIBATI</option>
              <option value="KW">KUWAIT</option>
              <option value="KG">KYRGYZSTAN</option>
              <option value="LA">LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>
              <option value="LV">LATVIA</option>
              <option value="LB">LEBANON</option>
              <option value="LS">LESOTHO</option>
              <option value="LR">LIBERIA</option>
              <option value="LY">LIBYAN ARAB JAMAHIRIYA</option>
              <option value="LI">LIECHTENSTEIN</option>
              <option value="LT">LITHUANIA</option>
              <option value="LU">LUXEMBOURG</option>
              <option value="MO">MACAU</option>
              <option value="MG">MADAGASCAR</option>
              <option value="MW">MALAWI</option>
              <option value="MY">MALAYSIA</option>
              <option value="MV">MALDIVES</option>
              <option value="ML">MALI</option>
              <option value="MT">MALTA</option>
              <option value="MH">MARSHALL ISLANDS</option>
              <option value="MQ">MARTINIQUE</option>
              <option value="MR">MAURITANIA</option>
              <option value="MU">MAURITIUS</option>
              <option value="YT">MAYOTTE</option>
              <option value="MX">MEXICO</option>
              <option value="MC">MONACO</option>
              <option value="MN">MONGOLIA</option>
              <option value="MS">MONTSERRAT</option>
              <option value="MA">MOROCCO</option>
              <option value="MZ">MOZAMBIQUE</option>
              <option value="MM">MYANMAR</option>
              <option value="NA">NAMIBIA</option>
              <option value="NR">NAURU</option>
              <option value="NP">NEPAL</option>
              <option value="NL">NETHERLANDS</option>
              <option value="AN">NETHERLANDS ANTILLES</option>
              <option value="NC">NEW CALEDONIA</option>
              <option value="NZ">NEW ZEALAND</option>
              <option value="NI">NICARAGUA</option>
              <option value="NE">NIGER</option>
              <option value="NG">NIGERIA</option>
              <option value="NU">NIUE</option>
              <option value="NF">NORFOLK ISLAND</option>
              <option value="MP">NORTHERN MARIANA ISLANDS</option>
              <option value="NO">NORWAY</option>
              <option value="OM">OMAN</option>
              <option value="PK">PAKISTAN</option>
              <option value="PW">PALAU</option>
              <option value="PA">PANAMA</option>
              <option value="PG">PAPUA NEW GUINEA</option>
              <option value="PY">PARAGUAY</option>
              <option value="PE">PERU</option>
              <option value="PH">PHILIPPINES</option>
              <option value="PN">PITCAIRN</option>
              <option value="PL">POLAND</option>
              <option value="PT">PORTUGAL</option>
              <option value="PR">PUERTO RICO</option>
              <option value="QA">QATAR</option>
              <option value="RE">REUNION</option>
              <option value="RO">ROMANIA</option>
              <option value="RU">RUSSIAN FEDERATION</option>
              <option value="RW">RWANDA</option>
              <option value="SH">SAINT HELENA</option>
              <option value="KN">SAINT KITTS AND NEVIS</option>
              <option value="LC">SAINT LUCIA</option>
              <option value="PM">SAINT PIERRE AND MIQUELON</option>
              <option value="VC">SAINT VINCENT AND THE GRENADINES</option>
              <option value="WS">SAMOA</option>
              <option value="SM">SAN MARINO</option>
              <option value="ST">SAO TOME AND PRINCIPE</option>
              <option value="SA">SAUDI ARABIA</option>
              <option value="SN">SENEGAL</option>
              <option value="CS">SERBIA AND MONTENEGRO</option>
              <option value="SC">SEYCHELLES</option>
              <option value="SL">SIERRA LEONE</option>
              <option value="SG">SINGAPORE</option>
              <option value="SK">SLOVAKIA</option>
              <option value="SI">SLOVENIA</option>
              <option value="SB">SOLOMON ISLANDS</option>
              <option value="SO">SOMALIA</option>
              <option value="ZA">SOUTH AFRICA</option>
              <option value="GS">
                SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS
              </option>
              <option value="ES">SPAIN</option>
              <option value="LK">SRI LANKA</option>
              <option value="SD">SUDAN</option>
              <option value="SR">SURINAME</option>
              <option value="SJ">SVALBARD AND JAN MAYEN ISLANDS</option>
              <option value="SZ">SWAZILAND</option>
              <option value="SE">SWEDEN</option>
              <option value="CH">SWITZERLAND</option>
              <option value="SY">SYRIAN ARAB REPUBLIC</option>
              <option value="TW">TAIWAN</option>
              <option value="TJ">TAJIKISTAN</option>
              <option value="TH">THAILAND</option>
              <option value="TL">TIMOR-LESTE</option>
              <option value="TG">TOGO</option>
              <option value="TK">TOKELAU</option>
              <option value="TO">TONGA</option>
              <option value="TT">TRINIDAD AND TOBAGO</option>
              <option value="TN">TUNISIA</option>
              <option value="TR">TURKEY</option>
              <option value="TM">TURKMENISTAN</option>
              <option value="TC">TURKS AND CAICOS ISLANDS</option>
              <option value="TV">TUVALU</option>
              <option value="UG">UGANDA</option>
              <option value="UA">UKRAINE</option>
              <option value="AE">UNITED ARAB EMIRATES</option>
              <option value="GB">UNITED KINGDOM</option>
              <option value="US">UNITED STATES</option>
              <option value="UM">UNITED STATES MINOR OUTLYING ISLANDS</option>
              <option value="UY">URUGUAY</option>
              <option value="UZ">UZBEKISTAN</option>
              <option value="VU">VANUATU</option>
              <option value="VE">VENEZUELA</option>
              <option value="VN">VIET NAM</option>
              <option value="WF">WALLIS AND FUTUNA ISLANDS</option>
              <option value="EH">WESTERN SAHARA</option>
              <option value="YE">YEMEN</option>
              <option value="ZM">ZAMBIA</option>
              <option value="ZW">ZIMBABWE</option>
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
                {...register("documentSeries")}
              ></input>
              <label style={{ fontSize: "70%" }}>Серия</label>
            </div>
            <div className={style.IDCARDContainerTwo}>
              <input
                className={style.IDCARDinput}
                placeholder="например, 044332211"
                {...register("documentNumber")}
              ></input>
              <label style={{ fontSize: "70%" }}>Номер</label>
            </div>
            <div className={style.IDCARDContainerTwo}>
              <input
                className={style.IDCARDinput}
                placeholder="например, МВД РК"
                {...register("documentIssued")}
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

        <div style={{ marginTop: "2%", width: "100%" }}>
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
                  {...register("homePhoneNumber")}
                ></input>
              </div>
              <div className={style.CONTACTSContainerThree}>
                <label className={style.CONTACTSlabelTwo}>
                  Рабочий телефон
                </label>
                <input
                  className={style.CONTACTSinputTwo}
                  placeholder="например, +7-777-111-2222"
                  {...register("workPhoneNumber")}
                ></input>
              </div>
              <div className={style.CONTACTSContainerThree}>
                <label className={style.CONTACTSlabelTwo}>
                  Мобильный телефон
                </label>
                <input
                  className={style.CONTACTSinputTwo}
                  placeholder="например, +7-777-333-4444"
                  {...register("mobilePhoneNumber")}
                ></input>
              </div>
              <div className={style.CONTACTSContainerThree}>
                <label className={style.CONTACTSlabelTwo}>
                  Контактный - ФИО (родственника и/или знакомого)
                </label>
                <input
                  className={style.CONTACTSinputTwo}
                  placeholder="например, Баглан Данов"
                  {...register("contactPersonFio")}
                ></input>
              </div>
              <div className={style.CONTACTSContainerThree}>
                <label className={style.CONTACTSlabelTwo}>
                  Контактный - степень родства (родственника и/или знакомого)
                </label>
                <input
                  className={style.CONTACTSinputTwo}
                  placeholder="например, отец"
                  {...register("contactPersonDegreeOfRelationship")}
                ></input>
              </div>
              <div className={style.CONTACTSContainerThree}>
                <label className={style.CONTACTSlabelTwo}>
                  Контактный - номер телефона (родственника и/или знакомого)
                </label>
                <input
                  className={style.CONTACTSinputTwo}
                  placeholder="например, +7-777-555-6677"
                  {...register("contactPersonPhoneNumber")}
                ></input>
              </div>

              <div className={style.CONTACTSContainerThree}>
                <label className={style.CONTACTSlabelTwo}>
                  Адрес электронной почты
                </label>
                <input
                  className={style.CONTACTSinputTwo}
                  placeholder="например, jusan@gmail.com"
                  {...register("email")}
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
                  <label className={style.HOMEContainerFourLabel}>Город</label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Караганда"
                    {...register("permanentRegistrationAddressCity")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Область
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Карагандинская"
                    {...register("permanentRegistrationAddressDistrict")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Район</label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Казыбекбийский"
                    {...register("permanentRegistrationAddressRegion")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Улица</label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Степная"
                    {...register("permanentRegistrationAddressStreet")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Дом</label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 1"
                    {...register("permanentRegistrationAddressHouseNumber")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Корпус</label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, А1"
                    {...register("permanentRegistrationAddressCorpus")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Квартира
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 101"
                    {...register("permanentRegistrationAddressApartment")}
                  ></input>
                </div>
              </div>
              <label className={style.HOMEContainerTwoLabel}>
                Адрес фактического проживания
              </label>
              <div className={style.HOMEContainerFive} style={{}}>
                <input
                  type="checkbox"
                  onClick={() => {
                    setBoolLivingPlace(!boolLivingPlace);
                    console.log(boolLivingPlace);
                  }}
                ></input>
                <label className={style.HOMEContainerTwoLabel}>
                  Cовпадает с адресом постоянной регистрации
                </label>
              </div>
              <div className={style.HOMEContainerThree}>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Город</label>
                  {cityNameFunc(boolLivingPlace)}
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Область
                  </label>
                  {stateNameFunc(boolLivingPlace)}
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Район</label>
                  {areaNameFunc(boolLivingPlace)}
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Улица</label>
                  {streetNameFunc(boolLivingPlace)}
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Дом</label>
                  {buildingNameFunc(boolLivingPlace)}
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>Корпус</label>
                  {blockNameFunc(boolLivingPlace)}
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Квартира
                  </label>
                  {apartmentNameFunc(boolLivingPlace)}
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
        </div>

        <div style={{ marginTop: "2%" }}>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Образование (в том числе неоконченное)
            </label>
            <div className={style.UNIVERSITYSubContainer}>
              {universityFields.map((field, index) => {
                return (
                  <div className={style.UNIVERSITYContainerTwo} key={field.id}>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Дата начала обучения
                      </label>
                      <input
                        type="date"
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 01-01-1990"
                        {...register(
                          `universityInfoDtos.${index}.startDateOfEducation`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Дата конца обучения
                      </label>
                      <input
                        type="date"
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 01-01-1994"
                        {...register(
                          `universityInfoDtos.${index}.endDateOfEducation`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Полное название учебного заведения
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Назарбаев Университет"
                        {...register(
                          `universityInfoDtos.${index}.nameOfInstitution`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Специальность
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, информатика"
                        {...register(`universityInfoDtos.${index}.speciality`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Форма обучения
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, очная"
                        {...register(`universityInfoDtos.${index}.formOfStudy`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Квалификация
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, бакалавр"
                        {...register(
                          `universityInfoDtos.${index}.qualification`
                        )}
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
              title="Пожалуйста укажите места высшего и среднеспециального образования, которые Вы окончили."
            ></img>
          </div>
          <div className={style.AddRemoveButtonContainer}>
            <Button
              className={style.AddButton}
              onClick={() => universityAppend({ ...defaultUniversity })}
            >
              Добавить университет
            </Button>
            <Button
              className={style.RemoveButton}
              onClick={() => universityRemove({ ...defaultUniversity })}
            >
              Удалить университет
            </Button>
          </div>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Специальные курсы, школы, стажировки, семинары
            </label>
            <div className={style.UNIVERSITYSubContainer}>
              {courseFields.map((field, index) => {
                {
                  /* {courses.map(
                  ({ end, duration, coursename, type, degree }, index) => { */
                }
                return (
                  <div className={style.UNIVERSITYContainerTwo} key={field.id}>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Год окончания
                      </label>
                      <input
                        type="date"
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 1990"
                        {...register(
                          `additionalEducationInfoDtos.${index}.yearOfGraduation`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Длительность обучения
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 1 год"
                        {...register(
                          `additionalEducationInfoDtos.${index}.durationOfTraining`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Полное наименование курсов
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Курсы инженерной квалификации"
                        {...register(
                          `additionalEducationInfoDtos.${index}.nameOfCourse`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Специальность
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например,инженер"
                        {...register(
                          `additionalEducationInfoDtos.${index}.speciality`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Учёная степень, сертификаты
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, разряд/грейд"
                        {...register(
                          `additionalEducationInfoDtos.${index}.academicDegreeOrCertificates`
                        )}
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
              title="Пожалуйста укажите курсы"
            ></img>
          </div>
          <div className={style.AddRemoveButtonContainer}>
            <Button
              className={style.AddButton}
              onClick={() => courseAppend({ ...defaultUniversity })}
            >
              Добавить курс
            </Button>
            <Button
              className={style.RemoveButton}
              onClick={() => courseRemove({ ...defaultUniversity })}
            >
              Удалить курс
            </Button>
          </div>
        </div>

        <div style={{ marginTop: "2%" }}>
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
                    type="date"
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 01-1990"
                    {...register("startOfWorkingOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Конец рабочего периода
                  </label>
                  <input
                    type="date"
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 01-1991"
                    {...register("endOfWorkingOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Полное название организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, АО First Heartland Jusan Bank"
                    {...register("workingPlaceInfoOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Вид деятельности организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, банкинг и финансы"
                    {...register("workTypeOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Адрес организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Кабанбай Батыра 205"
                    {...register("workingPlaceAddressOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, +7-7172-777-888"
                    {...register("workingPlacePhoneNumberOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Наименование должности
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, бухгалтер"
                    {...register("positionOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    ФИО руководителя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Рахимбаев Талгат Ильясович"
                    {...register("managerFullNameOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон руководителя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, например, +7-7172-777-888"
                    {...register("managerPhoneNumberOne")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Причина увольнения
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, по собственному желанию"
                    {...register("reasonForDismissalOne")}
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
                    type="date"
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 01-1990"
                    {...register("startOfWorkingTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Конец рабочего периода
                  </label>
                  <input
                    type="date"
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 01-1991"
                    {...register("endOfWorkingTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Полное название организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, АО First Heartland Jusan Bank"
                    {...register("workingPlaceInfoTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Вид деятельности организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, банкинг и финансы"
                    {...register("workTypeTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Адрес организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Кабанбай Батыра 205"
                    {...register("workingPlaceAddressTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, +7-7172-777-888"
                    {...register("workingPlacePhoneNumberTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Наименование должности
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, бухгалтер"
                    {...register("positionTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    ФИО руководителя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Рахимбаев Талгат Ильясович"
                    {...register("managerFullNameTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон руководителя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, например, +7-7172-777-888"
                    {...register("managerPhoneNumberTwo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Причина увольнения
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, по собственному желанию"
                    {...register("reasonForDismissalTwo")}
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
                    type="date"
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 01-1990"
                    {...register("startOfWorkingThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Конец рабочего периода
                  </label>
                  <input
                    type="date"
                    className={style.HOMEContainerFourInput}
                    placeholder="например, 01-1991"
                    {...register("endOfWorkingThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Полное название организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, АО First Heartland Jusan Bank"
                    {...register("workingPlaceNameThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Вид деятельности организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, банкинг и финансы"
                    {...register("workTypeThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Адрес организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Кабанбай Батыра 205"
                    {...register("workingPlaceAddressThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон организации
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, +7-7172-777-888"
                    {...register("workingPlacePhoneNumberThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Наименование должности
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, бухгалтер"
                    {...register("positionThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    ФИО руководителя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Рахимбаев Талгат Ильясович"
                    {...register("managerFullNameThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон руководителя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, например, +7-7172-777-888"
                    {...register("managerPhoneNumberThree")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Причина увольнения
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, по собственному желанию"
                    {...register("reasonForDismissalThree")}
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
                    {...register("profRefFullName1")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Место работы рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, АО First Heartland Jusan Bank"
                    {...register("profRefWorkPlace1")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Должность рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, бухгалтер"
                    {...register("profRefWorkPosition1")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, например, +7-7172-777-888"
                    {...register("profRefTel1")}
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
                    {...register("profRefFullName2")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Место работы рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, АО First Heartland Jusan Bank"
                    {...register("profRefWorkPlace2")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Должность рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, бухгалтер"
                    {...register("profRefWorkPosition2")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, например, +7-7172-777-888"
                    {...register("profRefTel2")}
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
                    {...register("profRefFullName3")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Место работы рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, АО First Heartland Jusan Bank"
                    {...register("profRefWorkPlace3")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Должность рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, бухгалтер"
                    {...register("profRefWorkPosition3")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Телефон рекомендателя
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, например, +7-7172-777-888"
                    {...register("profRefTel3")}
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
        </div>

        <div style={{ marginTop: "2%", width: "100%" }}>
          <div className={style.HOMEContainer}>
            <label className={style.HOMElabel}>Семейное положение</label>
            <div className={style.HOMEContainerTwo}>
              <div className={style.HOMEContainerThree}></div>
              <div className={style.HOMEContainerFour}>
                <label className={style.HOMEContainerFourLabel}>
                  Семейное положение
                </label>
                <select
                  className={style.CITIZENSHIPinput}
                  {...register("maritalStatus")}
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
              </div>
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите семейное положение"
            ></img>
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
                    {...register("spouseFIO")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Место работы супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, АО First Heartland Jusan Bank"
                    {...register("spouseWorkingInfo")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Должность супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, бухгалтер"
                    {...register("spouseWorkingPosition")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Адрес места жительства супруга (-и)
                  </label>
                  <input
                    className={style.HOMEContainerFourInput}
                    placeholder="например, Кабанбай Батыра 205"
                    {...register("spouseAddress")}
                  ></input>
                </div>
                <div className={style.HOMEContainerFour}>
                  <label className={style.HOMEContainerFourLabel}>
                    Гражданство супруга (-и)
                  </label>
                  <select
                    className={style.CITIZENSHIPinput}
                    {...register("spouseCitizenship")}
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
                    {...register("spouseContacts")}
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
              {childFields.map((field, index) => {
                return (
                  <div className={style.UNIVERSITYContainerTwo} key={field.id}>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Муса Темирлан Аскарович"
                        {...register(`childrenInfoDtos.${index}.fio`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Дата рождения
                      </label>
                      <input
                        type="date"
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 01-01-1994"
                        {...register(
                          `childrenInfoDtos.${index}.dateOfBirthday`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Телефон
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, +7-777-777-7777"
                        {...register(`childrenInfoDtos.${index}.phoneNumber`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Место учебы, работы
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, информатика"
                        {...register(`childrenInfoDtos.${index}.workPlace`)}
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
          <div className={style.AddRemoveButtonContainer}>
            <Button
              className={style.AddButton}
              onClick={() => childAppend({ ...defaultChild })}
            >
              Добавить ребенка
            </Button>
            <Button
              className={style.RemoveButton}
              onClick={() => childRemove({ ...defaultChild })}
            >
              Удалить ребенка
            </Button>
          </div>

          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Ближайшие родственники
            </label>
            <div className={style.UNIVERSITYSubContainer}>
              {relativeFields.map((field, index) => {
                return (
                  <div className={style.UNIVERSITYContainerTwo} key={field.id}>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Степень родства
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, тесть"
                        {...register(
                          `relativesInfoDtos.${index}.degreeOfRelationship`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Айдынов Аскар Макарович"
                        {...register(`relativesInfoDtos.${index}.fio`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Дата рождения
                      </label>
                      <input
                        type="date"
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 01-01-1994"
                        {...register(
                          `relativesInfoDtos.${index}.dateOfBirthday`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Место работы
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, АО First Heartland Jusan Bank"
                        {...register(`relativesInfoDtos.${index}.workingPlace`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Должность
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, бухгалтер"
                        {...register(
                          `relativesInfoDtos.${index}.workingPosition`
                        )}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Домашний адрес
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Кирова 21/1 горож Нур-Султан"
                        {...register(`relativesInfoDtos.${index}.address`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>
                        Телефон
                      </label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, +7-777-777-7777"
                        {...register(`relativesInfoDtos.${index}.phoneNumber`)}
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
              title="Пожалуйста укажите детали родственников"
            ></img>
          </div>
          <div className={style.AddRemoveButtonContainer}>
            <Button
              className={style.AddButton}
              onClick={() => relativeAppend({ ...defaultRelative })}
            >
              Добавить родственника
            </Button>
            <Button
              className={style.RemoveButton}
              onClick={() => relativeRemove({ ...defaultRelative })}
            >
              Удалить родственника
            </Button>
          </div>
        </div>

        <div style={{ marginTop: "2%" }}>
          <div className={style.ADDITIONALINFOContainer}>
            <label className={style.ADDITIONALINFOlabel}>
              Дополнительная информация
            </label>
            <div className={style.ADDITIONALINFOSubContainer}>
              <div className={style.ADDITIONALINFOContainerThree}>
                <label className={style.ADDITIONALINFOlabelTwo}>
                  Являетесь ли Вы руководителем/учредителем (соучредителем),
                  членом совета директоров и/или правления коммерческих
                  организаций (ИП/ТОО)
                </label>
                <input
                  type="checkbox"
                  onClick={() =>
                    setBoolAdditionalInfoToo(!boolAdditionalInfoToo)
                  }
                  className={style.ADDITIONALINFOcheckbox}
                  placeholder="например, да/нет"
                  {...register(`CommerceOrgAnswer`)}
                ></input>
              </div>
              {commerceFields.map((field, index) => {
                return (
                  <div
                    className={style.ADDITIONALINFOontainerTwo}
                    key={field.id}
                  >
                    {boolAdditionalInfoToo ? (
                      <>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Наименование
                          </label>
                          <input
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, ТОО Балтех"
                            {...register(
                              `additionalWorkingInfoDtos.${index}.name`
                            )}
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Идентификационный Номер Налогоплательщика
                          </label>
                          <input
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, 123456789012"
                            {...register(
                              `additionalWorkingInfoDtos.${index}.inn`
                            )}
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Адрес
                          </label>
                          <input
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, Шевченко 51, город Шымкент"
                            {...register(
                              `additionalWorkingInfoDtos.${index}.address`
                            )}
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Вид деятельности
                          </label>
                          <input
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, строительство"
                            {...register(
                              `additionalWorkingInfoDtos.${index}.typeOfWork`
                            )}
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Телефон
                          </label>
                          <input
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, +7-777-777-7777"
                            {...register(
                              `additionalWorkingInfoDtos.${index}.phoneNumber`
                            )}
                          ></input>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Наименование
                          </label>
                          <input
                            readOnly
                            value=""
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, ТОО Балтех"
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Идентификационный Номер Налогоплательщика
                          </label>
                          <input
                            readOnly
                            value=""
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, 123456789012"
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Адрес
                          </label>
                          <input
                            readOnly
                            value=""
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, Шевченко 51, город Шымкент"
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Вид деятельности
                          </label>
                          <input
                            readOnly
                            value=""
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, строительство"
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Телефон
                          </label>
                          <input
                            readOnly
                            value=""
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, +7-777-777-7777"
                          ></input>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите соучредительские детали"
            ></img>
          </div>

          <div className={style.AddRemoveButtonContainer}>
            <Button
              className={style.AddButton}
              onClick={() => commerceAppend({ ...defaultCommerceOrg })}
            >
              Добавить организацию
            </Button>
            <Button
              className={style.RemoveButton}
              onClick={() => commerceRemove({ ...defaultCommerceOrg })}
            >
              Удалить организацию
            </Button>
          </div>
          <div className={style.ADDITIONALINFOContainer}>
            <label className={style.ADDITIONALINFOlabel}>
              Дополнительная информация - связь с АО "Jusan Bank"
            </label>
            <div className={style.ADDITIONALINFOSubContainer}>
              <div className={style.ADDITIONALINFOContainerThree}>
                <label className={style.ADDITIONALINFOlabelTwo}>
                  Имеете ли Вы родственников, членов семьи, работающих в АО "
                  Jusan Bank" или связанных с деятельностью АО "Jusan Bank"
                </label>

                <input
                  type="checkbox"
                  onClick={() => setBoolADDITIONALINFO(!boolADDITIONALINFO)}
                  className={style.ADDITIONALINFOcheckbox}
                  {...register(`JusanRelativeAnswer`)}
                ></input>
              </div>
              {jusanRelativeFields.map((field, index) => {
                return (
                  <div
                    className={style.ADDITIONALINFOContainerTwo}
                    key={field.id}
                  >
                    {boolADDITIONALINFO === true ? (
                      <>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Степень родства
                          </label>
                          <input
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, брат"
                            {...register(
                              `JusanRelativesRelationship.${index}.degreeOfRelationship`
                            )}
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            ФИО
                          </label>
                          <input
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, Бахытжанов Аскар Иманович"
                            {...register(`JusanRelativesName.${index}.fio`)}
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Подразделение
                          </label>
                          <input
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, бухгалтерия"
                            {...register(
                              `JusanRelativesDepartment.${index}.departmentAndPosition`
                            )}
                          ></input>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Степень родства
                          </label>
                          <input
                            readOnly
                            value=""
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, брат"
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            ФИО
                          </label>
                          <input
                            readOnly
                            value=""
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, Бахытжанов Аскар Иманович"
                          ></input>
                        </div>
                        <div className={style.ADDITIONALINFOContainerThree}>
                          <label className={style.ADDITIONALINFOlabelThree}>
                            Подразделение
                          </label>
                          <input
                            readOnly
                            value=""
                            className={style.ADDITIONALINFOinputTwo}
                            placeholder="например, бухгалтерия"
                          ></input>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите родственников, членов семьи, работающих в АО Jusan Bank или связанных с деятельностью  АО Jusan Bank"
            ></img>
          </div>
          <div className={style.AddRemoveButtonContainer}>
            <Button
              className={style.AddButton}
              onClick={() => jusanRelativeAppend({ ...defaultJusanRelative })}
            >
              Добавить родственника
            </Button>
            <Button
              className={style.RemoveButton}
              onClick={() => jusanRelativeRemove({ ...defaultJusanRelative })}
            >
              Удалить родственника
            </Button>
          </div>

          <div className={style.ADDITIONALINFOContainer}>
            <label className={style.ADDITIONALINFOlabel}>
              Дополнительная информация - наличие автомобиля
            </label>
            <div className={style.ADDITIONALINFOSubContainer}>
              <div className={style.ADDITIONALINFOContainerThree}>
                <label className={style.ADDITIONALINFOlabelTwo}>
                  Наличие автомобиля
                </label>
                <input
                  type="checkbox"
                  onClick={() => setBoolCarInfo(!boolCarInfo)}
                  className={style.ADDITIONALINFOcheckbox}
                ></input>
              </div>
              {boolCarInfo === true ? (
                <>
                  <div className={style.UNIVERSITYContainerTwo} key={cars.id}>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>Модель</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Лада 9"
                        {...register(`carModel`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 1990"
                        {...register(`carYearOfManufacture`)}
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>Номер</label>
                      <input
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, A88801KZ"
                        {...register(`carNumber`)}
                      ></input>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={style.UNIVERSITYContainerTwo} key={cars.id}>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>Модель</label>
                      <input
                        readOnly
                        value=""
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, Лада 9"
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                      <input
                        readOnly
                        value=""
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, 1990"
                      ></input>
                    </div>
                    <div className={style.UNIVERSITYContainerThree}>
                      <label className={style.UNIVERSITYlabelTwo}>Номер</label>
                      <input
                        readOnly
                        value=""
                        className={style.UNIVERSITYinputTwo}
                        placeholder="например, A88801KZ"
                      ></input>
                    </div>
                  </div>
                </>
              )}
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите детали машины"
            ></img>
          </div>
        </div>

        <div style={{ marginTop: "2%" }}>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Дополнительная информация - военный статус
            </label>
            <div className={style.UNIVERSITYContainerTwo} key={cars.id}>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Отношение к воинской службе
                </label>
                <select
                  className={style.CITIZENSHIPinput}
                  {...register("militaryStatus")}
                >
                  <option value="">выберите статус</option>
                  <option value="военнообязанный">военнообязанный</option>
                  <option value="невоеннообязанный">невоеннообязанный</option>
                </select>
              </div>
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите актуальные данные по отношению к воинской службе"
            ></img>
          </div>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Дополнительная информация - льготы
            </label>
            <div className={style.UNIVERSITYContainerTwo} key={cars.id}>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Имеете ли Вы право на льготы согласно действующему
                  законодательству?
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, инвалид"
                  {...register(`benefitsStatus`)}
                ></input>
              </div>
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите актуальные данные по наличию льгот"
            ></img>
          </div>
          <div className={style.UNIVERSITYContainer}>
            <label className={style.UNIVERSITYlabel}>
              Внимательно прочитайте и ответьте, пожалуйста, на следующие
              вопросы
            </label>
            <div className={style.UNIVERSITYContainerTwo} key={cars.id}>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Имеете ли Вы просроченный заем?
                </label>
                <select
                  className={style.NATIONALITYinput}
                  {...register(`overdueLoanStatus`)}
                >
                  {/* TODO make a radio button */}
                  <option value="">выберите опцию</option>
                  <option value="да">да</option>
                  <option value="нет">нет</option>
                </select>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Если да, то уточните
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, невозможность оплатить заем"
                  {...register(`overdueLoanReason`)}
                ></input>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Привлекались ли Вы к уголовной ответственности?
                </label>
                <select
                  className={style.NATIONALITYinput}
                  {...register(`criminalLiabilityStatus`)}
                >
                  {/* TODO make a radio button */}
                  <option value="">выберите опцию</option>
                  <option value="да">да</option>
                  <option value="нет">нет</option>
                </select>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Если да, то уточните
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, ДТП в 2000 году"
                  {...register(`criminalLiabilityReason`)}
                ></input>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Привлекались ли Ваши близкие родственники, члены семьи к
                  уголовной ответственности?
                </label>
                <select
                  className={style.NATIONALITYinput}
                  {...register(`relativesCriminalCaseStatus`)}
                >
                  <option value="">выберите опцию</option>
                  <option value="да">да</option>
                  <option value="нет">нет</option>
                </select>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Если да, то уточните
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, ДТП в 2000 году"
                  {...register(`relativesCriminalCaseReason`)}
                ></input>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Против Вас когда-либо возбуждалось уголовное дело?
                </label>
                <select
                  className={style.NATIONALITYinput}
                  {...register(`criminalCaseStatus`)}
                >
                  <option value="">выберите опцию</option>
                  <option value="да">да</option>
                  <option value="нет">нет</option>
                </select>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Если да, то уточните
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, ДТП в 2000 году"
                  {...register(`criminalCaseReason`)}
                ></input>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Выплачиваете ли Вы алименты?
                </label>
                <select
                  className={style.NATIONALITYinput}
                  {...register(`alimonyStatus`)}
                >
                  <option value="">выберите опцию</option>
                  <option value="да">да</option>
                  <option value="нет">нет</option>
                </select>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Если да, то уточните
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, в разводе"
                  {...register(`alimonyReason`)}
                ></input>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Привлекались ли Вы к административной ответственности?
                </label>
                <select
                  className={style.NATIONALITYinput}
                  {...register(`administrativeLiabilityStatus`)}
                >
                  <option value="">выберите опцию</option>
                  <option value="да">да</option>
                  <option value="нет">нет</option>
                </select>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Если да, то уточните
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, мелкое хулиганство"
                  {...register(`administrativeLiabilityReason`)}
                ></input>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Есть ли у Вас дополнительный доход (работа,
                  дистрибьютерство/представительство в торговых компаниях)
                </label>
                <select
                  className={style.NATIONALITYinput}
                  {...register(`additionalInformation`)}
                >
                  <option value="">выберите опцию</option>
                  <option value="да">да</option>
                  <option value="нет">нет</option>
                </select>
              </div>
              <div className={style.UNIVERSITYContainerThree}>
                <label className={style.UNIVERSITYlabelTwo}>
                  Если да, то уточните
                </label>
                <input
                  className={style.UNIVERSITYinputTwo}
                  placeholder="например, подработка"
                  {...register(`additionalIncome`)}
                ></input>
              </div>
            </div>
            <img
              src={question}
              alt=""
              className={style.hint}
              title="Пожалуйста укажите актуальные данные по наличию льгот"
            ></img>
          </div>
        </div>

        <div style={{ marginTop: "2%" }}>
          <div className={style.dataProcessingConfirmation}>
            <span>
              В соответствии с требованиями Закона Республики Казахстан «О
              персональных данных и их защите» даю АО " Jusan Bank" (далее –
              «Банк») безусловное согласие на сбор, обработку, хранение и
              распространение Банком информации обо мне [и представляемом мной
              лице], включая мои персональные данные [и персональные данные
              представляемого мной лица], в том числе биометрические,
              зафиксированные на электронном, бумажном и любом ином носителе, а
              также происходящие в них в будущем изменения и дополнения, в связи
              с возникновением с Банком, в том числе в будущем, любых
              правоотношений, связанных, включая, но не ограничиваясь, с
              банковским и/или иным обслуживанием. При этом мои персональные
              данные [и персональные данные представляемого мной лица] должны
              распространяться Банком с учетом ограничений, установленных
              законодательством Республики Казахстан, в том числе, ст. 50 Закона
              Республики Казахстан «О банках и банковской деятельности в
              Республике Казахстан».
            </span>
            <div className={style.confirmation}>
              <input
                type="checkbox"
                style={{ margin: "2%" }}
                onClick={() => {
                  setAgree(!agree);
                  console.log("test");
                }}
              ></input>
              <span>
                Даю безусловное согласие на сбор, обработку, хранение и
                распространение Банком информации обо мне{" "}
              </span>
            </div>
            <input
              readOnly
              value={dateState.toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
              style={{ width: "100%", textAlign: "center", border: "none" }}
              {...register(`dateOfFillingIn`)}
            >
              {}
            </input>
          </div>
          <Button type="submit" className={style.finalButton}>Отправить</Button>
          <div
            style={{
              position: "fixed",
              top: "10%",
              right: "11%",
            }}
          >
            <Button type="submit">Сохранить</Button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default UserMainForm;
