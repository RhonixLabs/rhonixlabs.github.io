import { HeroText } from "../home-shared/Headings";
import Image from "next/image";
import cn from "classnames";
import gradients from "../home-shared/gradients.module.css";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import Link from "next/link";
import { Gradient } from "../home-shared/Gradient";

export function LandingLetter() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
      <FadeIn>
        <HeroText>
          Decentralized technology for
          <br />
          the masses
        </HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6  text-sm  md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            Since the inception of the internet, web services have been run on
            centralized server farms, and scaling these services has not been
            easy. Decentralized networks are challenging this approach by
            utilizing technologies, where fault-tolerance and scalability is
            directly modeled into their platform. But since decentralized
            networks have had scalability issues, these platforms are not fully
            realizing their full potential for business and common adoption.
          </p>
          <br />
          <p>
            The Rhonix team has learned from these mistakes. We are solving
            these scalability issues with our unique techonolgy stack based on
            advancements in computer science. This will give people back the
            power to control their own part of the network.
          </p>
          <br />
          <p>
            We are using a newly developed programming language, called rholang,
            which is based on the latest research from the reflective
            higher-order calculus. This language enables us to have concurrency
            in our core language. This means that detecting the emergence of
            conflict between transactions is now easier than ever. With these
            lessons learned, our runtime executes these smart contracts
            concurrently.
          </p>
          <br />
          <p>
            With the Rhonix runtime, we are making scaling for common adoption a
            reality. And with the launch of our upcoming testnet 2.0, we will
            begin a new era of concurrent computing for decentralized networks.
          </p>
        </FadeIn>
        <FadeIn noVertical viewTriggerOffset className="relative h-2 h-12 h-12">
          <span
            className={cn(
              "w-full h-[1px] -bottom-8 -bottom-4 absolute",
              gradients.letterLine
            )}
          />
        </FadeIn>
        <FadeIn
          viewTriggerOffset
          noVertical
          className="flex items-start justify-center gap-3  mt-3  min-w-[300px]"
        >
          <div className="w-24 h-24 min-w-[96px] mt-6 mr-6 min-h-[96px] rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center ">
            <Image
              alt="Image of Ting Yang"
              src="/images/people/ting-photo.png"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3 pb-2">
            <Image
              alt="Ting Yang hand written signature"
              src="/images/people/ting-signature.png"
              // 16 px added and offset to account for the glow
              width={106}
              height={115}
              className="block   dark:hidden"
            />
            <Image
              alt="Ting Yang hand written signature"
              src="/images/people/ting-signature.png"
              // 16 px added and offset to account for the glow
              width={106}
              height={115}
              className="hidden  dark:block"
            />
            <div className="flex gap-2 flex-wrap text-sm leading-none text-[#888888] max-w-[156px] md:max-w-xl lg:max-w-xl">
              <p className="font-bold">Ting Yang</p>
              <p>CEO of Rhonix Labs FZE</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn noVertical className="relative flex justify-center w-full mt-16">
        <div className="max-w-[180px] w-full">
          <CTAButton>
            <Link href="/build/docs" className="block py-3 font-sans">
              Start Building
            </Link>
          </CTAButton>
        </div>
        <Gradient
          width={1200}
          height={300}
          className="bottom-[-200px] -z-10 opacity-20"
          conic
        />
      </FadeIn>
    </section>
  );
}
