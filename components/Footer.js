// style
import style from "../styles/Footer.module.css";

// components
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className={style.container}>
      <ContactForm />
    </footer>
  );
};

export default Footer;
