import { motion } from "framer-motion";

// data
import { navbarData } from "../data/navbarData";

// style
import style from "../styles/Menu.module.css";

const Menu = ({ handleMenu, showMenu }) => {
  const menuToggle = {
    open: {
      y: "0%",
      transition: { bounce: 0, ease: "easeOut", duration: 0.3 },
      skewY: [5, 0],
    },
    close: {
      y: "-120%",
      transition: { bounce: 0, ease: "easeOut", duration: 0.3, delay: 1.5 },
      skewY: [0, 5],
    },
    itemOpen: (i) => ({
      opacity: 1,
      transition: {
        delay: (i + 1) * 0.3,
      },
    }),

    itemClose: (i) => ({
      opacity: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    <motion.div
      className={`${style.container}`}
      initial={{ y: "-100%" }}
      animate={showMenu ? "open" : "close"}
      variants={menuToggle}
    >
      <div>
        <div className={style.close} onClick={handleMenu}></div>
        <nav className={style.menuListContainer}>
          <ul className={style.menuList}>
            {navbarData.map((item, i) => (
              <motion.li
                key={item.id}
                className={style.menuListItem}
                initial={{ opacity: 0 }}
                custom={i}
                animate={showMenu ? "itemOpen" : "itemClose"}
                variants={menuToggle}
              >
                {item.title}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Menu;
