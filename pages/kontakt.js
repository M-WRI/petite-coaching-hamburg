import { meta } from "../data/contactData";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

// style
import style from "../styles/Kontakt.module.css";

// components
import SEO from "../components/SEO";

const kontakt = () => {
  const { title, description, link, img, imgTwitter } = meta;

  return (
    <>
      <SEO
        title={title}
        description={description}
        link={link}
        img={img}
        imgTwitter={imgTwitter}
      />
      <section className={style.container}>
        <div className={style.wrapper}>
          <div className={style.formContainer}>
            <form>
              <input className={style.input} type="text" placeholder="Name" />
              <div className={style.inputWrapper}>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Email"
                />
                <input
                  className={style.input}
                  type="text"
                  placeholder="Telefon"
                />
              </div>
              <div className={style.controlGroup}>
                <label className={`${style.control} ${style.controlRadio}`}>
                  Frühförderung
                  <input
                    type="radio"
                    name="radio"
                    value="frühförderung"
                    checked="checked"
                  />
                  <div className={style.controlIndicator}></div>
                </label>

                <label className={`${style.control} ${style.controlRadio}`}>
                  Familiencoaching
                  <input type="radio" name="radio" value="familiencoaching" />
                  <div className={style.controlIndicator}></div>
                </label>
              </div>
              <textarea
                className={style.textarea}
                rows="1"
                placeholder="Nachricht..."
              ></textarea>
              <button className={style.button} type="submit">
                Senden
              </button>
            </form>
          </div>
          <div className={style.contactContainer}>
            <h3 className={style.footerName}>Teresa Jäger</h3>
            <div className={style.iconsContainer}>
              <Link href="mailto:hello@petite-coaching-hamburg.de">
                <a>
                  <div className={style.iconWrapper}>
                    <AiOutlineMail />
                  </div>
                  hello@petite-coaching-hamburg.de
                </a>
              </Link>

              <Link
                href="https://www.instagram.com/petite.coaching.hamburg/"
                passHref={true}
              >
                <a target="_blank">
                  <div className={style.iconWrapper}>
                    <AiOutlineInstagram />
                  </div>
                  @petite.coaching.hamburg
                </a>
              </Link>

              <Link href="tel:+4915735361322">
                <a>
                  <div className={style.iconWrapper}>
                    <AiOutlinePhone />
                  </div>
                  +49 1573 53 61 32 2
                </a>
              </Link>

              <Link
                href="https://www.linkedin.com/in/teresa-j%C3%A4ger-773a2a1ba/"
                passHref={true}
              >
                <a target="_blank">
                  <div className={style.iconWrapper}>
                    <AiOutlineLinkedin />
                  </div>
                  Teresa Jäger
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default kontakt;
