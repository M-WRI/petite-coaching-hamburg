// style
import style from "../../styles/Text.module.css";

const Text = ({ children, center }) => {
  console.log(center);
  return (
    <p style={{ textAlign: center ? "center" : "left" }} className={style.text}>
      {children}
    </p>
  );
};

export default Text;
