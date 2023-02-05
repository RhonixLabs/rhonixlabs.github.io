import { useState } from "react";
import { FadeIn } from "../home-shared/FadeIn";
import { SectionHeader, SectionSubtext } from "../home-shared/Headings";
import { BenchmarksGraph } from "./LandingBenchmarksGraph";
import { LandingBenchmarkTabs as LandingBenchmarkTabs } from "./LandingBenchmarkTabs";

export type BenchmarkCategory = "scale" | "finality" | "comms" | "energy";

export interface BenchmarkData {
  rhonix: number;
  ethereum: number;
  cosmos: number;
  aptos: number;
  rhonix1: number;
  rhonix5: number;
  rhonix10: number;
  rhonix100: number;
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
    key: "aptos",
    label: "Aptos",
  },
];

export const rhonixScaleBars: BenchmarkBar[] = [
  {
    key: "rhonix1",
    label: "Rhonix 1-node",
    turbo: true,
  },
  {
    key: "rhonix5",
    label: "Rhonix 5-nodes",
  },
  {
    key: "rhonix10",
    label: "Rhonix 10-nodes",
  },
  {
    key: "rhonix100",
    label: "Rhonix 100-nodes",
  },
];

export function LandingBenchmarks() {
  const [category, setCategory] = useState<BenchmarkCategory>("energy");

  return (
    <FadeIn className="relative flex flex-col items-center justify-center w-full gap-10 py-16 font-sans md:py-24 lg:py-32">
      <div className="flex flex-col items-center gap-5 md:gap-6 px-6">
        <SectionHeader>Scaling on steroids</SectionHeader>
        <SectionSubtext>
          Guided by math, Rhonix archives performance by scaling horizontally.
        </SectionSubtext>
      </div>
      <div className="flex flex-col items-center w-full">
        <LandingBenchmarkTabs onTabChange={setCategory} />
        {category === "scale" && (
          <BenchmarksGraph category={category} bars={rhonixScaleBars} />
        )}
        {category !== "scale" && (
          <BenchmarksGraph category={category} bars={DEFAULT_BARS} />
        )}
      </div>
    </FadeIn>
  );
}
