import { Card, CardBadge } from "@/components/card/Card";
import { RhonixIconCondensed } from "@/components/icons/RhonixIcon";
import { SiteCardIcon } from "@/components/icons/SiteCardIcon";
import { FadeIn } from "@/components/pages/home-shared/FadeIn";

export const SiteCards = () => {
  return (
    <div className="flex px-16 my-8 sm:mt-8 lg:mt-40 lg:max-w-8xl xl:px-40 flex-col gap-5 justify-center items-center   md:flex-row ">
      <FadeIn delay={0.1} className="grow w-full">
        <Card
          title="Whitepaper"
          alt="Whitepaper"
          icon={SiteCardIcon}
          href="/assets/whitepaper/Rhonix_Company_Whitepaper.pdf"
          className="rhonixrepoCardBg "
        ></Card>
      </FadeIn>
      <FadeIn delay={0.2} className="grow w-full">
        <Card
          title="Tokenomics"
          alt="Tokenomics"
          icon={SiteCardIcon}
          href="/assets/tokenomics/Rhonix_Tokenomics_Model.pdf"
          className="rhonixrepoCardBg"
        ></Card>
      </FadeIn>
      <FadeIn delay={0.2} className="grow w-full">
        <Card
          title="About"
          alt="About"
          icon={SiteCardIcon}
          href="/about"
          className="rhonixrepoCardBg"
        ></Card>
      </FadeIn>
    </div>
  );
};
