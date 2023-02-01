import React, { useState, useRef, createRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { Container } from "@components/Container";
import { Button } from "@components/button";
import Link from "next/link";
import Tag from "@components/Tag";
import V2Mainnet from "@images/svg/Roadmap/V2Mainnet";
import V1Mainnet from "@images/svg/Roadmap/V1Mainnet";
import AlphaMainnet from "@images/svg/Roadmap/AlphaMainnet";
import RestrictedMainnet from "@images/svg/Roadmap/RestrictedMainnet";
import Testnet from "@images/svg/Roadmap/Testnet";
import Bond from "@images/svg/Roadmap/Bond";
import Rectangle from "@images/svg/Roadmap/Rectangle";
import ArrowLeft from "@images/svg/ArrowLeft";
import ArrowRight from "@images/svg/ArrowRight";
import { motion } from "framer-motion";
import "swiper/css";
import { Milestones } from "@components/pages/home-shared/roadmap/RoadmapData";

type Props = {
  data: Milestones;
};

export const RoadMap = ({ data, ...rest }: Props) => {
  const planets = useRef<any[]>([]);
  const swiperRef = useRef<SwiperRef>();
  const currentStatus = 1;
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  planets.current = data.map((_, i) => planets.current[i] ?? createRef());

  const roadmapImage = (idx) => {
    switch (idx) {
      case 4:
        return <V2Mainnet className="mx-auto h-auto w-full max-w-[13rem]" />;
      case 3:
        return <V1Mainnet className="mx-auto h-auto w-full max-w-[7.5rem]" />;
      case 2:
        return (
          <AlphaMainnet className="mx-auto h-auto w-full max-w-[15.625rem]" />
        );
      case 1:
        return (
          <RestrictedMainnet className="mx-auto h-auto w-full max-w-[6.8125rem]" />
        );
      case 0:
        return <Testnet className="mx-auto h-auto w-full max-w-[12.0625rem]" />;
      default:
        return <div>Not found</div>;
    }
  };

  const setTimelineHeightHandler = () => {
    const height = planets.current[0].current.clientHeight;
    setTimelineHeight(height);
  };

  return (
    <div id="roadmap" {...rest}>
      <div className="relative">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 right-0 h-px bg-vega-dark-300"
            style={{ top: `${timelineHeight}px` }}
          ></div>
        </div>
        <div className="relative z-10">
          <Container>
            <div className="relative flex">
              <div className="pointer-events-none absolute inset-0 z-10">
                <div className="grid text-center sm:grid-cols-3">
                  <div className="hidden aspect-[251/210] items-end justify-center sm:flex">
                    {selectedPlanet !== 0 && (
                      <Rectangle className="relative top-[4px]" />
                    )}
                  </div>
                  <div className="flex aspect-[251/210] items-end justify-center">
                    <div className="pointer-events-auto flex w-full justify-between sm:justify-center">
                      <button
                        className={`flex items-center sm:hidden ${
                          selectedPlanet !== 0 ? "" : "invisible"
                        }`}
                        onClick={() => swiperRef.current?.slidePrev()}
                      >
                        <ArrowLeft className="mr-2" />
                        <div>Previous</div>
                      </button>
                      <Bond className="relative top-px" />
                      <button
                        className={`flex items-center sm:hidden ${
                          selectedPlanet !== data.length - 1 ? "" : "invisible"
                        }`}
                        onClick={() => swiperRef.current?.slideNext()}
                      >
                        <div>Next</div>
                        <ArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                  <div className="hidden aspect-[251/210] items-end justify-center sm:flex">
                    {selectedPlanet !== data.length - 1 && (
                      <Rectangle className="relative top-[4px]" />
                    )}
                  </div>
                </div>
              </div>
              <Swiper
                speed={800}
                onResize={() => {
                  setTimelineHeightHandler();
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onActiveIndexChange={(swiper) => {
                  setSelectedPlanet(swiper.activeIndex);
                }}
                preventClicks={false}
                slideToClickedSlide={true}
                threshold={10}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                  delay: 1000,
                }}
                initialSlide={currentStatus}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                }}
              >
                {data.map((block, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="group pointer-events-auto cursor-pointer"
                  >
                    <div
                      className={`flex h-full flex-col justify-between transition duration-300 ${
                        idx === selectedPlanet
                          ? "text-black dark:text-white"
                          : "text-vega-light-300 dark:text-vega-dark-300"
                      }
                      
                      ${
                        idx === selectedPlanet - 2 || idx === selectedPlanet + 2
                          ? "opacity-0"
                          : ""
                      }
                      `}
                    >
                      <div
                        className={`flex aspect-[251/210] items-center justify-center transition-opacity duration-700 group-hover:scale-125 ${
                          idx === selectedPlanet ? "opacity-100" : "opacity-50"
                        }`}
                        ref={planets.current[idx]}
                      >
                        {roadmapImage(idx)}
                      </div>
                      <div className="mt-space-5 text-center">
                        {idx === currentStatus && (
                          <Tag
                            className={`mx-auto bg-white dark:bg-black ${
                              idx === selectedPlanet
                                ? ""
                                : "border-vega-light-300 dark:border-vega-dark-300"
                            }`}
                          >
                            Current Status
                          </Tag>
                        )}
                      </div>
                      <div
                        className={`heading-m mx-auto mb-5 mt-space-5 max-w-[18rem] text-center transition-all duration-700 sm:mb-[1rem] ${
                          idx === selectedPlanet ? "" : "scale-75"
                        }`}
                      >
                        {block.name}
                      </div>
                      <div className="justify-self-end text-center text-[0.9375rem] transition-all duration-700">
                        <div>{block.date}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={selectedPlanet}
            >
              <div className="mx-auto mt-12 max-w-[27.5rem]">
                <div className="mb-12 rounded-xl border border-vega-light-300 py-7 px-7 dark:border-vega-dark-300">
                  <div className="prose-invert:text-vega-dark-400 prose prose-h2:mb-[0.75rem] prose-h2:border-none prose-h2:text-[1.5rem] prose-h2:uppercase prose-h2:leading-[1] prose-ul:p-0 prose-ul:pl-3.5 prose-li:list-square prose-li:text-[1.125rem] prose-li:leading-[1.4] dark:prose-invert">
                    {data[selectedPlanet].description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <Button>
                    <Link href="/learn/" className="block py-3">
                      View detailed roadmap
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </div>
  );
};
