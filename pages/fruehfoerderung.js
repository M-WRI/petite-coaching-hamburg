import InfoSectionTwo from "../components/EarlyIdentificationSections/InfoSectionTwo";
import InfoSectionOne from "../components/EarlyIdentificationSections/InfoSectionOne";
import LandingSection from "../components/EarlyIdentificationSections/LandingSection";
import Head from "next/head";

const fruehfoerderung = () => {
  return (
    <>
      <Head>
        <title>Petit Coaching | Frühförderung | Hamburg</title>
        <meta
          name="description"
          content="Frühförderung von Anfang an – denn die ersten Lebensjahre Ihres Kindes sind entscheidend für Entwicklung, Wohlbefinden und Gesundheit."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.petitecoaching.de/fruehfoerderung"
        />
        <meta
          property="og:title"
          content="Petit Coaching | Frühförderung | Hamburg"
        />
        <meta
          property="og:description"
          content="Frühförderung von Anfang an – denn die ersten Lebensjahre Ihres Kindes sind entscheidend für Entwicklung, Wohlbefinden und Gesundheit."
        />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="/images/petit-coaching-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://www.petitecoaching.de/fruehfoerderung"
        />
        <meta
          name="twitter:title"
          content="Petit Coaching | Frühförderung | Hamburg"
        />
        <meta
          name="twitter:description"
          content="Frühförderung von Anfang an – denn die ersten Lebensjahre Ihres Kindes sind entscheidend für Entwicklung, Wohlbefinden und Gesundheit."
        />
        <meta
          name="twitter:image"
          content="/images/petit-coaching-og-twitter.jpg"
        />
      </Head>
      <LandingSection />
      <InfoSectionOne />
      <InfoSectionTwo />
    </>
  );
};

export default fruehfoerderung;
