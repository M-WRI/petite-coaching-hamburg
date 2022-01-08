// style
import style from "../styles/ExpertiseSection.module.css";

const ExpertiseSection = () => {
  return (
    <section className={style.container}>
      <div className={style.contentContainer}>
        <h2 className={style.contentHead}>Meine Expertise</h2>
        <p className={style.contentText}>
          Ich arbeite nach den neusten wissenschaftlichen Erkenntnissen zum
          Thema frühkindliche Entwicklung und Förderung. Lernen ist ein
          lebenslanger Prozess – daher bilde ich mich regelmäßig weiter und
          lerne täglich dazu.
        </p>
      </div>
      <div className={style.testBox}>
        <h1>hi</h1>
      </div>
      <div className={style.testBox}>
        <h1>hi</h1>
      </div>
    </section>
  );
};

export default ExpertiseSection;
