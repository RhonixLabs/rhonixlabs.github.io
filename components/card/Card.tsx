import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.css";
import cn from "classnames";

const variants = {
  hidden: { opacity: 0 },
  active: { opacity: 1 },
};

export function Card({
  alt,
  href,
  title,
  icon: Icon,
  className,
  children,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [hovering, setHovering] = React.useState(false);
  return (
    <Link
      href={href}
      className={cn(styles["counter-border"], " w-full h-[100]px sm:h-[100px]")}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.i
        initial="hidden"
        animate={hovering ? "active" : "hidden"}
        variants={variants}
        aria-hidden="true"
      ></motion.i>
      <div
        className={cn(
          "relative   w-full h-full max-w-full   md:!pb-4 md:!pt-4 p-3 rounded-xl overflow-hidden flex flex-col items-center  border border-[rgba(255,255,255,0.05)]",
          className
        )}
      >
        <div className="flex absolute items-center justify-center flex-1 mb-7 md:mb-0">
          <Icon />
        </div>

        <div className="flex text-white justify-center flex-col items-center flex-1">
          <div>{title}</div>
          {children}
        </div>
      </div>
    </Link>
  );
}

export function CardBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono font-bold text-xs text-black/50 dark:text-white/50  px-[6px] py-[3.25px] tracking-[-0.01em] rounded-[6px] uppercase flex justify-center items-center bg-black/5 dark:bg-white/[0.15] border border-black/[0.1] dark:border-white/[0.1]">
      {children}
    </div>
  );
}
