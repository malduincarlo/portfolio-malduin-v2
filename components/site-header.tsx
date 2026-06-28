"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navigationItems, siteIdentity } from "@/constants/portfolio";

type SiteHeaderProps = {
  initialActiveHref?: string;
};

export function SiteHeader({ initialActiveHref = "#home" }: SiteHeaderProps) {
  const [activeHref, setActiveHref] = useState(initialActiveHref);

  useEffect(() => {
    const sectionIds = navigationItems
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 flex w-full items-start justify-between px-9 pt-[35px] text-white/70"
    >
      <a
        href="#home"
        className="text-[16px] font-normal leading-none transition-colors hover:text-white"
      >
        {siteIdentity.shortName}
      </a>

      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-[46px] text-[15px] leading-none">
          {navigationItems.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  animate={{
                    opacity: isActive ? 1 : 0.67,
                    fontWeight: isActive ? 600 : 400,
                  }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className={
                    isActive
                      ? "font-semibold text-white"
                      : "font-normal text-white/67 transition-colors hover:text-white"
                  }
                >
                  {item.label}
                </motion.a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
