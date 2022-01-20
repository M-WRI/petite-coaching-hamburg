import InfoSectionTwo from "../components/FamilyCoaching/InfoSectionTwo";
import InfoSectionOne from "../components/FamilyCoaching/InfoSectionOne";
import LandingSection from "../components/FamilyCoaching/LandingSection";
import Head from "next/head";

const fruehfoerderung = () => {
  return (
    <>
      <Head>
        <title>Petit Coaching | Familiencoaching | Hamburg</title>
        <meta
          name="description"
          content="Das schönste Wunder der Welt kann uns auch mal vor die größten Herausforderungen stellen. Ich möchte Sie dabei begleiten, die Freude am Elternsein zu finden"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.petitecoaching.de/familiencoaching"
        />
        <meta
          property="og:title"
          content="Petit Coaching | Familiencoaching | Hamburg"
        />
        <meta
          property="og:description"
          content="Das schönste Wunder der Welt kann uns auch mal vor die größten Herausforderungen stellen. Ich möchte Sie dabei begleiten, die Freude am Elternsein zu finden"
        />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="/images/petit-coaching-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://www.petitecoaching.de/familiencoaching"
        />
        <meta
          name="twitter:title"
          content="Petit Coaching | Familiencoaching | Hamburg"
        />
        <meta
          name="twitter:description"
          content="Das schönste Wunder der Welt kann uns auch mal vor die größten Herausforderungen stellen. Ich möchte Sie dabei begleiten, die Freude am Elternsein zu finden"
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
