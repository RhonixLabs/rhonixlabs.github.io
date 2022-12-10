import { DetailedFeatureLink } from "./Feature";
import { GitHubIcon } from "./Icons";

export const ExamplesArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: `Multiple rholang smart contracts like List, Casper, Registry, ERC20 Wallet (RevVault)`,
          name: "Rholang smart contracts",
        }}
        href="https://github.com/RhonixLabs/rhonix/tree/dev/casper/src/main/resources"
      ></DetailedFeatureLink>
    </div>
  );
};
