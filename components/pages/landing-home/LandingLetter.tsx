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
          Decentralized technologie&apos;s for
          <br />
          the masses
        </HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            Since the beginning of bitcoin and ethereum, the blockchain space
            has evolved quite far. Lots of new dApps have been developed, hacked
            and improved. But, up to now there is no dApp or network which has
            visa like speed, costs and safety. The reason for that is, that
            current networks do not horizontally scale by adding more nodes to
            the networks, meaning having linearly more performance gains.
            Without that, the blockchain ecosystem would not become the dream of
            composable dApps, which run on the largest decentralized computer.
          </p>
          <br />
          <p>
            The Rhonix team looks back on many technologies that are based in
            science. With that, we have a programming language called rholang
            which is based on the latest research from the reflective high order
            calculus. This language enables us to have concurrency in our core
            language. Detecting when conflicts emerge is now easier than ever.
            Why should a transaction in Canada wait for a transaction from
            Singapur to be finalized, if there are no dependencies between them?
            Only if there are conflicts in their ordering, these transaction
            orders have to be resolved. With these lessons learned, we use our
            rholang language and our novel runtime, to have scalability directly
            built into the language.
          </p>
          <br />
          <p>
            That's why I thought bringing a runtime to the community which
            solves horizontally scalability, is leaderless, has finality, low
            energy cost, sharding, uses proove of stake and has a programming
            langugage, which is inherent concurrent, is of large value for
            companies and people.
          </p>
          <br />
          <p>
            With the Rhonix runtime we are just doing that. And with having a
            running mainnet, this is not future, it is possible today.
          </p>
        </FadeIn>
        <FadeIn
          noVertical
          viewTriggerOffset
          className="relative h-2 md:h-12 lg:h-12"
        >
          <span
            className={cn(
              "w-full h-[1px] -bottom-8 md:-bottom-4 lg:-bottom-4 absolute",
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
              <p>Founder of Rhonix</p>
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
