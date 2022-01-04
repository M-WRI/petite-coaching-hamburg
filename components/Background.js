import style from "../styles/Background.module.css";
import { motion } from "framer-motion";

const Background = ({ children }) => {
  const bgAnimation = {
    bubbleOne: {
      x: [
        "100vw",
        "80vw",
        "30vw",
        "150vw",
        "35vw",
        "22vw",
        "96vw",
        "76vw",
        "40vw",
        "3vw",
        "40vw",
        "123vw",
        "45vw",
      ],
      y: [
        "100vh",
        "80vh",
        "30vh",
        "150vh",
        "35vh",
        "22vh",
        "96vh",
        "76vh",
        "40vh",
        "3vh",
        "40vh",
        "123vh",
        "45vh",
      ],
      transition: { bounce: 0, ease: "easeOut", duration: 600 },
    },
    bubbleTwo: {
      x: [
        "0vw",
        "80vw",
        "70vw",
        "150vw",
        "35vw",
        "22vw",
        "120vw",
        "76vw",
        "40vw",
        "3vw",
        "40vw",
        "70vw",
        "45vw",
      ],
      y: [
        "0vw",
        "80vw",
        "70vw",
        "150vw",
        "35vw",
        "22vw",
        "120vw",
        "76vw",
        "40vw",
        "3vw",
        "40vw",
        "70vw",
        "45vw",
      ],
      transition: { bounce: 0, ease: "easeOut", duration: 600 },
    },
  };

  return (
    <>
      <div className={style.container}>
        {/* <motion.div
          className={style.bubbleOne}
          initial={{ x: "100vw", y: "100vh" }}
          animate="bubbleOne"
          variants={bgAnimation}
        ></motion.div>
        <motion.div
          className={style.bubbleTwo}
          initial={{ x: 0, y: 0 }}
          animate="bubbleTwo"
          variants={bgAnimation}
        ></motion.div> */}
      </div>
      {children}
    </>
  );
};

export default Background;
