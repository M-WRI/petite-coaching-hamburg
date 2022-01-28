// style
import style from "../../styles/Text.module.css";

const Text = ({ children, center, bgCol }) => {
  const arr = children.split("*");

  return (
    <p
      style={{ textAlign: center ? "center" : "left" }}
      className={`${style.text}`}
    >
      {arr.map((el, i) => {
        if (el.includes("+")) {
          const elArr = el.replace("+", "").split(" ");
          return (
            <span key={i}>
              {elArr.map((item, i) => (
                <span key={i + "j"} className={style.wordWrapper}>
                  <span className={`${style.word} ${bgCol}`}>{item}</span>
                </span>
              ))}
            </span>
          );
        } else {
          return el;
        }
      })}
    </p>
  );
};

export default Text;
