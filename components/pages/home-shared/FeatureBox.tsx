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
        <h3 className="leading-10  text-5xl m-0 font-bold  text-gray-900 font-sans dark:text-white">
          {name}
        </h3>

        <p className="text-base m-0 mb-6 opacity-70">{description}</p>
        <div className="absolute  -bottom-[15px] -right-[23px]">
          {iconDark && (
            <Image
              src={iconDark}
              aria-hidden="true"
              alt=""
              className="hidden dark:block object-scale-down w-20 h-20"
            />
          )}
          {iconLight && (
            <Image
              src={iconLight}
              width={100}
              height={100}
              aria-hidden="true"
              alt=""
              className="block dark:hidden object-scale-down w-20 h-20"
            />
          )}
        </div>
      </div>
    </div>
  );
}
