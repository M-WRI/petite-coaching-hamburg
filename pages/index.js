// components
import { useEffect } from "react";
import EarlyIdentification from "../components/EarlyIdentification";
import ExpertiseSection from "../components/ExpertiseSection";
import InstagramSection from "../components/InstagramSection";
import LandingSection from "../components/LandingSection";

export default function Home() {
  return (
    <>
      <LandingSection />
      <EarlyIdentification />
      <ExpertiseSection />
      {/* <InstagramSection /> */}
    </>
  );
}
