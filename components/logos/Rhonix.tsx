import Image from "next/image";
import cn from "classnames";
import { useConfig, useTheme } from "nextra-theme-docs";

type LogoProps = {
  className?: string;
  height?: number;
};

export const RhonixLogoCondensed = ({
  height = 64,
  className = "",
}: LogoProps) => (
  <Image
    alt="Rhonix"
    src="/images/docs/shared/logos/rhonix-logo-navbar-mobile.svg"
    width={height}
    height={64}
    className={className}
  />
);

const Rhonix = ({ height = 32, className = "" }: LogoProps) => {
  return (
    <>
      <div className="dark:hidden">
        <Image
          alt="Rhonix"
          src={`/images/docs/shared/logos/rhonix-logo-navbar-desktop-light.svg`}
          width={180}
          height={height}
          className={className}
        />
      </div>
      <div className="hidden dark:contents">
        <Image
          alt="Rhonix"
          src={`/images/docs/shared/logos/rhonix-logo-navbar-desktop-dark.svg`}
          width={180}
          height={height}
          className={className}
        />
      </div>
    </>
  );
};

export default Rhonix;
