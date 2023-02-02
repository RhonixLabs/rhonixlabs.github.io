import { PackBenchmarks as LandingBenchmarks } from "./LandingBenchmarks";
import { LandingHero } from "./LandingHero";
import { LandingLetter } from "./LandingLetter";
import { LandingFeatures } from "./LandingFeatures";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import { RoadmapSection } from "../home-shared/roadmap/RoadmapSection";
import Testnet from "@images/svg/Roadmap/Testnet";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <LandingHero />
        <GradientSectionBorder>
          <LandingBenchmarks />
          <LandingFeatures />

          <Testnet></Testnet>
          <RoadmapSection />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <LandingLetter />
        </GradientSectionBorder>
      </main>
    </>
  );
}
