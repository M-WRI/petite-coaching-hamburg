import Head from "next/head";

// components
import AboutMe from "../components/HomeSections/AboutMeSection";
import EarlyIdentification from "../components/HomeSections/EarlyIdentificationSection";
import ExpertiseSection from "../components/HomeSections/ExpertiseSection";
import InstagramSection from "../components/HomeSections/InstagramSection";
import LandingSection from "../components/HomeSections/LandingSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Petit Coaching | Frühförderung | Hamburg</title>
        <meta
          name="description"
          content="Sie sind Eltern und Sie wünschen sich ein erfülltes Familienleben und die bestmögliche Entwicklung für das Wertvollste in Ihrem Leben: für Ihr Kind."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.petitecoaching.de/" />
        <meta
          property="og:title"
          content="Petit Coaching | Frühförderung | Familien Coaching | Babykurse | Hamburg"
        />
        <meta
          property="og:description"
          content="Sie sind Eltern und Sie wünschen sich ein erfülltes Familienleben und die bestmögliche Entwicklung für das Wertvollste in Ihrem Leben: für Ihr Kind."
        />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="/images/petit-coaching-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.petitecoaching.de/" />
        <meta
          name="twitter:title"
          content="Petit Coaching | Frühförderung | Familien Coaching | Babykurse | Hamburg"
        />
        <meta
          name="twitter:description"
          content="Sie sind Eltern und Sie wünschen sich ein erfülltes Familienleben und die bestmögliche Entwicklung für das Wertvollste in Ihrem Leben: für Ihr Kind."
        />
        <meta
          name="twitter:image"
          content="/images/petit-coaching-og-twitter.jpg"
        />
      </Head>
      <LandingSection />
      <EarlyIdentification />
      <ExpertiseSection />
      <InstagramSection />
      <AboutMe />
    </>
  );
}
