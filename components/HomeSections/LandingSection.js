import { motion } from "framer-motion";

// style
import Headline from "../utils/Headline";

const LandingSection = () => {
  const headline = "Petite Coaching";
  const subHead = "Ein erfülltes  Familienleben";

  const landingAnimation = {
    image: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="landing-container">
      <div className="head-container">
        <Headline subHead={subHead}>{headline}</Headline>
      </div>
      <motion.div
        className="image-landing"
        initial={{ opacity: 0, y: "50%" }}
        animate="image"
        variants={landingAnimation}
      ></motion.div>
    </section>
  );
};

export default LandingSection;
