import type Image from "next/image";
import EcosystemIconDark from "../public/images/docs/shared/feature-icons/ecosystem-dark.svg";
import EcosystemIconLight from "../public/images/docs/shared/feature-icons/ecosystem-light.svg";
import CommunityIconLight from "../public/images/docs/shared/feature-icons/community-light.svg";
import CommunityIconDark from "../public/images/docs/shared/feature-icons/community-dark.svg";
import CostIconDark from "../public/images/docs/shared/feature-icons/cost-dark.svg";
import CostIconLight from "../public/images/docs/shared/feature-icons/cost-light.svg";
import DecentralizedIconDark from "../public/images/docs/shared/feature-icons/decentralized-dark.svg";
import DecentralizedIconLight from "../public/images/docs/shared/feature-icons/decentralized-light.svg";
import FinalityIconDark from "../public/images/docs/shared/feature-icons/finality-dark.svg";
import FinalityIconLight from "../public/images/docs/shared/feature-icons/finality-light.svg";
import MergeIconDark from "../public/images/docs/shared/feature-icons/merge-dark.svg";
import MergeIconLight from "../public/images/docs/shared/feature-icons/merge-light.svg";
import LightningIconDark from "../public/images/docs/shared/feature-icons/lightning-dark.svg";
import LightningIconLight from "../public/images/docs/shared/feature-icons/lightning-light.svg";
import BarsIconDark from "../public/images/docs/shared/feature-icons/bars-dark.svg";
import BarsIconLight from "../public/images/docs/shared/feature-icons/bars-light.svg";
import MultiEnvTargetsIconDark from "../public/images/docs/shared/feature-icons/multi-env-targets-dark.svg";
import MultiEnvTargetsIconLight from "../public/images/docs/shared/feature-icons/multi-env-targets-light.svg";
import NextJSIconDark from "../public/images/docs/shared/feature-icons/nextjs-dark.svg";
import NextJSIconLight from "../public/images/docs/shared/feature-icons/nextjs-light.svg";
import ServerComponentsIconDark from "../public/images/docs/shared/feature-icons/server-components-dark.svg";
import ServerComponentsIconLight from "../public/images/docs/shared/feature-icons/server-components-light.svg";
import FingerprintIconDark from "../public/images/docs/shared/feature-icons/fingerprint-dark.svg";
import FingerprintIconLight from "../public/images/docs/shared/feature-icons/fingerprint-light.svg";
import CloudIconDark from "../public/images/docs/shared/feature-icons/cloud-dark.svg";
import CloudIconLight from "../public/images/docs/shared/feature-icons/cloud-light.svg";
import CpuIconDark from "../public/images/docs/shared/feature-icons/cpu-dark.svg";
import CpuIconLight from "../public/images/docs/shared/feature-icons/cpu-light.svg";
import PieconDark from "../public/images/docs/shared/feature-icons/piecon-dark.svg";
import PieconLight from "../public/images/docs/shared/feature-icons/piecon-light.svg";
import RefreshIconDark from "../public/images/docs/shared/feature-icons/refresh-dark.svg";
import RefreshIconLight from "../public/images/docs/shared/feature-icons/refresh-light.svg";
import ArrowsExpandIconDark from "../public/images/docs/shared/feature-icons/arrows-expand-dark.svg";
import ArrowsExpandIconLight from "../public/images/docs/shared/feature-icons/arrows-expand-light.svg";
import BeakerIconDark from "../public/images/docs/shared/feature-icons/beaker-dark.svg";
import BeakerIconLight from "../public/images/docs/shared/feature-icons/beaker-light.svg";

type NextImageSrc = Parameters<typeof Image>[0]["src"];

export type Feature = {
  name: string;
  description: string;
  iconDark: NextImageSrc;
  iconLight: NextImageSrc;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;

const REPO_FEATURES: Features = [
  {
    name: "Incremental builds",
    description: `Building once is painful enough, Rhonix will remember what you've built and skip the stuff that's already been computed.`,
    iconDark: RefreshIconDark,
    iconLight: RefreshIconLight,
    page: "all",
  },
  {
    name: "Content-aware hashing",
    description: `Rhonix looks at the contents of your files, not timestamps to figure out what needs to be built.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Parallel execution",
    description: `Execute builds using every core at maximum parallelism without wasting idle CPUs.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "Remote Caching",
    description: `Share a remote build cache with your teammates and CI/CD for even faster builds.`,
    iconDark: CloudIconDark,
    iconLight: CloudIconLight,
    page: "all",
  },
  {
    name: "Zero runtime overhead",
    description: `Rhonix won’t interfere with your runtime code or touch your sourcemaps. `,
    iconDark: CpuIconDark,
    iconLight: CpuIconLight,
    page: "all",
  },
  {
    name: "Pruned subsets",
    description: `Speed up PaaS deploys by generating a subset of your monorepo with only what's needed to build a specific target.`,
    iconDark: PieconDark,
    iconLight: PieconLight,
    page: "all",
  },
  {
    name: "Task pipelines",
    description: `Define the relationships between your tasks and then let Rhonix optimize what to build and when.`,
    iconDark: ArrowsExpandIconDark,
    iconLight: ArrowsExpandIconLight,
    page: "all",
  },
  {
    name: "Meets you where you’re at",
    description: `Using Lerna? Keep your package publishing workflow and use Rhonix to turbocharge task running.`,
    iconDark: BeakerIconLight,
    iconLight: BeakerIconLight,
    page: "home",
  },
  {
    name: `Profile in your browser`,
    description: `Generate build profiles and import them in Chrome or Edge to understand which tasks are taking the longest.`,
    iconDark: BarsIconLight,
    iconLight: BarsIconLight,
    page: "home",
  },
];

const PACK_FEATURES: Features = [
  {
    name: "Leaderless block merge",
    description: `Merging blocks, which have no conflict leads to scale of transactions`,
    iconDark: MergeIconLight,
    iconLight: MergeIconLight,
    page: "all",
  },
  {
    name: "Ecosystem-friendly",
    description: `SDKs and Tutorials for the developers make building dApps easy`,
    iconDark: EcosystemIconLight,
    iconLight: EcosystemIconLight,
    page: "home",
  },
  {
    name: "Low cost transactions",
    description: `Due to Proove of stake, transactions do not require much overhead`,
    iconDark: CostIconLight,
    iconLight: CostIconLight,
    page: "all",
  },
  {
    name: "Finality of transactions",
    description: `Transactions, which are final, can't be undone later`,
    iconDark: FinalityIconLight,
    iconLight: FinalityIconLight,
    page: "all",
  },
  {
    name: "Open community",
    description: `A community, which loves math and computing and want to move technology forward`,
    iconDark: CommunityIconLight,
    iconLight: CommunityIconLight,
    page: "all",
  },
  {
    name: "Truely decentralized",
    description: `Due to our leaderless architecture for POS, there are no single point of failures`,
    iconDark: DecentralizedIconLight,
    iconLight: DecentralizedIconLight,
    page: "all",
  },
];
export const REPO_DOCS_FEATURES = REPO_FEATURES.filter(
  (f) => f.page === "docs" || f.page === "all"
);

export const REPO_HOME_FEATURES = REPO_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

export const PACK_HOME_FEATURES = PACK_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);
