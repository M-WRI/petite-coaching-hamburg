import { motion } from "framer-motion";

// style
import style from "../../styles/LandingSection.module.css";

const LandingSection = () => {
  const headline = "Petite Coaching";
  const subHead = "Ein erfülltes  Familienleben";

  const landingAnimation = {
    char: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i + 1) * 0.05,
      },
    }),

    subHead: (i) => ({
      opacity: 1,
      transition: {
        delay: 1 + i * 0.1,
      },
    }),

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
    <section className={style.container}>
      <div className={style.headContainer}>
        <h1 className={style.charContainer}>
          {headline.split("").map((char, i) => {
            return (
              <motion.span
                key={i}
                className={style.char}
                custom={i}
                initial={{ opacity: 0, y: "50%" }}
                animate="char"
                variants={landingAnimation}
              >
                {char === " " ? <span className={style.space}></span> : char}
              </motion.span>
            );
          })}
        </h1>
        <span className={style.subHead}>
          {/* doublespace breaks the line */}
          {subHead.split("  ").map((item, i) => (
            <motion.span
              key={i}
              custom={i}
              initial={{ opacity: 0 }}
              animate="subHead"
              variants={landingAnimation}
            >
              {item}
            </motion.span>
          ))}
        </span>
      </div>
      <motion.div
        className={style.image}
        initial={{ opacity: 0, y: "50%" }}
        animate="image"
        variants={landingAnimation}
      ></motion.div>
    </section>
  );
};

export default LandingSection;
