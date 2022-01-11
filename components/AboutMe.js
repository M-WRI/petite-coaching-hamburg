// style
import style from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <h1 className={style.headline}>Teresa Jäger</h1>
        <div className={style.contentWrapper}>
          <p className={style.text}>
            Ich bin Pädagogin, B.A. Transdisziplinäre Frühförderin und Gründerin
            von Petite Coaching Hamburg.
          </p>
        </div>
      </div>
      <div className={style.imageContainer}>
        <div className={style.image}></div>
      </div>
    </div>
  );
};

export default AboutMe;
