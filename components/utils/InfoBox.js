import Headline from "./Headline";
import Text from "./Text";

// style
import style from "../../styles/InfoBox.module.css";

const InfoBox = ({ color = "orange", title = "", text = "" }) => {
  return (
    <div>
      <div className={style.headWrapper}>
        <Headline primary={false}>{title}</Headline>
      </div>
      <div
        className={style.textWrapper}
        style={{
          background: color === "orange" ? "#F7D3C7" : "#A3B1C0",
        }}
      >
        <Text center={true}>{text}</Text>
      </div>
    </div>
  );
};

export default InfoBox;
