import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
};

export const RhonixLogoCondensed = ({
  height = 32,
  className = "",
}: LogoProps) => (
  <Image
    alt="Rhonix"
    src="/images/docs/shared/logos/rhonix-logo-navbar-mobile.png"
    width={height}
    height={32}
    className={className}
  />
);

const Rhonix = ({ height = 32, className = "" }: LogoProps) => (
  <Image
    alt="Rhonix"
    src="/images/docs/shared/logos/rhonix-logo-navbar-desktop.png"
    width={180}
    height={height}
    className={className}
  />
);

export default Rhonix;
