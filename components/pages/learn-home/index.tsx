import { PackHero } from "./PackHero";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <PackHero />
      </main>
    </>
  );
}
