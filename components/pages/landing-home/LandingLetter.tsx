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
            Since the beginning of the internet, web service were run on centralized server farms and scaling these services were not trivial. 
            Decentralized network are challenging this by utilizing technologies, where failure and scalability is directly modelled into their technologies.
            But since decentralized network had scalability issues, these platforms are not fully realizing their full potential for business.
          </p>
          <br />
          <p>
            The Rhonix team looks back on these technologies, and advances forward with a fully new scientific paradigm shift. We are using a new developed programming language, called rholang,
            which is based on the latest research from the reflective higher order
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
            With the Rhonix runtime, we are just doing that. And with launching our upcoming testnet 2.0, this is not future, it is possible today.
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
