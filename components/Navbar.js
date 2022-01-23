import { useState } from "react";

import Image from "next/image";

// style
import style from "../styles/Navbar.module.css";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={style.navbar}>
        <Link href="/">
          <a>
            <div className={style.logoContainer}>
              <Image
                src="/images/petite-coaching-logo.svg"
                alt="logo"
                width={50}
                height={50}
                priority="true"
              />
            </div>
          </a>
        </Link>
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
