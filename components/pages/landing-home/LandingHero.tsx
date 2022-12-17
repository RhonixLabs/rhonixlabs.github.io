import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
// import { Marquee } from "../../clients/Marquee";
// import { Clients } from "../../clients/Clients";
import gradients from "../home-shared/gradients.module.css";
import { HeroText, SectionSubtext } from "../home-shared/Headings";
import { Gradient } from "../home-shared/Gradient";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";

export function LandingHero() {
  return (
    <>
      <FadeIn
        noVertical
        className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-5 lg:pt-5 flex justify-between gap-8 items-center flex-col relative z-0"
      >
        <FadeIn className="z-50 flex items-center justify-center w-full">
          <div className="absolute z-50 flex items-center justify-center w-256 h-256">
            <Gradient
              small
              width={256}
              height={256}
              conic
              className="dark:opacity-30 opacity-20"
            />
          </div>

          <div className="w-[961px] z-50 mt-[-8.075px] mb-[-8.075px]">
            <Image
              alt=""
              src={`/images/docs/shared/logos/rhonix-logo-large.png`}
              width={961}
              height={961}
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
          <HeroText h1>The scalable Layer 1 runtime for dApps</HeroText>
          <SectionSubtext hero>
            Based on the latest research from the reflective high order
            calculus, our runtime can scale linear with new added nodes
          </SectionSubtext>
        </FadeIn>
        <FadeIn
          delay={0.3}
          className="z-50 flex flex-col items-center w-full max-w-md gap-5 px-6"
        >
          <div className="flex flex-col w-full gap-3 md:!flex-row">
            <CTAButton>
              <Link href="/learn/" className="block py-3">
                Learn
              </Link>
            </CTAButton>
            <CTAButton>
              <Link href="/learn/" className="block py-3">
                Develop
              </Link>
            </CTAButton>
            <CTAButton outline>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RhonixLabs/rhonix"
                className="block py-3"
              >
                GitHub
              </a>
            </CTAButton>
          </div>
          <p className="text-sm text-[#666666]">Apache License, Version 2.0</p>
        </FadeIn>
        <FadeIn delay={0.5} className="relative w-full">
          <div className="absolute bottom-0 w-full dark:from-black from-white to-transparent h-72 bg-gradient-to-t" />
        </FadeIn>
      </FadeIn>
    </>
  );
}
