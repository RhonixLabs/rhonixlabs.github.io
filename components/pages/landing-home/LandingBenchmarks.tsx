import { useState } from "react";
import { FadeIn } from "../home-shared/FadeIn";
import { SectionHeader, SectionSubtext } from "../home-shared/Headings";
import { BenchmarksGraph } from "./LandingBenchmarksGraph";
import { PackBenchmarksPicker as LandingBenchmarksPicker } from "./LandingBenchmarksPicker";
import { LandingBenchmarkTabs as LandingBenchmarkTabs } from "./LandingBenchmarkTabs";

export type BenchmarkNumberOfModules = "1000" | "5000" | "10000" | "30000";
export type BenchmarkCategory =
  | "scale"
  | "finality"
  | "transactions"
  | "energy";
export interface BenchmarkData {
  rhonix: number;
  ethereum: number;
  cosmos: number;
  solana: number;
}

export interface BenchmarkBar {
  label: string;
  key: keyof BenchmarkData;
  turbo?: true;
}

export const DEFAULT_BARS: BenchmarkBar[] = [
  {
    key: "rhonix",
    label: "Rhonix",
    turbo: true,
  },
  {
    key: "ethereum",
    label: "Ethereum",
  },
  {
    key: "cosmos",
    label: "Cosmos",
  },
  {
    key: "solana",
    label: "Solana",
  },
];

export function PackBenchmarks() {
  const [numberOfModules, setNumberOfModules] =
    useState<BenchmarkNumberOfModules>("1000");
  const [category, setCategory] = useState<BenchmarkCategory>("energy");

  return (
    <FadeIn className="relative flex flex-col items-center justify-center w-full gap-10 py-16 font-sans md:py-24 lg:py-32">
      <div className="flex flex-col items-center gap-5 md:gap-6">
        <SectionHeader>Scaling on steroids</SectionHeader>
        <SectionSubtext>
          Guided by math, Rhonix archives performance by scaling horizontally.
        </SectionSubtext>
      </div>
      <div className="flex flex-col items-center w-full">
        <LandingBenchmarkTabs onTabChange={setCategory} />
        <BenchmarksGraph
          category={category}
          numberOfModules={numberOfModules}
          bars={DEFAULT_BARS}
        />
      </div>
    </FadeIn>
  );
}
