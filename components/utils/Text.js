// style
import style from "../../styles/Text.module.css";

const Text = ({ children }) => {
  return <p className={style.text}>{children}</p>;
};

export default Text;
