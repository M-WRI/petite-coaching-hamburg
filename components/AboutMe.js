// style
import style from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <h1>Teresa Jäger</h1>
        <p>
          Ich bin Pädagogin, B.A. Transdisziplinäre Frühförderin und Gründerin
          von Petite Coaching Hamburg.
        </p>
      </div>
      <div className={style.imageContainer}>
        <div className={style.image}></div>
      </div>
    </div>
  );
};

export default AboutMe;
