import Header from "../header/header";
import Footer from "../footer/footer";
import style from "./userMainForm.module.css";
import question from "../media/question.png";

const UserMainForm = () => {
  return (
    <div>
      <Header />
      <div>
        <form className={style.formContainer}>
          <div style={{ marginTop: "2%" }}>
            <div className={style.inputContainerOne}>
              <label className={style.labelOne}>ИИН</label>
              <input
                className={style.inputOne}
                placeholder="например, 900101250050"
              ></input>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="ИИН расположен на лицевой стороне удостоверения личности гражданина Республики Казахстан, ниже даты рождения в виде комбинации из 12-ти цифр, в паспорте гражданина Республики Казахстан ИИН указан на 2 странице.  Иностранцы и лица без гражданства, постоянно проживающие в Казахстане, у которых на лицевой стороне вида на жительство иностранца в Республике Казахстан ниже даты рождения или на 2 странице удостоверения лица без гражданства ИИН не указан, должны обратиться в органы внутренних дел по месту пребывания для переоформления документов."
              ></img>
            </div>
            <div className={style.inputContainerOne}>
              <label className={style.labelOne}>ФИО</label>
              <input
                className={style.inputOne}
                placeholder="например, Дана Русланова Багдановна"
              ></input>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="ФИО - если Вы сменили фамилию, укажите, пожалуйста, прежнюю"
              ></img>
            </div>
            <div className={style.inputContainerOne}>
              <label className={style.labelOne}>
                Число, месяц и год рождения
              </label>
              <input
                className={style.inputOne}
                placeholder="например, 01-01-1900"
              ></input>
              <img
                src={question}
                alt=""
                className={style.hint}
                title="Дата рождения в формате ЧЧ-ММ-ГГГГ"
              ></img>
            </div>
            <div className={style.inputContainerOne}>
              <label className={style.labelOne}>Место рождения</label>
              <input
                className={style.inputOne}
                placeholder="например, Астана"
              ></input>
            </div>
            <div className={style.inputContainerOne}>
              <label className={style.labelOne}>Национальность</label>
              <input
                className={style.inputOne}
                placeholder="например, казах"
              ></input>
            </div>
            <div className={style.inputContainerOne}>
              <label className={style.labelOne}>Гражданство</label>
              <input
                className={style.inputOne}
                placeholder="например, Казахстан"
              ></input>
            </div>
            <div className={style.inputContainerOne}>
              <label className={style.labelOne}>
                Паспорт, удостоверение личности
              </label>
              <input></input>
              <input></input>
              <input></input>
            </div>
          </div>
          <div>
            <label></label>
            <input></input>
          </div>
          <div>
            <label></label>
            <input></input>
          </div>
          <div>
            <label></label>
            <input></input>
          </div>
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
