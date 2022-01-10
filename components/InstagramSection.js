import Image from "next/image";

// style
import style from "../styles/InstagramSection.module.css";

const InstagramSection = () => {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <h2 className={style.contentHead}>Instagram</h2>
        <Image src="/images/arrow-down.svg" alt="logo" width={36} height={36} />
      </div>
      <div className={style.imageContainer}>
        <div className={style.image}>Image</div>
        <div className={style.image}>Image</div>
        <div className={style.image}>Image</div>
        <div className={style.image}>Image</div>
      </div>
    </div>
  );
};

export default InstagramSection;
