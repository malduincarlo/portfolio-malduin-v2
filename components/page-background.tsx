"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function PageBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  return (
    <>
      <motion.div
        className="fixed inset-[-8%] -z-20 bg-[url('/bg.jpg')] bg-cover bg-center"
        style={{ y, scale }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 -z-10 bg-black/5" aria-hidden="true" />
    </>
  );
}
