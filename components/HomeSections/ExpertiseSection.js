// style
import style from "../../styles/ExpertiseSection.module.css";
import LinkBox from "../LinkBox";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ExpertiseSection = () => {
  const data = [
    {
      id: 1,
      title: "Familiencoaching",
      slug: "#",
      img: "/images/familiencoaching-1.jpg",
    },
    { id: 2, title: "Babykurse", slug: "#", img: "/images/babykurse-1.jpg" },
  ];

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = {
    content: {
      opacity: 1,
      transition: { bounce: 0, ease: "easeOut", duration: 0.5 },
    },
  };

  const animationControl = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControl.start("content");
    }
  }, [inView, animationControl]);

  return (
    <section className={style.container}>
      <motion.div
        ref={ref}
        className={style.contentContainer}
        initial={{ opacity: 0 }}
        animate={animationControl}
        variants={animation}
      >
        <h2 className={style.contentHead}>Meine Expertise</h2>
        <p className={style.contentText}>
          Ich arbeite nach den neusten wissenschaftlichen Erkenntnissen zum
          Thema frühkindliche Entwicklung und Förderung. Lernen ist ein
          lebenslanger Prozess – daher bilde ich mich regelmäßig weiter und
          lerne täglich dazu.
        </p>
      </motion.div>
      {data.map((link) => (
        <LinkBox
          key={link.id}
          title={link.title}
          slug={link.slug}
          img={link.img}
        />
      ))}
    </section>
  );
};

export default ExpertiseSection;
