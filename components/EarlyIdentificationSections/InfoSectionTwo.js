import ImageSquare from "../utils/ImageSquare";
import InfoBox from "../utils/InfoBoxSquare";

const InfoSectionTwo = () => {
  const data = {
    infoBoxTwo: {
      text: "Die Hauptrolle im Leben Ihres Kindes spielen Sie. Die Verbundenheit zwischen Ihnen und Ihrem Kind ist so wertvoll. Daher sind Sie auch in der Frühförderung unerlässlich. Ich berate Sie und gebe Ihnen mein wertvolles Know-How weiter: wie Sie Ihr Kind bedürfnisorientiert in seiner Entwicklung fördern und begleiten, wie Sie besondere Herausforderungen meistern und den Blick auf die Besonderheiten und Einzigartigkeiten Ihres Kindes richten. Zuhause ist es am Schönsten: Deswegen komme ich für die Frühförderung gerne zu Ihnen. In vertrauter Umgebung ist die Frühförderung am wirksamsten und Sie entfliehen dem Terminstress -> Mehr entspannte Qualitätszeit für Sie und Ihre Kleinen.",
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
