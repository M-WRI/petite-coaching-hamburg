import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// style
import style from "../../styles/ImageSquare.module.css";

const ImageSquare = ({ src, alt, type, pos = 50 }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = {
    image: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };
  const animationControll = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControll.start("image");
    }
  }, [inView, animationControll]);

  return (
    <>
      <div ref={ref} />
      <motion.div
        className={type}
        initial={{ opacity: 0, y: "100%" }}
        animate={animationControll}
        variants={animation}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          property="true"
          objectFit="cover"
          objectPosition={`${pos}%`}
        />
      </motion.div>
    </>
  );
};

export default ImageSquare;
