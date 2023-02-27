import { RoadMap } from "@/components/roadmap/RoadMap";
import { FadeIn } from "../FadeIn";
import { SectionHeader, SectionSubtext } from "../Headings";
import { milestones } from "./RoadmapData";

export const RoadmapSection = () => (
  <section className="relative  pb-16 font-sans md:pb-24 lg:pb-32 gap-9 lg:gap-14">
    <FadeIn className="flex flex-col items-center gap-5 md:gap-6">
      <SectionHeader>Roadmap</SectionHeader>
    </FadeIn>

    <RoadMap data={milestones} />
  </section>
);
