import { HeroText } from "../home-shared/Headings";
import Image from "next/future/image";
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
            Since the beginning of bitcoin and ethereum the blockchain space has
            evolved quite far. Lots of new dApps have been developed, hacked and
            improved. But up to know there is no dApp or network what has visa
            like speed, costs and safety. The reason for that is current
            networks do not horizontally scale with adding more node to the
            networks, means having linearly more performance gains. Without that
            the blockchain ecosystem will no become the dream of composable
            dApps, which run on the largest decentralized computer.
          </p>
          <br />
          <p>
            The Rhonix team looks back on a many technologies which are based in
            science. With that we have a programming language, called rholang,
            which is based on the latest research of the reflective high order
            calulus. This lanugage enables us to have concurrency in our core
            language. Detecting when conflicts emerge is now easier than ever.
            Why should somebody in the us wait for a transaction to finalize,
            when he is doing business in singapur? Only if there conflicts in
            their ordering, these transaction orders have to be resolved. With
            these lessons learned, we use our rholang language and our novel
            runtime, for having scalability directly build into the language.
          </p>
          <br />
          <p>
            That's why I thought bringing a runtime to the community, which
            solves horizontally scalability, is leaderless, has finality, low
            energy cost, has sharding, uses proove of stake and has a
            programming langugage, which is inherent concurrent, is of large
            value for companies and people.
          </p>
          <br />
          <p>
            With the Rhonix runtime we are just doing that. And with having
            running mainnet it is not the future, it is today possible.
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
          className="flex items-end justify-center gap-3 md:self-start md:-ml-4 lg:self-start lg:-ml-4 min-w-[300px]"
        >
          <div className="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center ">
            <Image
              alt="Image of Tobias Koopers"
              src="/images/people/nzpr.jpeg"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3 pb-2">
            <Image
              alt="Tobias Koppers hand written signature"
              src="/images/docs/pack/tobias-signature-light.svg"
              // 16 px added and offset to account for the glow
              width={173 + 16}
              height={91 + 16}
              className="block -mb-3 -ml-3 dark:hidden"
            />
            <Image
              alt="Tobias Koppers hand written signature"
              src="/images/docs/pack/tobias-signature-dark.svg"
              // 16 px added and offset to account for the glow
              width={173 + 16}
              height={91 + 16}
              className="hidden -mb-3 -ml-3 dark:block"
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
