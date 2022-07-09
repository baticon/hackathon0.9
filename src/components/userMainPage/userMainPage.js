import Header from "../header/header";
import Footer from "../footer/footer";
import PostFile from "../services/postFile";
import question from "../media/question.png";
import style from "./userMainPage.module.css";

//https://www.pluralsight.com/guides/uploading-files-with-reactjs

const UserMainPage = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <form className={style.formContainer}>
          <div className={style.uploadContainer}>
            <div className={style.fileUploadContainer} style={{}}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Вид на жительство или удостоверение</span>
                <img
                  src={question}
                  className={style.hint}
                  title="Вид на жительство иностранца в Республике Казахстан или
                удостоверение лица без гражданства (для иностранцев и лиц без
                гражданства, постоянно проживающих на территории Республики
                Казахстан)"
                ></img>
              </div>
              {PostFile()}
            </div>
            <div className={style.fileUploadContainer}>
              <span>Пожалуйста загрузите свое удостоверение</span>
              {PostFile()}
            </div>
            <div className={style.fileUploadContainer}>
              <span>Пожалуйста загрузите справку ПКБ</span>
              {PostFile()}
            </div>
            <div className={style.fileUploadContainer}>
              <span>Пожалуйста загрузите медицинскую справку 086</span>
              {PostFile()}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserMainPage;
