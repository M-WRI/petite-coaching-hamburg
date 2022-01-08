// style
import Image from "next/image";
import Link from "next/link";
import style from "../styles/LinkBox.module.css";

const LinkBox = ({ img, slug, title }) => {
  return (
    <Link href={slug}>
      <a className={style.link}>
        <div className={style.container}>
          <div className={style.overlay}></div>
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
          <h1 className={style.title}>{title}</h1>
        </div>
      </a>
    </Link>
  );
};

export default LinkBox;
