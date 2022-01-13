// style
import style from "../../styles/Headline.module.css";

const Headline = ({ children, primary }) => {
  return (
    <>
      {primary ? (
        <h1 className={style.primaryHead}>{children}</h1>
      ) : (
        <h2 className={style.secondaryHead}>{children}</h2>
      )}
    </>
  );
};

export default Headline;
