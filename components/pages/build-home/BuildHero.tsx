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

export function PackHero() {
  return (
    <>
      <FadeIn
        noVertical
        className=" min-h-screen font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-3 lg:pt-3 flex justify-between gap-8 items-center flex-col relative z-0"
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
          <HeroText h1>Devs, Devs, Devs, </HeroText>
          <SectionSubtext hero>
            Our goal is that you write and deploy dApps as easily as possible.
            For developers as well as for validators.
          </SectionSubtext>
        </FadeIn>
        <FadeIn
          delay={0.3}
          className="z-50 flex flex-col items-center w-full max-w-md gap-5 px-6"
        >
          <div className="flex flex-col w-full gap-3 md:!flex-row">
            <CTAButton>
              <Link href="/build/docs" className="block py-3">
                Start building
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
        </FadeIn>
        <FadeIn delay={0.5} className="relative w-full">
          <div className="absolute bottom-0 w-full dark:from-black from-white to-transparent h-72 bg-gradient-to-t" />
        </FadeIn>
      </FadeIn>
    </>
  );
}
