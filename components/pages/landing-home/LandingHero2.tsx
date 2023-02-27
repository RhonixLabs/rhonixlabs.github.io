import { Fragment } from "react";
import Image from "next/image";
import clsx from "clsx";
import Highlight, { defaultProps } from "prism-react-renderer";

import { Button } from "@/components/button";
import { HeroBackgroundIcon } from "@/components/icons/HeroBackgroundIcon";
import blurCyanImage from "@/images/hero/blur-cyan.png";
import blurIndigoImage from "@/images/hero/blur-indigo.png";
import Link from "next/link";
import { ToolBox } from "@/components/ToolBox";
import DecentralizedIconLight from "@/images/docs/shared/feature-icons/decentralized-light.png";

const codeLanguage = "javascript";
const code = `new helloworld, stdout("rho:io:stdout") in {
   contract helloworld( world ) = {
     for( @msg <- world )
     { stdout!(msg) }
   }
 
   | new world, world2 in {
       helloworld!(*world)
     | world!("Hello World")
     | helloworld!(*world2)
     | world2!("Hello World again")
     }
   }`;

const tabs = [
  { name: "hello-world.rho", isActive: true },
  { name: "erc20.rho", isActive: false },
  { name: "nft.rho", isActive: false },
];

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  );
}

const ToolBoxs = (props) => {
  return (
    <div className="relative bottom-0 flex mx-auto mb-10  max-w-[29rem]  lg:max-w-[50rem]">
      <div className="grid gap-4  pt-12 md:gap-8 lg:grid-cols-4">
        <ToolBox
          title="Pitch"
          description={""}
          icon={DecentralizedIconLight}
          link="/assets/presentation/Rhonix_Company_Presentation_23_02_28.pdf"
        />
        <ToolBox
          title="Whitepaper"
          description={""}
          icon={DecentralizedIconLight}
          link={"/assets/whitepaper/Rhonix_Company_Whitepaper_23_02_03.pdf"}
        />
        <ToolBox
          title="Tokenomics"
          description={""}
          icon={DecentralizedIconLight}
          link="/assets/tokenomics/Rhonix_Tokenomics_Model_2023_02_29.pdf"
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

export function LandingHero() {
  return (
    <div className="overflow-hidden  bg-slate-900">
      <div className="pt-16 sm:px-2 lg:h-[calc(100vh-64px)] lg:relative lg:pt-20 lg:px-0">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-y-16 gap-x-8 px-8 lg:max-w-8xl lg:grid-cols-2 lg:px-16 xl:gap-x-16 xl:px-40">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl tracking-tight text-transparent">
                The scalable layer 1 runtime for dApps.
              </p>
              <p className="mt-9 text-2xl tracking-tight text-slate-400">
                Based on the latest research in reflective higher-order
                calculus, our runtime scales linearly as new nodes are added
              </p>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackgroundIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <Image
                className="absolute -top-64 -right-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-300 via-slate-300/70 to-slate-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-300 via-slate-300/70 to-slate-300 opacity-10" />
              <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-slate-300/0 via-slate-300/70 to-slate-300/0" />
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-slate-400/0 via-slate-400 to-slate-400/0" />
                <div className="pl-4 pt-4">
                  <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-500/30" />
                  <div className="mt-4 flex space-x-2 text-xs">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx(
                          "flex h-6 rounded-full",
                          tab.isActive
                            ? "bg-gradient-to-r from-slate-400/30 via-slate-400 to-slate-400/30 p-px font-medium text-slate-300"
                            : "text-slate-500"
                        )}
                      >
                        <div
                          className={clsx(
                            "flex items-center rounded-full px-2.5",
                            tab.isActive && "bg-slate-800"
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-start px-1 text-sm">
                    <div
                      aria-hidden="true"
                      className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
                    >
                      {Array.from({
                        length: code.split("\n").length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, "0")}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Highlight
                      {...defaultProps}
                      code={code}
                      language={codeLanguage}
                      theme={undefined}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={clsx(
                            className,
                            "flex overflow-x-auto pb-6"
                          )}
                          style={style}
                        >
                          <code className="px-4">
                            {tokens.map((line, lineIndex) => (
                              <div key={lineIndex} {...getLineProps({ line })}>
                                {line.map((token, tokenIndex) => (
                                  <span
                                    key={tokenIndex}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToolBoxs />
      </div>
    </div>
  );
}
