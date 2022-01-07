import Head from "next/head";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
        <main style={{ position: "relative", zIndex: 1 }}>
          <Component {...pageProps} />
        </main>
      </Background>
    </>
  );
}

export default MyApp;
