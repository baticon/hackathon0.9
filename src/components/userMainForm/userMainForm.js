import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./userMainForm.module.css";
import question from "../media/question.png";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";

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
  const navigate = useNavigate();

  const [courses, setCourses] = useState([defaultCourse]);
  const [children, setChildren] = useState([defaultChild]);
  const [relatives, setRelatives] = useState([defaultRelative]);
  const [commerceOrg, setCommerceOrg] = useState([defaultCommerceOrg]);
  const [jusanRelatives, setJusanRelatives] = useState([defaultJusanRelative]);
  const [cars, setCars] = useState([defaultCar]);

  const { control, register, handleSubmit, setValue, watch } = useForm({
    defaultValues: { universities: [defaultUniversity] },
  });
  const onSubmit = (data) => console.log(data); //do fetch to server here to post data

  //get data from backend when user returns to certain page

  useEffect(() => {
    // insert data from back end here
    setValue(`universities`, [
      {
        start: null,
        end: null,
        universityname: "Harvard",
        major: "CS",
        attendance: null,
        degree: null,
      },
    ]);
  }, []);

  const {
    fields: universityFields,
    append: universityAppend,
    remove: universityRemove,
  } = useFieldArray({
    control,
    name: `universities`,
  });

  const {
    fields: courseFields,
    append: courseAppend,
    remove: courseRemove,
  } = useFieldArray({
    control,
    name: `courses`,
  });

  const [boolLivingPlace, setBoolLivingPlace] = useState(false);
  const cityName = watch("permanentRegistrationAddressCity");
  const stateName = watch("permanentRegistrationAddressDistrict");
  const areaName = watch("permanentRegistrationAddressRegion");
  const streetName = watch("permanentRegistrationAddressStreet");
  const buildingName = watch("permanentRegistrationAddressHouseNumber");
  const blockName = watch("permanentRegistrationAddressCorpus");
  const apartmentName = watch("permanentRegistrationAddressApartment");

  console.log(cityName);

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
      <div>
        <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginTop: "2%" }}>
            <div className={style.IINContainer}>
              <label className={style.IINlabel}>ИИН</label>
              <input
                className={style.IINinput}
                placeholder="например, 900101250050"
                pattern="^[0-9]{12}$"
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
                {...register("FIO")}
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
                type="date"
                readOnly
                {...register("dateOfBirthday")}
              ></input>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="Дата рождения в формате ММ-ЧЧ-ГГГГ"
              ></img>
            </div>
            <div className={style.POBContainer}>
              <label className={style.POBlabel}>Место рождения</label>
              <input
                className={style.POBinput}
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
            <div className={style.NATIONALITYContainer}>
              <label className={style.NATIONALITYlabel}>Национальность</label>
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
            <div className={style.CITIZENSHIPContainer}>
              <label className={style.CITIZENSHIPlabel}>Гражданство</label>
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

          <div style={{ marginTop: "2%" }}>
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
                    {...register("contactPerson")}
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
                    <label className={style.HOMEContainerFourLabel}>
                      Город
                    </label>
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
                    <label className={style.HOMEContainerFourLabel}>
                      Район
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Казыбекбийский"
                      {...register("permanentRegistrationAddressRegion")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Улица
                    </label>
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
                    <label className={style.HOMEContainerFourLabel}>
                      Корпус
                    </label>
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
                    <label className={style.HOMEContainerFourLabel}>
                      Город
                    </label>
                    <input
                      value={boolLivingPlace ? cityName : ""}
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Караганда"
                      {...register("actualAddressCity")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Область
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Карагандинская"
                      {...register("actualAddressDistrict")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Район
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Казыбекбийский"
                      {...register("actualAddressRegion")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Улица
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, Степная"
                      {...register("actualAddressStreet")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>Дом</label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 1"
                      {...register("actualAddressHouseNumber")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Корпус
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, А1"
                      {...register("actualAddressCorpus")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Квартира
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 101"
                      {...register("actualAddressApartment")}
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
          </div>

          <div style={{ marginTop: "2%" }}>
            <div className={style.UNIVERSITYContainer}>
              <label className={style.UNIVERSITYlabel}>
                Образование (в том числе неоконченное)
              </label>
              <div className={style.UNIVERSITYSubContainer}>
                {universityFields.map((field, index) => {
                  return (
                    <div
                      className={style.UNIVERSITYContainerTwo}
                      key={field.id}
                    >
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Дата начала обучения
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, 01-01-1990"
                          {...register(`startDateOfEducation.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Дата конца обучения
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, 01-01-1994"
                          {...register(`endDateOfEducation.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Полное название учебного заведения
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, Назарбаев Университет"
                          {...register(`nameOfInstitution.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Специальность
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, информатика"
                          {...register(`specialityAndFormOfStudy.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Квалификация
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, бакалавр"
                          {...register(`qualification.${index}`)}
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
            <div>
              <Button
                onClick={() => universityAppend({ ...defaultUniversity })}
              >
                Добавить университет
              </Button>
              <Button
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
                            {...register(`yearOfGraduation.${index}`)}
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
                            {...register(`durationOfTraining.${index}`)}
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
                            {...register(`nameOfCourse.${index}`)}
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
                            {...register(`speciality.${index}`)}
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
                            {...register(
                              `AcademicDegreeOrCertificates.${index}`
                            )}
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
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 01-1990"
                      {...register("startOfWorking1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Конец рабочего периода
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, 01-1991"
                      {...register("endOfWorking1")}
                    ></input>
                  </div>
                  <div className={style.HOMEContainerFour}>
                    <label className={style.HOMEContainerFourLabel}>
                      Полное название организации
                    </label>
                    <input
                      className={style.HOMEContainerFourInput}
                      placeholder="например, АО First Heartland Jusan Bank"
                      {...register("workingPlaceInfo1")}
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
          </div>

          <div style={{ marginTop: "2%" }}>
            <div className={style.NATIONALITYContainer}>
              <label className={style.NATIONALITYlabel}>
                Семейное положение
              </label>
              <select
                className={style.NATIONALITYinput}
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
                          <label className={style.UNIVERSITYlabelTwo}>
                            ФИО
                          </label>
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
          </div>

          <div style={{ marginTop: "2%" }}>
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
                Дополнительная информация - связь с АО "Jusan Bank"
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
                          <label className={style.UNIVERSITYlabelTwo}>
                            ФИО
                          </label>
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
                Дополнительная информация - наличие автомобиля
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
                        <label className={style.UNIVERSITYlabelTwo}>
                          Модель
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, Лада 9"
                          value={model}
                          {...register(`carModel.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>ФИО</label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, 1990"
                          value={year}
                          {...register(`carYearOfManufacture.${index}`)}
                        ></input>
                      </div>
                      <div className={style.UNIVERSITYContainerThree}>
                        <label className={style.UNIVERSITYlabelTwo}>
                          Номер
                        </label>
                        <input
                          className={style.UNIVERSITYinputTwo}
                          placeholder="например, A88801KZ"
                          value={number}
                          {...register(`carNumber.${index}`)}
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
                    ЕИмеете ли Вы право на льготы согласно действующему
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
                  <select className={style.NATIONALITYinput}>
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
                    {...register(`overdueLoanStatus`)}
                  ></input>
                </div>
                <div className={style.UNIVERSITYContainerThree}>
                  <label className={style.UNIVERSITYlabelTwo}>
                    Привлекались ли Вы к уголовной ответственности?
                  </label>
                  <select className={style.NATIONALITYinput}>
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
                  <select className={style.NATIONALITYinput}>
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
                  <select className={style.NATIONALITYinput}>
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
                  <select className={style.NATIONALITYinput}>
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
                  <select className={style.NATIONALITYinput}>
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
                  <select className={style.NATIONALITYinput}>
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
          <input readOnly {...register(`dateOfFillingIn`)}></input>

          <div style={{ marginTop: "2%" }}>
            <div className={style.dataProcessingConfirmation}>
              <span>
                В соответствии с требованиями Закона Республики Казахстан «О
                персональных данных и их защите» даю АО " Jusan Bank" (далее –
                «Банк») безусловное согласие на сбор, обработку, хранение и
                распространение Банком информации обо мне [и представляемом мной
                лице], включая мои персональные данные [и персональные данные
                представляемого мной лица], в том числе биометрические,
                зафиксированные на электронном, бумажном и любом ином носителе,
                а также происходящие в них в будущем изменения и дополнения, в
                связи с возникновением с Банком, в том числе в будущем, любых
                правоотношений, связанных, включая, но не ограничиваясь, с
                банковским и/или иным обслуживанием. При этом мои персональные
                данные [и персональные данные представляемого мной лица] должны
                распространяться Банком с учетом ограничений, установленных
                законодательством Республики Казахстан, в том числе, ст. 50
                Закона Республики Казахстан «О банках и банковской деятельности
                в Республике Казахстан».
              </span>
              <div>
                <input type="checkbox"></input>
                <span>
                  Даю безусловное согласие на сбор, обработку, хранение и
                  распространение Банком информации обо мне{" "}
                </span>
              </div>
            </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default UserMainForm;
