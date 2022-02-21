import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
// import Script from "next/script";
import * as ga from "../googleAnalytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  console.log(path);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routerChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routerChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
      <Navbar />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              `}
      </Script>
      <Component {...pageProps} />
      {path === "kontakt" || path === "dsgvo" ? null : <Footer />}
    </>
  );
}

export default MyApp;
