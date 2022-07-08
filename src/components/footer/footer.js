import MiniFooter from "./miniFooter";
import style from "./footer.module.css";

const footer = () => {
  return (
    <div>
      <div
        className={style.container}
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        <div className={style.subContainer}>
          <span style={{ fontSize: "20px", color: "black" }}>Call center</span>
          <span
            style={{ fontSize: "30px", color: "black", fontFamily: "Roboto" }}
          >
            +7-777-777-7777
          </span>
          <span style={{ fontSize: "10px", color: "gray" }}>
            Режим работы: 09:00 - 18:00
          </span>
        </div>
        <div className={style.subContainer}>
          <span>0707</span>
          <span>Бесплатно c мобильных операторов РК</span>
        </div>
        <div className={style.subContainer}>
          <span style={{ fontSize: "20px", color: "black" }}>
            Офис экстренной поддрежки отдела кадров
          </span>
          <span
            style={{ fontSize: "30px", color: "black", fontFamily: "Roboto" }}
          >
            +7-777-667-7777
          </span>
          <span style={{ fontSize: "10px", color: "gray" }}>
            Режим работы: 08:00 - 22:00
          </span>
        </div>
      </div>
      <MiniFooter></MiniFooter>
    </div>
  );
};

export default footer;
