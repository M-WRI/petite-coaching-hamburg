import InfoBox from "../utils/InfoBox";

// style

const AboutMe = () => {
  const data = {
    title: "Teresa Jäger",
    text: "Ich bin Pädagogin, B.A. Transdisziplinäre Frühförderin und Gründerin von Petite Coaching Hamburg.",
  };

  return (
    <section className="about-container">
      <div className="info-box-container">
        <InfoBox title={data.title} text={data.text} />
      </div>
      <div className="image-container">
        <div className="image"></div>
      </div>
    </section>
  );
};

export default AboutMe;
