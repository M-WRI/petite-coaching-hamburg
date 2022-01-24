import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

// style
import style from "../styles/Menu.module.css";

const Menu = ({ handleMenu, showMenu }) => {
  const navbarData = [
    { id: "1", title: "home", link: "/" },
    { id: "2", title: "frühförderung", link: "/fruehfoerderung" },
    { id: "3", title: "familiencoaching", link: "/familiencoaching" },
    { id: "5", title: "über mich", link: "/ueber-mich" },
    { id: "6", title: "kontakt", link: "/kontakt" },
  ];

  const menuToggle = {
    open: {
      y: "0%",
      transition: { bounce: 0, ease: "easeOut", duration: 0.2 },
      skewY: [5, 0],
    },
    close: {
      y: "-120%",
      transition: { bounce: 0, ease: "easeOut", duration: 0.2, delay: 0.5 },
      skewY: [0, 5],
    },
    itemOpen: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i + 1) * 0.2,
      },
    }),

    itemClose: (i) => ({
      opacity: 0,
      y: "100%",
      transition: {
        delay: i * 0.1,
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
        <div className={style.close} onClick={handleMenu}>
          <AiOutlineClose />
        </div>
        <nav className={style.menuListContainer}>
          <ul className={style.menuList}>
            {navbarData.map((item, i) => (
              <li key={item.id} className={style.menuListItem}>
                <Link href={item.link}>
                  <a>
                    <div className={style.overflow}>
                      <motion.div
                        key={item.id}
                        className={style.menuListItem}
                        initial={{ opacity: 0, y: "100%" }}
                        custom={i}
                        animate={showMenu ? "itemOpen" : "itemClose"}
                        variants={menuToggle}
                        onClick={handleMenu}
                      >
                        {item.title}
                      </motion.div>
                      {showMenu && <div className={style.line}></div>}
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Menu;

{
  /* <Link href={item.link}>
<a>
  <div className={style.overflow}>
    <motion.li
      key={item.id}
      className={style.menuListItem}
      initial={{ opacity: 0, y: "100%" }}
      custom={i}
      animate={showMenu ? "itemOpen" : "itemClose"}
      variants={menuToggle}
      onClick={handleMenu}
    >
      {item.title}
    </motion.li>
    {showMenu && <div className={style.line}></div>}
  </div>
</a>
</Link> */
}
