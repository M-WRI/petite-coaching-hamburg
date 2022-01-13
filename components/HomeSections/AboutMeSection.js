// style
import style from "../../styles/AboutMe.module.css";
import InfoBox from "../utils/InfoBox";

const AboutMe = () => {
  const data = {
    title: "Teresa Jäger",
    text: "Ich bin Pädagogin, B.A. Transdisziplinäre Frühförderin und Gründerin von Petite Coaching Hamburg.",
  };

  return (
    <section className={style.container}>
      <div className={style.infoBoxContainer}>
        <InfoBox title={data.title} text={data.text} />
      </div>
      <div className={style.imageContainer}>
        <div className={style.image}></div>
      </div>
    </section>
  );
};

export default AboutMe;
