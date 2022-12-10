import {
  BookOpenIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  LightBulbIcon,
  LightningBoltIcon,
  PencilIcon,
  ServerIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";

export const QuickStartArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: PencilIcon,
          description: `Setup local rnode instance with docker `,
          name: "Setup local rnode instance",
        }}
        href="/build/docs/developers/libraries/use-docker"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: SparklesIcon,
          description: `Build dApps with the community SDK`,
          name: "Use the SDK",
        }}
        href="/build/docs/developers/libraries/use-sdk"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Use the VSCode extension for rholang`,
          name: "Rholang VSCode extension",
        }}
        href="/build/docs/developers/build/use-vscode"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Rholang Overview`,
          name: "Rholang Syntax",
        }}
        href="/build/docs/developers/rholang/overview"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Rholang Tutorial`,
          name: "Community Rholang Tutorial",
        }}
        href="/build/docs/developers/tutorials/overview"
      ></DetailedFeatureLink>
    </div>
  );
};

export const MonoreposArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: LightBulbIcon,
          description: `Understand why monorepos don't scale - and why Rhonix is the solution.`,
          name: "Why Rhonix?",
        }}
        href="/repo/docs/core-concepts/monorepos"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BookOpenIcon,
          description: `Learn the basics of monorepos before you dive in to Rhonix.`,
          name: "Read the Monorepo Handbook",
        }}
        href="/docs/handbook"
      ></DetailedFeatureLink>
    </div>
  );
};

export const LearnMoreArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CloudUploadIcon,
          description: `Rhonix remembers the output of any task you run - and can skip work that's already been done.`,
          name: "Never do the same work twice",
        }}
        href="/repo/docs/core-concepts/caching"
      />
      <DetailedFeatureLink
        feature={{
          Icon: LightningBoltIcon,
          description: `The way you run your tasks is probably not optimized. Rhonix speeds them up with smart scheduling, minimising idle CPU's.`,
          name: "Maximum Multitasking",
        }}
        href="/repo/docs/core-concepts/monorepos/running-tasks"
      ></DetailedFeatureLink>
    </div>
  );
};
