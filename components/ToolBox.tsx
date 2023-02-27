import Link from "next/link";
import Image from "next/image";

export const ToolBox = ({ title, description, icon, link }) => {
  return (
    <Link
      href={link}
      className="flex gap-4 bg-white dark:bg-black rounded-3xl border border-vega-border-muted p-4 hover:-translate-y-2 md:p-5 lg:block lg:pb-8"
    >
      <div className="w-[4.75rem] shrink-0 lg:w-[5.9375rem]">
        <Image
          src={icon}
          height={32}
          width={32}
          alt={title}
          className="lg:mb-6 lg:w-auto "
        />
      </div>
      <div>
        <div className="title-s mb-1 md:mb-3">{title}</div>
        <p className="copy-xxs !mb-0 text-vega-text-muted">{description}</p>
      </div>
    </Link>
  );
};
