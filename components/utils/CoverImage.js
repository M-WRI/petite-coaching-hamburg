import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// style
import style from "../../styles/CoverImage.module.css";

const CoverImage = ({ alt, src, pos = 50, overlay = false }) => {
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

  const animationControl = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControl.start("image");
    }
  }, [inView, animationControl]);

  return (
    <motion.div
      ref={ref}
      className={style.image}
      initial={{ opacity: 0, y: "50%" }}
      animate={animationControl}
      variants={animation}
    >
      <div style={{ position: "relative", height: "100%" }}>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          priority="true"
          objectFit="cover"
          objectPosition={`${pos}%`}
        />
        {overlay && <div className={style.overlay}></div>}
      </div>
    </motion.div>
  );
};

export default CoverImage;
