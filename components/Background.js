import style from "../styles/Background.module.css";
import { motion } from "framer-motion";

const Background = ({ children }) => {
  const bgAnimation = {
    bubbleOne: {
      x: [
        "0vw",
        "10vw",
        "30vw",
        "80vw",
        "15vw",
        "40vw",
        "80vw",
        "10vw",
        "40vw",
        "3vw",
        "40vw",
        "90vw",
        "60vw",
      ],
      y: [
        "0vh",
        "40vh",
        "50vh",
        "80vh",
        "80vh",
        "0vh",
        "10vh",
        "80vh",
        "40vh",
        "3vh",
        "40vh",
        "20vh",
        "60vh",
      ],
      transition: { bounce: 0, ease: "easeOut", duration: 300 },
    },
    bubbleTwo: {
      x: [
        "60vw",
        "90vw",
        "40vw",
        "3vw",
        "40vw",
        "10vw",
        "80vw",
        "40vw",
        "15vw",
        "80vw",
        "30vw",
        "10vw",
        "0vw",
      ],
      y: [
        "30vh",
        "40vh",
        "80vh",
        "10vh",
        "40vh",
        "0vh",
        "20vh",
        "80vh",
        "60vh",
        "80vh",
        "50vh",
        "40vh",
        "0vh",
      ],
      transition: { bounce: 0, ease: "easeOut", duration: 300 },
    },
  };

  return (
    <>
      <div className={style.container}>
        <motion.div
          className={style.bubbleOne}
          initial={{ x: "0vw", y: "0vh" }}
          animate="bubbleOne"
          variants={bgAnimation}
        ></motion.div>
        <motion.div
          className={style.bubbleTwo}
          initial={{ x: "60vw", y: "30vh" }}
          animate="bubbleTwo"
          variants={bgAnimation}
        ></motion.div>
      </div>
      {children}
    </>
  );
};

export default Background;
