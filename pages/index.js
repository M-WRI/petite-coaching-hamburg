// components
import EarlyIdentification from "../components/EarlyIdentification";
import InstagramSection from "../components/InstagramSection";
import LandingSection from "../components/LandingSection";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <LandingSection />
      <EarlyIdentification />
      <InstagramSection />
    </main>
  );
}
