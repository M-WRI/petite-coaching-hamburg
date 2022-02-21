import React from "react";
import style from "../styles/dsgvo.module.css";

const Impressum = () => {
  return (
    <>
      <div className={style.container}>
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Teresa J&auml;ger
          <br />
          Petite Coaching Hamburg
          <br />
          Jagersredder 17
          <br />
          22397 Hamburg
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 1567 820 051 8<br />
          E-Mail: hello@petite-coaching-hamburg.de
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </>
  );
};

export default Impressum;
