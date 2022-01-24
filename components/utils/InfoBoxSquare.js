import Text from "./Text";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// style
import style from "../../styles/InfoBoxSquare.module.css";

const InfoBoxSquare = ({ color = "orange", title = "", text = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = {
    box: {
      opacity: 1,
    },
  };
  const animationControll = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControll.start("box");
    }
  }, [inView, animationControll]);

  return (
    <>
      <div ref={ref} style={{ position: "absolute", top: "50px" }} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={animationControll}
        variants={animation}
        style={{
          background: color === "orange" ? "#F7D3C7" : "#A3B1C0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        {title && (
          <div className={style.headWrapper}>
            <h2 className={style.head}>{title}</h2>
          </div>
        )}
        <div className={style.textWrapper}>
          <Text center={true}>{text}</Text>
        </div>
      </motion.div>
    </>
  );
};

export default InfoBoxSquare;
