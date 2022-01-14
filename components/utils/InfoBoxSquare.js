import Text from "./Text";

// style
import style from "../../styles/InfoBoxSquare.module.css";

const InfoBoxSquare = ({ color = "orange", title = "", text = "" }) => {
  return (
    <div
      style={{
        background: color === "orange" ? "#F7D3C7" : "#A3B1C0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div className={style.headWrapper}>
        <h3 className={style.head}>{title}</h3>
      </div>
      <div className={style.textWrapper}>
        <Text center={true}>{text}</Text>
      </div>
    </div>
  );
};

export default InfoBoxSquare;
