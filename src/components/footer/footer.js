import MiniFooter from "./miniFooter";
import style from "./footer.module.css";

const footer = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.subContainer}>
          <span className={style.blackFooterText}>Call center</span>
          <span className={style.blackFooterText}>+7-777-777-7777</span>
          <span className={style.grayFooterText}>09:00 - 18:00</span>
        </div>
        <div className={style.subContainer}>
          <span className={style.blackFooterText}>0707</span>
          <span className={style.grayFooterText}>
            Бесплатно c мобильных операторов РК
          </span>
          <span className={style.grayFooterText}>09:00 - 18:00</span>
        </div>
        <div className={style.subContainer}>
          <span className={style.blackFooterText}>
            Офис экстренной поддрежки
          </span>
          <span className={style.blackFooterText}>+7-777-667-7777</span>
          <span className={style.grayFooterText}>08:00 - 22:00</span>
        </div>
      </div>
      <MiniFooter></MiniFooter>
    </div>
  );
};

export default footer;
