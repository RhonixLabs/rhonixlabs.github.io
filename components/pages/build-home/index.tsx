import { PackBenchmarks } from "./PackBenchmarks";
import { PackHero as BuildHero } from "./BuildHero";
import { PackLetter } from "./PackLetter";
import { PackFeatures } from "./PackFeatures";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <BuildHero />
        <GradientSectionBorder>
          <PackBenchmarks />
          <PackFeatures />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <PackLetter />
        </GradientSectionBorder>
      </main>
    </>
  );
}
