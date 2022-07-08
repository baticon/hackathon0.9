import style from "./miniFooter.module.css";

const miniFooter = () => {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <span className={style.minifooter}>
          © 2022 - Jusan Singularity Hackathon - HR project
        </span>
      </div>
    </div>
  );
};

export default miniFooter;
