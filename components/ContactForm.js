import { useState, useEffect } from "react";
import { data } from "../data/contactData";

import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

// style
import style from "../styles/Kontakt.module.css";

const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState({ mes: "", state: false });
  const [dsgvo, setDsgvo] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDsgvo = () => {
    setDsgvo(!dsgvo);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || formData.name === "") {
      return setMessage({
        mes: "Bitte nennen Sie mir ihren Namen",
        state: false,
      });
    }
    if (
      (!formData.email || formData.email === "") &&
      (!formData.phone || formData.phone === "")
    ) {
      return setMessage({
        mes: "Bitte nennen Sie mir ihre Telefonnummer oder Email, damit ich sie erreichen kann.",
      });
    }

    if (formData.email) {
      if (!regex.test(formData.email))
        return setMessage({
          mes: "Bitte tippen Sie eine gültige Emailadresse ein",
          state: false,
        });
    }
    if (!formData.reason) {
      setFormData({
        ...formData,
        reason: "Keine Angabe ob Frühförderung oder Familiencoaching",
        state: false,
      });
    }

    if (!formData.message || formData.message === "") {
      return setMessage({
        mes: "Bitte schreiben Sie eine Nachricht",
        state: false,
      });
    }

    try {
      setMessage({
        mes: "Die Nachricht wurde erfolgreich versendet!",
        state: true,
      });

      fetch("api/sendEmail", {
        method: "post",
        body: JSON.stringify(formData),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
      });

      setDsgvo(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage({
        mes: "",
        state: false,
      });
    }, 5000);
  }, [message.mes]);

  return (
    <section className={style.container}>
      <h2>
        {data.title.split("  ").map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </h2>

      <div className={style.wrapper}>
        <div className={style.formContainer}>
          <form method="post" onSubmit={handleOnSubmit}>
            <input
              onChange={(e) => handleChange(e)}
              className={style.input}
              name="name"
              type="text"
              placeholder="Name"
            />
            <div className={style.inputWrapper}>
              <input
                className={style.input}
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <input
                className={style.input}
                type="text"
                placeholder="Telefon"
                name="phone"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={style.controlGroup}>
              <label className={`${style.control} ${style.controlRadio}`}>
                Frühförderung
                <input
                  type="radio"
                  name="reason"
                  value="Frühförderung"
                  checked={formData.reason === "Frühförderung"}
                  onChange={(e) => handleChange(e)}
                />
                <div className={style.controlIndicator}></div>
              </label>

              <label className={`${style.control} ${style.controlRadio}`}>
                Familiencoaching
                <input
                  type="radio"
                  name="reason"
                  value="Familiencoaching"
                  checked={formData.reason === "Familiencoaching"}
                  onChange={(e) => handleChange(e)}
                />
                <div className={style.controlIndicator}></div>
              </label>
            </div>
            <textarea
              className={style.textarea}
              rows="1"
              placeholder="Nachricht..."
              name="message"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <div className={style.dsgvoContainer}>
              <div
                className={`${style.radio} ${dsgvo && style.radioActive}`}
                onClick={handleDsgvo}
              ></div>
              <p>
                Bitte bestätigen sie mit der
                <Link href="/dsgvo">
                  <a>
                    <span className={style.dsgvoLink}> DSGVO </span>
                  </a>
                </Link>
                einverstanden sind
              </p>
            </div>
            <button className={style.button} type="submit" disabled={!dsgvo}>
              Senden
            </button>
            {message && <p className={style.message}>{message.mes}</p>}
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
                <span className={style.span}>
                  hello@petite-coaching-hamburg.de
                </span>
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
                <span className={style.span}>@petite.coaching.hamburg</span>
              </a>
            </Link>

            <Link href="tel:+4915735361322">
              <a>
                <div className={style.iconWrapper}>
                  <AiOutlinePhone />
                </div>
                <span className={style.span}>+49 1573 53 61 32 2</span>
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
                <span className={style.span}>Teresa Jäger</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Link href="/impressum">
          <a></a>
        </Link>
      </div>
    </section>
  );
};

export default ContactForm;
