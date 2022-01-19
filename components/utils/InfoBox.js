import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Headline from "./Headline";
import Text from "./Text";

// style
import style from "../../styles/InfoBox.module.css";

const InfoBox = ({ color = "orange", title = "", text = "", wordbreak }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = {
    box: {
      opacity: 1,
      transition: { bounce: 0, ease: "easeOut", duration: 0.5, delay: 0.3 },
    },
  };
  const animationControll = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControll.start("box");
    }
  }, [inView, animationControll]);

  return (
    <div ref={ref}>
      <div className={style.headWrapper}>
        <Headline primary={false} wordbreak={wordbreak}>
          {title}
        </Headline>
      </div>
      <motion.div
        className={style.textWrapper}
        style={{
          background: color === "orange" ? "#F7D3C7" : "#A3B1C0",
        }}
        initial={{ opacity: 0 }}
        animate={animationControll}
        variants={animation}
      >
        <Text center={true}>{text}</Text>
      </motion.div>
    </div>
  );
};

export default InfoBox;
