import Image from "next/image";
import cn from "classnames";
import { useConfig, useTheme } from "nextra-theme-docs";

type LogoProps = {
  className?: string;
  height?: number;
};

export const DiscourseIcon = ({ height = 24, className = "" }: LogoProps) => {
  return (
    <>
      <div className="dark:hidden">
        <Image
          alt="Discourse"
          src={`/images/logos/white/discourse-logo.svg`}
          width={24}
          height={height}
          priority
          className={className}
        />
      </div>
      <div className="hidden dark:contents">
        <Image
          alt="Discourse"
          src={`/images/logos/white/discourse-logo.svg`}
          priority
          width={24}
          height={height}
          className={className}
        />
      </div>
    </>
  );
};
