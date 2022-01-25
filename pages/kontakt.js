import { meta } from "../data/contactData";

// components
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

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
      <ContactForm />
    </>
  );
};

export default kontakt;
