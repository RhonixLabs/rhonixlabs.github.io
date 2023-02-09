import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
};

export const SignalIcon = ({ height = 24, className = "" }: LogoProps) => {
  return (
    <>
      <div className="dark:hidden">
        <Image
          alt="Signal"
          src={`/images/logos/white/signal-logo.svg`}
          width={24}
          height={height}
          priority
          className={className}
        />
      </div>
      <div className="dark:block hidden invert">
        <Image
          alt="Signal"
          src={`/images/logos/white/signal-logo.svg`}
          priority
          width={24}
          height={height}
          className={className}
        />
      </div>
    </>
  );
};
