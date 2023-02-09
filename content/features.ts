import type Image from "next/image";
import CommunityIconLight from "../public/images/docs/shared/feature-icons/community-light.png";
import CostIconLight from "../public/images/docs/shared/feature-icons/cost-light.png";
import DecentralizedIconLight from "../public/images/docs/shared/feature-icons/decentralized-light.png";
import EcosystemIconLight from "../public/images/docs/shared/feature-icons/ecosystem-light.png";
import FinalityIconLight from "../public/images/docs/shared/feature-icons/finality-light.png";
import MergeIconLight from "../public/images/docs/shared/feature-icons/merge-light.png";

type NextImageSrc = Parameters<typeof Image>[0]["src"];

export type Feature = {
  name: string;
  description: string;
  iconDark: NextImageSrc;
  iconLight: NextImageSrc;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;



const PACK_FEATURES: Features = [
  {
    name: "Leaderless block merge",
    description: `Merging blocks, which have no conflict, leads to scale of transactions`,
    iconDark: MergeIconLight,
    iconLight: MergeIconLight,
    page: "all",
  },
  {
    name: "Ecosystem-friendly",
    description: `SDKs and Tutorials for developers makes building dApps easy`,
    iconDark: EcosystemIconLight,
    iconLight: EcosystemIconLight,
    page: "home",
  },
  {
    name: "Low cost transactions",
    description: `Due to our proof-of-stake consensus algorithm, transactions do not require much overhead or energy consumption`,
    iconDark: CostIconLight,
    iconLight: CostIconLight,
    page: "all",
  },
  {
    name: "Finality of transactions",
    description: `Transactions, which are finalized, can’t be undone later`,
    iconDark: FinalityIconLight,
    iconLight: FinalityIconLight,
    page: "all",
  },
  {
    name: "Open community",
    description: `An open community embracing contributions from all members, fostering support and advancement of the technology.`,
    iconDark: CommunityIconLight,
    iconLight: CommunityIconLight,
    page: "all",
  },
  {
    name: "Truely decentralized",
    description: `Our leaderless proof-of-stake architecture ensures there is no single point of failure, making Rhonix a truly decentralized technology accessible to the masses.`,
    iconDark: DecentralizedIconLight,
    iconLight: DecentralizedIconLight,
    page: "all",
  },
];




export const PACK_HOME_FEATURES = PACK_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);
