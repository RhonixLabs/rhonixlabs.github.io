import { RepoHero as ExploreHero } from "./ExploreHero";

import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <ExploreHero />
      </main>
    </>
  );
}
