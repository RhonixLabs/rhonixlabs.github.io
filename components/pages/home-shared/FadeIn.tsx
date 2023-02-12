import { motion, useInView } from "framer-motion";
import { useDeviceSize } from "hooks/useDeviceSize";
import { useRef, useState, useEffect } from "react";

export function FadeIn({
  children,
  className,
  noVertical,
  delay,
  viewTriggerOffset,
}: {
  children: React.ReactNode;
  className?: string;
  noVertical?: boolean;
  delay?: number;
  viewTriggerOffset?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: viewTriggerOffset ? "-128px" : "0px",
  });
  const [width, height] = useDeviceSize();

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: noVertical ? 0 : 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const getVariants = () => {
    const isMobile = width < 400; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      return {
        initial: {
          opacity: 0,
          y: noVertical ? 0 : 24,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      };
    } else return {};
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? "animate" : "initial"}
      variants={getVariants()}
      className={className}
      initial={false}
      transition={{
        duration: 1,
        delay: delay || 0,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
