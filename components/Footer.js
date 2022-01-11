import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

// style
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.container}>
      <h2 className={style.head}>
        Kontaktiere <br /> mich über
      </h2>
      <div className={style.wrapper}>
        <div className={style.contactContainer}>
          <h3 className={style.footerName}>Teresa Jäger</h3>
          <div className={style.iconsContainer}>
            <div className={style.iconWrapper}>
              <AiOutlineMail />
            </div>

            <div className={style.iconWrapper}>
              <AiOutlinePhone />
            </div>

            <div className={style.iconWrapper}>
              <AiOutlineInstagram />
            </div>

            <div className={style.iconWrapper}>
              <AiOutlineLinkedin />
            </div>
          </div>
        </div>
        <div className={style.formContainer}>
          <form>
            <div className={style.name}>
              <input type="text" placeholder="Vorname" />
              <input type="text" placeholder="Nachname" />
            </div>
            <div>
              <div>
                <input type="radio" value="Male" name="service" /> Frühförderung
              </div>
              <div>
                <input type="radio" value="Male" name="service" />{" "}
                Familiencoaching
              </div>
              <div>
                <input type="radio" value="Male" name="service" /> Babykurse
              </div>
            </div>
            <textarea
              className={style.textarea}
              rows="10"
              placeholder="Nachricht..."
            ></textarea>
            <button type="submit">Senden</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
