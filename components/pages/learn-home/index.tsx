import { PackHero as LearnHero } from "./LearnHero";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <LearnHero />
      </main>
    </>
  );
}
