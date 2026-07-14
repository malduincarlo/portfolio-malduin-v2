"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type SectionTransitionProps = {
  label: string;
};

export function SectionTransition({ label }: SectionTransitionProps) {
  const transitionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end start"],
  });

  const labelY = useTransform(scrollYProgress, [0, 0.5, 1], [28, 0, -28]);
  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [0, 1, 1, 0],
  );
  const lineScale = useTransform(scrollYProgress, [0.16, 0.5, 0.84], [0, 1, 0]);
  const veilOpacity = useTransform(
    scrollYProgress,
    [0, 0.42, 0.58, 1],
    [0, 0.36, 0.36, 0],
  );

  return (
    <div
      ref={transitionRef}
      aria-hidden="true"
      className="relative -mb-14 h-[18vh] min-h-[108px] overflow-hidden sm:-mb-[72px] sm:h-[22vh] sm:min-h-[132px]"
    >
      <motion.div
        style={{ opacity: veilOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(203,186,111,0.2),transparent_42%),linear-gradient(180deg,transparent,rgba(255,255,255,0.08)_48%,transparent)]"
      />
      <div className="sticky top-0 flex h-svh items-center justify-center px-4 py-10">
        <div className="grid w-full max-w-[860px] grid-cols-[minmax(32px,1fr)_auto_minmax(32px,1fr)] items-center gap-4 sm:gap-7">
          <motion.span
            style={{ scaleX: lineScale }}
            className="h-px origin-right bg-white/34"
          />
          <motion.span
            style={{ y: labelY, opacity: labelOpacity }}
            className="whitespace-nowrap text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-white/72 sm:text-[13px]"
          >
            {label}
          </motion.span>
          <motion.span
            style={{ scaleX: lineScale }}
            className="h-px origin-left bg-white/34"
          />
        </div>
      </div>
    </div>
  );
}
