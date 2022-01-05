import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";

// style
import style from "../styles/InstagramSection.module.css";

const InstagramSection = () => {
  const images = [{ img: "1" }, { img: "2" }, { img: "3" }, { img: "4" }];

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const animation = {
    appear: (i) => ({
      opacity: 1,
      transition: {
        delay: (i + 1) * 0.3,
      },
    }),

    instaButton: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  const animationControl = useAnimation();
  const buttonControll = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControl.start("appear");
      buttonControll.start("instaButton");
    }
  }, [inView, animationControl, buttonControll]);

  return (
    <section ref={ref} className={style.container}>
      <div className={style.feedContainer}>
        {images.map((image, i) => (
          <motion.div
            key={i}
            className={style.image}
            initial={{ opacity: 0 }}
            custom={i}
            animate={animationControl}
            variants={animation}
          ></motion.div>
        ))}
      </div>
      <motion.div
        className={style.button}
        initial={{ opacity: 0, y: "50%" }}
        animate={buttonControll}
        variants={animation}
      >
        <div className={style.buttonContent}>
          <span className={style.contentHead}>Instagram</span>
          <Image
            src="/images/arrow-down.svg"
            alt="logo"
            width={36}
            height={36}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default InstagramSection;
