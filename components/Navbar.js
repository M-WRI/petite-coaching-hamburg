import { useState } from "react";

import Image from "next/image";

// style
import style from "../styles/Navbar.module.css";
import Menu from "./Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={style.navbar}>
        <div>
          <Image
            src="/images/petite-coaching-logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className={style.hamburger} onClick={handleMenu}>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </nav>
      <Menu showMenu={showMenu} handleMenu={handleMenu} />
    </>
  );
};

export default Navbar;
