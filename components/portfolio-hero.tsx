"use client";

import { motion } from "framer-motion";
import {
  contactLinks,
  locationInfo,
  siteIdentity,
} from "@/constants/portfolio";
import { PortfolioIcon, type PortfolioIconName } from "@/components/portfolio-icon";

const easeOut = [0.22, 1, 0.36, 1] as const;

function HeroCopy() {
  return (
    <motion.section
      id="home"
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
      className="absolute left-1/2 top-1/2 z-10 flex w-full max-w-[650px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 text-center text-white"
    >
      <motion.h1
        id="hero-heading"
        variants={{
          hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.75, ease: easeOut }}
        className="text-[clamp(2.5rem,3.35vw,3rem)] font-bold leading-[1.05] tracking-normal"
      >
        {siteIdentity.fullName}
      </motion.h1>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.65, ease: easeOut }}
        className="mt-[5px] text-[22px] font-medium leading-tight text-white/93"
      >
        {siteIdentity.role}
      </motion.p>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.65, ease: easeOut }}
        className="mt-[26px] max-w-[586px] text-[17px] font-semibold leading-[1.55] text-white/78"
      >
        {siteIdentity.intro}
      </motion.p>
    </motion.section>
  );
}

function FooterMeta() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
      className="absolute bottom-[30px] left-0 z-10 flex w-full items-end justify-between px-9 text-white/72"
    >
      <div>
        <p className="mb-[17px] text-[15px] leading-none">contacts.</p>
        <ul className="flex flex-wrap items-center gap-[44px] text-[16px] font-medium leading-none">
          {contactLinks.map((contact) => (
            <li key={contact.href}>
              <a
                href={contact.href}
                className="inline-flex items-center gap-[13px] transition-colors hover:text-white"
              >
                <PortfolioIcon name={contact.icon as PortfolioIconName} />
                <span>{contact.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-left">
        <p className="mb-[17px] text-[15px] leading-none">base.</p>
        <div className="inline-flex items-center gap-[13px] text-[16px] font-medium leading-none">
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
      className="relative min-h-svh overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center font-sans text-white"
    >
      <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
      <HeroCopy />
      <FooterMeta />
    </section>
  );
}
