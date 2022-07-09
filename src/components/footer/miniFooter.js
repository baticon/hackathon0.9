import style from "./miniFooter.module.css";

const miniFooter = () => {
  return (
    <div className={style.copyrightContainer}>
      <div className={style.copyrightSubContainer}>
        <span className={style.copyrightFooter}>
          © 2022 - Jusan Singularity Hackathon - HR project
        </span>
      </div>
    </div>
  );
};

export default miniFooter;
