// data
import { navbarData } from "../data/navbarData";

// style
import style from "../styles/Menu.module.css";

const Menu = ({ handleMenu, showMenu }) => {
  return (
    <div className={`${style.container} ${showMenu ? style.show : style.hide}`}>
      <div>
        <div className={style.close} onClick={handleMenu}></div>
        <nav className={style.menuListContainer}>
          <ul className={style.menuList}>
            {navbarData.map((item) => (
              <li key={item.id} className={style.menuListItem}>
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
