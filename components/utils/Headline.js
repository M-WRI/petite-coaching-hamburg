import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// style
import style from "../../styles/Headline.module.css";

const Headline = ({
  children,
  primary = true,
  subHead = "",
  wordbreak = false,
  type = "",
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = {
    char: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i + 1) * 0.05,
      },
    }),

    charII: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + (i + 1) * 0.05,
      },
    }),

    subHead: (i) => ({
      opacity: 1,
      transition: {
        delay: 1 + i * 0.1,
      },
    }),
  };

  const animationControl = useAnimation();
  const animationControlII = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControl.start("char");
      animationControlII.start("charII");
    }
  }, [inView, animationControl, animationControlII]);

  return (
    <>
      {primary ? (
        <>
          <h1 ref={ref} className={style.primaryHead}>
            {children.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial={{ opacity: 0, y: "50%" }}
                animate={
                  type === "partII" ? animationControlII : animationControl
                }
                variants={animation}
                className={style.char}
              >
                {char === " " ? <span className={style.space}></span> : char}
              </motion.span>
            ))}
          </h1>
          {subHead && (
            <span className={style.subHead}>
              {subHead.split("  ").map((item, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial={{ opacity: 0 }}
                  animate="subHead"
                  variants={animation}
                >
                  {item}
                </motion.span>
              ))}
            </span>
          )}
        </>
      ) : (
        <h2
          ref={ref}
          className={wordbreak ? style.secondaryHeadBreak : style.secondaryHead}
        >
          {wordbreak
            ? children.split("  ").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial={{ opacity: 0, y: "50%" }}
                  animate={animationControl}
                  variants={animation}
                  className={style.char}
                >
                  {char === " " ? <span className={style.space}></span> : char}
                </motion.span>
              ))
            : children.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial={{ opacity: 0, y: "50%" }}
                  animate={animationControl}
                  variants={animation}
                  className={style.char}
                >
                  {char === " " ? <span className={style.space}></span> : char}
                </motion.span>
              ))}
        </h2>
      )}
    </>
  );
};

export default Headline;
