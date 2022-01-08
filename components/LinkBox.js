// style
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// style
import style from "../styles/LinkBox.module.css";

const LinkBox = ({ img, slug, title }) => {
  const { ref, inView } = useInView();

  const animation = {
    content: {
      opacity: 1,
      y: "0%",
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
    <Link href={slug}>
      <a ref={ref} className={style.link}>
        <motion.div
          className={style.container}
          initial={{ opacity: 0, y: "100%" }}
          variants={animation}
          animate={animationControl}
          priority="true"
        >
          <div className={style.overlay}></div>
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
          <div className={style.headWrapper}>
            <h1 className={style.title}>{title}</h1>
            <div className={style.overflow}>
              <div className={style.underline}></div>
            </div>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default LinkBox;
