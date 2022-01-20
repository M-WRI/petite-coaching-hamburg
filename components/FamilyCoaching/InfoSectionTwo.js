import ImageSquare from "../utils/ImageSquare";
import InfoBox from "../utils/InfoBoxSquare";

const InfoSectionTwo = () => {
  const data = {
    infoBoxTwo: {
      text: "Auch besondere Herausforderungen, auffälliges Verhalten in der Kita oder zu Hause können wir in einem individuellen Coaching bearbeiten. Ein Coaching hilft Ihnen dabei, wenn Sie wieder zu Ihrer elterlichen Intuition zurückfinden wollen. Raus aus dem Ratgeber-Dschungel hin zu individueller Beratung und Coaching. Sind Sie bereit, ein erfülltes Familienleben zu führen und wirklich im Einklang mit Ihrem Kind zu sein? Ich freue mich darauf, Ihre kleinen Schätze und Sie kennenzulernen. Get in Touch für ein kostenloses und unverbindliches Erstgespräch ",
    },
    imageTwo: {
      src: "/images/fühförderung-page-image-two.jpg",
      alt: "frühförderung zu ihnen nach hause",
      type: "early-identification-image-two",
    },
  };

  return (
    <section className="ealry-info-section-two-container">
      <div className="ealry-info-box-container">
        <InfoBox color="blue" text={data.infoBoxTwo.text} />
      </div>
      <ImageSquare
        src={data.imageTwo.src}
        alt={data.imageTwo.alt}
        type={data.imageTwo.type}
      />
    </section>
  );
};

export default InfoSectionTwo;
