// components
import EarlyIdentification from "../components/EarlyIdentification";
import LandingSection from "../components/LandingSection";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <LandingSection />
      <EarlyIdentification />
    </main>
  );
}
