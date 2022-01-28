// style
import style from "../../styles/Text.module.css";

const Text = ({ children, center }) => {
  const arr = children.split("*");

  return (
    <p style={{ textAlign: center ? "center" : "left" }} className={style.text}>
      {arr.map((el) => {
        if (el.includes("+")) {
          const elArr = el.replace("+", "").split(" ");
          return (
            <>
              {elArr.map((item, i) => (
                <div key={i + "j"} className={style.wordWrapper}>
                  <span className={style.word}>{item}</span>
                  <div className={style.line}></div>
                </div>
              ))}
            </>
          );
        } else {
          return el;
        }
      })}
    </p>
  );
};

export default Text;
