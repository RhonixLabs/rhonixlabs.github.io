import Image from "next/image";
import cn from "classnames";
import { useConfig, useTheme } from "nextra-theme-docs";

type LogoProps = {
  className?: string;
  height?: number;
};

export const RhonixIconCondensed = ({
  height = 24,
  className = "",
}: LogoProps) => (
  <div>
    <div className="dark:hidden">
      <Image
        alt="Rhonix"
        src="/images/logos/color/rhonix-logo-navbar-mobile-light.svg"
        width={height}
        height={32}
        className={className}
      />
    </div>
    <div className="hidden dark:contents">
      <Image
        alt="Rhonix"
        src="/images/logos/color/rhonix-logo-navbar-mobile-dark.svg"
        width={height}
        height={32}
        className={className}
      />
    </div>
  </div>
);

const RhonixIcon = ({ height = 32, className = "" }: LogoProps) => {
  return (
    <>
      <div className="dark:hidden">
        <Image
          alt="Rhonix"
          src={`/images/logos/color/rhonix-logo-navbar-desktop-light.svg`}
          width={height}
          height={height}
          priority
          className={className}
        />
      </div>
      <div className="hidden dark:contents">
        <Image
          alt="Rhonix"
          src={`/images/logos/color/rhonix-logo-navbar-desktop-dark.svg`}
          priority
          width={height}
          height={height}
          className={className}
        />
      </div>
    </>
  );
};

export { RhonixIcon };
