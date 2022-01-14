import InfoBoxSquare from "../utils/InfoBoxSquare";

// style
import LinkBox from "../LinkBox";

const ExpertiseSection = () => {
  const data = {
    links: [
      {
        id: 1,
        title: "Familiencoaching",
        slug: "#",
        img: "/images/familiencoaching-1.jpg",
      },
      { id: 2, title: "Babykurse", slug: "#", img: "/images/babykurse-1.jpg" },
    ],
    info: {
      title: "Meine Expertise",
      text: "Ich arbeite nach den neusten wissenschaftlichen Erkenntnissen zum Thema frühkindliche Entwicklung und Förderung. Lernen ist ein lebenslanger Prozess – daher bilde ich mich regelmäßig weiter und lerne täglich dazu.",
    },
  };

  return (
    <section className="expertise-container">
      <div className="expertise-infobox">
        <InfoBoxSquare title={data.info.title} text={data.info.text} />
      </div>
      {data.links.map((link) => (
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
