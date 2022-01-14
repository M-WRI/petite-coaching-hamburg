import CoverImage from "../utils/CoverImage";

// style
import Headline from "../utils/Headline";

const LandingSection = () => {
  const headline = "Petite Coaching";
  const subHead = "Ein erfülltes  Familienleben";

  const image = {
    src: "/images/petite-coaching-landing-image.jpg",
    alt: "petite coaching frühförderung familien coaching babykurse in hamburg",
  };

  return (
    <section className="landing-container">
      <div className="head-container">
        <Headline subHead={subHead}>{headline}</Headline>
      </div>
      <CoverImage src={image.src} alt={image.alt} overlay={true} pos={40} />
    </section>
  );
};

export default LandingSection;
