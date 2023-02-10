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
import Spline from "@splinetool/react-spline";

export function LandingHero() {
  return (
    <>
      <div className="min-h-[40vh] hidden sm:block">
        <Spline scene="https://prod.spline.design/LccpC7EHaPgocnq4/scene.splinecode" />
      </div>

      <div className="min-h-[60vh]">
        <FadeIn
          noVertical
          className="font-sans w-auto pt-10  md:pt-10 lg:pt-10 flex justify-between gap-8 items-center flex-col relative z-0"
        >
          <FadeIn
            delay={0.15}
            className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6"
          >
            <HeroText h1>The scalable layer 1 runtime for dApps</HeroText>
            <SectionSubtext hero>
              Based on the latest research in reflective higher-order calculus,
              our runtime scales linearly as new nodes are added
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
                <Link href="/build/" className="block py-3">
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
            <p className="text-sm text-[#666666]">
              Apache License, Version 2.0
            </p>
          </FadeIn>
          <FadeIn delay={0.5} className="relative w-full">
            <div className="absolute bottom-0 w-full dark:from-black from-white to-transparent h-72 bg-gradient-to-t" />
          </FadeIn>
        </FadeIn>
      </div>
    </>
  );
}
