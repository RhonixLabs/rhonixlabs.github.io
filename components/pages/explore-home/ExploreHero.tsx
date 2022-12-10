import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import gradients from "../home-shared/gradients.module.css";
import { HeroText, SectionSubtext } from "../home-shared/Headings";
import { Gradient } from "../home-shared/Gradient";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import RepoLogo from "../../logos/RepoLogo";

export function RepoHero() {
  return (
    <>
      <FadeIn
        noVertical
        className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0"
      >
        <FadeIn className="z-50 flex items-center justify-center w-full">
          <div className="absolute min-w-[614px] min-h-[614px]">
            <Image
              alt="Turbopack"
              src="/images/docs/pack/turbopack-hero-hexagons-dark.png"
              width={614}
              height={614}
            />
          </div>
          <div className="absolute z-50 flex items-center justify-center w-256 h-256">
            <Gradient
              small
              width={256}
              height={256}
              conic
              className="dark:opacity-30 opacity-20"
            />
          </div>

          <div className="w-[256px] z-50 mt-[-8.075px] mb-[-8.075px]">
            <Image
              alt=""
              src={`/images/docs/shared/logos/rhonix-logo-large.png`}
              width={256}
              height={256}
            />
          </div>
        </FadeIn>
        <Gradient
          width={1000}
          height={1000}
          className="top-[-500px] dark:opacity-20 opacity-[0.15]"
          conic
        />
        <div className="absolute top-0 z-10 w-full h-48 dark:from-black from-white to-transparent bg-gradient-to-b" />
        <FadeIn
          delay={0.15}
          className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6"
        >
          <HeroText h1>A world of dApps</HeroText>
          <SectionSubtext hero>
            With more and more dApps using the rhonix decentralized network,
            join us.
            <br />
            Tbd. List of dApps which are available. Select from list.
          </SectionSubtext>
        </FadeIn>
      </FadeIn>
    </>
  );
}
