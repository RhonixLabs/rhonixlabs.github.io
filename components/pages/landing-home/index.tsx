import { PackBenchmarks as LandingBenchmarks } from "./LandingBenchmarks";
import { LandingHero } from "./LandingHero";
import { LandingLetter } from "./LandingLetter";
import { LandingFeatures } from "./LandingFeatures";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <LandingHero />
        <GradientSectionBorder>
          <LandingBenchmarks />
          <LandingFeatures />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <LandingLetter />
        </GradientSectionBorder>
      </main>
    </>
  );
}
