// style
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <section className={style.landingPageContainer}>
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
        <div>
          <div className={style.imageOne}></div>
          <div className={style.imageTwo}></div>
        </div>
      </section>
    </main>
  );
}
