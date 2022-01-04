import Background from "../components/Background";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Background>
        <Navbar />
        <Component {...pageProps} />
      </Background>
    </>
  );
}

export default MyApp;
