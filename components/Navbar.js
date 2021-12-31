import { useState } from "react";

import Image from "next/image";

// style
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <Image
          src="/images/petite-coaching-logo.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <div className={style.hamburger}>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
    </nav>
  );
};

export default Navbar;
