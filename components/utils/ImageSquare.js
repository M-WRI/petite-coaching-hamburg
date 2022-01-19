import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ImageSquare = ({ src, alt, type, pos = 50 }) => {
  const { ref, inView } = useInView();

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
      <motion.div
        ref={ref}
        className={type}
        initial={{ opacity: 0, y: "50%" }}
        animate={animationControll}
        variants={animation}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          priority="true"
          objectFit="cover"
          objectPosition={`${pos}%`}
        />
      </motion.div>
    </>
  );
};

export default ImageSquare;
