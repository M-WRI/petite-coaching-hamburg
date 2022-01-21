import Head from "next/head";
import { useRouter } from "next/router";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="frühförderung, familiencoaching, babykurse, teresa jäger, baby, kleinkind"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Moritz Wright" />
        <link
          rel="preload"
          href="/fonts/Callingstone/Callingstone.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Callingstone/Callingstone.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Callingstone/Callingstone.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Background>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        {/* {path !== "kontakt" && <Footer />} */}
      </Background>
    </>
  );
}

export default MyApp;
