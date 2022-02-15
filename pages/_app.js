import Head from "next/head";
import { useRouter } from "next/router";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GANALYT}`}
      />
      <Script id="google-analytics-id" strategy="lazyOnload">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${process.env.GANALYT}', {
            page_path: window.location.pathname,
           });
        `}
      </Script>
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
          type="font/ttf"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/fonts/Callingstone/Callingstone.woff"
          as="font"
          type="font/woff"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/fonts/Callingstone/Callingstone.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </Head>
      <Background>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        {(path !== "kontakt" || path !== "dsgvo") && <Footer />}
      </Background>
    </>
  );
}

export default MyApp;
