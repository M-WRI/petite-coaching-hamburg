import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";

// style
import style from "../styles/EarlyIdentification.module.css";

const EarlyIdentification = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const animation = {
    imageOne: {
      opacity: 1,
      y: "0%",
      transition: { bounce: 0, ease: "easeOut", duration: 0.5 },
    },

    imageTwo: {
      opacity: 1,
      y: "0%",
      transition: { bounce: 0, ease: "easeOut", duration: 0.5, delay: 0.3 },
    },

    box: {
      opacity: 1,
      transition: { bounce: 0, ease: "easeOut", duration: 0.5, delay: 0.7 },
    },
  };

  const imgOne = useAnimation();
  const imgTwo = useAnimation();
  const contBox = useAnimation();

  useEffect(() => {
    if (inView) {
      imgOne.start("imageOne");
      imgTwo.start("imageTwo");
      contBox.start("box");
    }
  }, [inView, imgOne, imgTwo, contBox]);

  return (
    <section ref={ref} className={style.container}>
      <motion.div
        className={style.image}
        initial={{ opacity: 0, y: "100%" }}
        animate={imgOne}
        variants={animation}
      >
        <Image
          src="/images/start-frühförderung-1.jpg"
          alt="Frühförderung"
          layout="fill"
          objectFit="cover"
          objectPosition="65%"
          priority={true}
        />
      </motion.div>
      <div className={style.contentContainer}>
        <motion.div
          className={style.contentInformation}
          initial={{ opacity: 0 }}
          animate={contBox}
          variants={animation}
        >
          <h2 className={style.contentHead}>Frühförderung</h2>
          <p className={style.contentText}>
            Jedes Kind entwickelt sich einzigartig Wir entwickeln eine
            einzigartige Förderung
          </p>
          <Image
            src="/images/arrow-down.svg"
            alt="logo"
            width={36}
            height={36}
          />
        </motion.div>
        <motion.div
          className={style.contentImage}
          initial={{ opacity: 0, y: "100%" }}
          animate={imgTwo}
          variants={animation}
        >
          <Image
            src="/images/start-frühförderung-2.jpg"
            alt="Frühförderung"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyIdentification;
