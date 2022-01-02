// style
import style from "../styles/TitlePage.module.css";

const TitleSection = () => {
  return (
    <section className={style.container}>
      <div>
        <h1 className={style.headline}>
          Ein Erfülltes
          <br /> Familienleben
        </h1>
        <p className={style.text}>
          Ich helfe Eltern mit Babys und Kleinkindern, ein erfülltes
          Familienleben zu führen: durch Achtsamkeit, echte Wertschätzung,
          Freude und Leichtigkeit, sowie durch eine individuelle Frühförderung
          und Familiencoaching
        </p>
      </div>
    </section>
  );
};

export default TitleSection;
