"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  contactLinks,
  locationInfo,
  siteIdentity,
} from "@/constants/portfolio";
import { PortfolioIcon, type PortfolioIconName } from "@/components/portfolio-icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

function HeroCopy() {
  const copyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: copyRef,
    offset: ["start center", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.2]);

  return (
    <motion.section
      ref={copyRef}
      aria-labelledby="hero-heading"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.25,
          },
        },
      }}
      style={{ y, scale, opacity }}
      className="absolute left-1/2 top-[45%] z-10 flex w-full max-w-[650px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-5 text-center text-white sm:top-1/2 sm:px-6"
    >
      <motion.h1
        id="hero-heading"
        variants={{
          hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.75, ease: easeOut }}
        className="text-[clamp(2.25rem,9vw,3rem)] font-bold leading-[1.05] tracking-normal"
      >
        {siteIdentity.fullName}
      </motion.h1>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.65, ease: easeOut }}
        className="mt-[5px] text-[18px] font-medium leading-tight text-white/93 sm:text-[22px]"
      >
        {siteIdentity.role}
      </motion.p>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.65, ease: easeOut }}
        className="mt-5 max-w-[586px] text-[14px] font-semibold leading-[1.55] text-white/78 sm:mt-[26px] sm:text-[17px]"
      >
        {siteIdentity.intro}
      </motion.p>
    </motion.section>
  );
}

function FooterMeta() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [18, -36]);

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
      style={{ y }}
      className="absolute bottom-5 left-0 z-10 flex w-full flex-col items-center gap-5 px-5 text-center text-white/72 sm:bottom-[30px] sm:flex-row sm:items-end sm:justify-between sm:px-7 sm:text-left lg:px-9"
    >
      <div>
        <p className="mb-3 text-[14px] leading-none sm:mb-[17px] sm:text-[15px]">contacts.</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[14px] font-medium leading-none sm:justify-start sm:gap-[28px] sm:text-[15px] lg:gap-[44px] lg:text-[16px]">
          {contactLinks.map((contact) => (
            <li key={contact.href}>
              <a
                href={contact.href}
                className="inline-flex items-center gap-2 transition-colors hover:text-white sm:gap-[13px]"
              >
                <PortfolioIcon name={contact.icon as PortfolioIconName} />
                <span>{contact.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="mb-3 text-[14px] leading-none sm:mb-[17px] sm:text-[15px]">base.</p>
        <div className="inline-flex items-center gap-2 text-[14px] font-medium leading-none sm:gap-[13px] sm:text-[16px]">
          <PortfolioIcon name={locationInfo.icon as PortfolioIconName} />
          <span>{locationInfo.label}</span>
        </div>
      </div>
    </motion.footer>
  );
}

export function PortfolioHero() {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden font-sans text-white"
    >
      <HeroCopy />
      <FooterMeta />
    </section>
  );
}
