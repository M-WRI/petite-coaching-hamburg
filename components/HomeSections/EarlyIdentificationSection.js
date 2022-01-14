import ImageSquare from "../utils/ImageSquare";
import InfoBoxSquare from "../utils/InfoBoxSquare";

const EarlyIdentification = () => {
  const data = {
    imageOne: {
      src: "/images/start-frühförderung-1.jpg",
      alt: "teresa jäger frühförderung hamburg",
      type: "early-image-one",
    },
    imageTwo: {
      src: "/images/start-frühförderung-2.jpg",
      alt: "teresa jäger frühförderung hamburg",
      type: "early-image-two",
    },
    infoBox: {
      title: "Frühförderung",
      text: "Jedes Kind entwickelt sich einzigartig. Wir entwickeln eine einzigartige Förderung",
    },
  };

  return (
    <section className="early-container">
      <ImageSquare
        src={data.imageOne.src}
        alt={data.imageOne.alt}
        type={data.imageOne.type}
        pos={65}
      />
      <div className="early-content-box">
        <div className="early-infobox">
          <InfoBoxSquare
            color="blue"
            title={data.infoBox.title}
            text={data.infoBox.text}
          />
        </div>
        <ImageSquare
          src={data.imageTwo.src}
          alt={data.imageTwo.alt}
          type={data.imageTwo.type}
        />
      </div>
    </section>
  );
};

export default EarlyIdentification;
