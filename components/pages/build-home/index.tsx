import { PackHero as BuildHero } from "./BuildHero";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <BuildHero />
      </main>
    </>
  );
}
