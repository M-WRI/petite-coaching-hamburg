// import Image from "next/image";
import Headline from "../utils/Headline";
import ImageSquare from "../utils/ImageSquare";
import Text from "../utils/Text";

const LandingSection = () => {
  const data = {
    title: "Früförderung",
    introText:
      "Frühförderung von Anfang an – denn die ersten Lebensjahre Ihres Kindes sind entscheidend für Entwicklung, Wohlbefinden und Gesundheit. So Vielfältig wie jedes einzelne Kind ist auch der Alltag mit Petite Coaching Hamburg: Spielen, Entdecken, Singen, Krabbeln, Tanzen, Wachsen, Erforschen, Sprechen, Brabbeln, Gebärden und so vieles mehr.  Wir setzen uns erreichbare Ziele: in kleinen Schritten und mit großer Wirkung. Jedes Kind entwickelt sich einzigartig. Mit Ihnen entwickle ich eine einzigartige Förderung.",
    imageOne: {
      src: "/images/frühförderung-title-image.jpg",
      alt: "frühförderung für babys und kleinkinder",
      type: "early-identification-image-one",
    },
  };
  return (
    <section className="early-identification-container">
      <ImageSquare
        src={data.imageOne.src}
        alt={data.imageOne.alt}
        type={data.imageOne.type}
        pos={65}
      />
      <div className="early-identification-landing-content">
        <Headline primary={false}>{data.title}</Headline>
        <Text center={true}>{data.introText}</Text>
      </div>
    </section>
  );
};

export default LandingSection;
