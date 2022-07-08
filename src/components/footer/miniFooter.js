import style from "./miniFooter.module.css";

const miniFooter = () => {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <span style={{ fontSize: "20px", color: "black" }}>
          © 2022 - Jusan Singularity Hackathon - HR project
        </span>
      </div>
      <div>
        <a>Баглан - Батырбек - Дана - Руслан</a>
      </div>
    </div>
  );
};

export default miniFooter;
