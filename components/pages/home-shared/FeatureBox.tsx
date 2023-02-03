import Image from "next/image";
import type { ReactNode } from "react";

export function FeatureBox({
  name,
  description,
  iconDark,
  iconLight,
}: {
  iconDark: Parameters<typeof Image>[0]["src"];
  iconLight: Parameters<typeof Image>[0]["src"];
  name: string;
  description: ReactNode;
}) {
  return (
    <div className="font-sans cardShadow dark:bg-neutral-900 relative flex flex-col gap-5 p-8 overflow-hidden text-black no-underline dark:text-white rounded-3xl">
      <div className="flex flex-col gap-2">
        <h3 className="leading-11 text-5xl m-0 font-bold  text-gray-900 font-sans dark:text-white">
          {name}
        </h3>

        <div className="flex ">
          <p className="text-base m-0 grow opacity-70">{description}</p>
          <div className="w-20 h-20 grow ml-10">
            <Image
              src={iconDark}
              width={64}
              height={64}
              aria-hidden="true"
              alt=""
              className="hidden dark:block"
            />
            <Image
              src={iconLight}
              width={64}
              height={64}
              aria-hidden="true"
              alt=""
              className="block dark:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
