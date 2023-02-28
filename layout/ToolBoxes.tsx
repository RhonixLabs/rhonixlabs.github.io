import { ToolBox } from "@/components/ToolBox";
import DecentralizedIconLight from "@/images/docs/shared/feature-icons/decentralized-light.png";

export const ToolBoxs = (props) => {
  return (
    <div className="relative bottom-0 flex mx-auto mb-10  max-w-[29rem]  lg:max-w-[50rem]">
      <div className="grid gap-4  pt-12 md:gap-8 lg:grid-cols-4">
        <ToolBox
          title="Whitepaper"
          description={""}
          icon={DecentralizedIconLight}
          link={"/assets/whitepaper/Rhonix_Company_Whitepaper.pdf"}
        />
        <ToolBox
          title="Tokenomics"
          description={""}
          icon={DecentralizedIconLight}
          link="/assets/tokenomics/Rhonix_Tokenomics_Model.pdf"
        />

        <ToolBox
          title="About"
          description={""}
          icon={DecentralizedIconLight}
          link="/about"
        />
      </div>
    </div>
  );
};
