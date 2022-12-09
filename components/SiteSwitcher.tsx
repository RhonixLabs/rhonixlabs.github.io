import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

export function useTurboSite(): "learn" | "build" | "explore" | undefined {
  const { pathname } = useRouter();

  if (pathname.startsWith("/learn")) {
    return "learn";
  }

  if (pathname.startsWith("/build")) {
    return "build";
  }

  if (pathname.startsWith("/explore")) {
    return "explore";
  }

  return undefined;
}

function SiteSwitcherLink({ href, text, isActive }) {
  const classes =
    "py-1 transition-colors duration-300 inline-block w-[50px] cursor-pointer hover:text-black dark:hover:text-white";

  const conditionalClasses = {
    "text-black dark:text-white": !!isActive,
  };

  return (
    <Link href={href} className={cn(classes, conditionalClasses)}>
      {text}
    </Link>
  );
}

function SiteSwitcher() {
  const site = useTurboSite();

  return (
    <div className="relative flex items-center justify-between p-2 text-xl group">
      <span
        className={cn(
          "flex h-[34px] w-[165px] flex-shrink-0 items-center rounded-[8px] border border-[#dedfde] dark:border-[#333333] p-1 duration-300 ease-in-out",
          "after:h-[24px] after:w-[47px] after:rounded-md dark:after:bg-[#333333] after:shadow-sm after:duration-300 after:border dark:after:border-[#333333] after:border-[#666666]/100 after:bg-gradient-to-b after:from-[#3286F1] after:to-[#C33AC3] after:opacity-20 dark:after:opacity-100 dark:after:bg-none",
          "indeterminate:after:hidden",
          {
            "after:hidden": !site,
            "after:translate-x-[52px]": site === "build",
            "after:translate-x-[99px]": site === "explore",

            "after:w-[56px]": site === "explore",
          }
        )}
      />

      <span
        className={cn(
          "z-50 absolute p-1 text-sm flex justify-between text-center w-[160px] text-[#666666] dark:text-[#888888]",
          { "hover:text-black dark:hover:text-white": site }
        )}
      >
        <SiteSwitcherLink
          href="/learn"
          text="Learn"
          isActive={site === "learn"}
        />
        <SiteSwitcherLink
          href="/build"
          text="Build"
          isActive={site === "build"}
        />
        <SiteSwitcherLink
          href="/explore"
          text="Explore"
          isActive={site === "explore"}
        />
      </span>
    </div>
  );
}

export default SiteSwitcher;
