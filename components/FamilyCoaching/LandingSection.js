import Headline from "../utils/Headline";
import ImageSquare from "../utils/ImageSquare";
import Text from "../utils/Text";

const LandingSection = () => {
  const data = {
    title: "Familiencoaching",
    introText:
      "Das schönste Wunder der Welt kann uns auch mal vor die größten Herausforderungen stellen. Ich möchte Sie dabei begleiten, die Freude am Elternsein (wieder) zu finden und die Leichtigkeit in Ihr Familienleben zurückzubringen.",
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
