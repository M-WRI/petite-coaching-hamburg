import InfoBox from "../utils/InfoBox";
import CoverImage from "../utils/CoverImage";

// style

const AboutMe = () => {
  const data = {
    title: "Teresa Jäger",
    text: "Ich bin Pädagogin, B.A. Transdisziplinäre Frühförderin und Gründerin von Petite Coaching Hamburg.",
  };

  const image = {
    src: "/images/petite-coaching-about-me-image.jpg",
    alt: "petite coaching teresa jäger sozialpä",
  };

  return (
    <section className="about-container">
      <div className="info-box-container">
        <InfoBox title={data.title} text={data.text} />
      </div>
      <div className="image-container">
        <CoverImage src={image.src} alt={image.alt} pos={50} overlay={true} />
      </div>
    </section>
  );
};

export default AboutMe;
