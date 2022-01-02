// style
import style from "../styles/InfoBubble.module.css";

const InfoBubble = ({ title = "", text = "", button = false }) => {
  return (
    <div className={style.infoContainer}>
      <div className={style.infoWrapper}>
        <h1 className={style.headline}>{title}</h1>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};

export default InfoBubble;
