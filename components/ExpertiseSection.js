// style
import style from "../styles/ExpertiseSection.module.css";
import LinkBox from "./LinkBox";

const ExpertiseSection = () => {
  const data = [
    {
      id: 1,
      title: "Familiencoaching",
      slug: "#",
      img: "/images/familiencoaching-1.jpg",
    },
    { id: 2, title: "Babykurse", slug: "#", img: "/images/babykurse-1.jpg" },
  ];

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
      {data.map((link) => (
        <LinkBox
          key={link.id}
          title={link.title}
          slug={link.slug}
          img={link.img}
        />
      ))}
    </section>
  );
};

export default ExpertiseSection;
