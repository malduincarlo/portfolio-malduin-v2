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
    const sectionTargets = navigationItems
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => ({
        href,
        element: document.getElementById(href.slice(1)),
      }))
      .filter(
        (target): target is { href: string; element: HTMLElement } =>
          Boolean(target.element),
      );

    if (!sectionTargets.length) {
      return;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      const activationLine = 96;
      const currentTarget =
        sectionTargets.findLast(({ element }) => {
          const rect = element.getBoundingClientRect();
          return rect.top <= activationLine && rect.bottom > activationLine;
        }) ??
        sectionTargets.reduce((nearest, target) => {
          const nearestDistance = Math.abs(
            nearest.element.getBoundingClientRect().top - activationLine,
          );
          const targetDistance = Math.abs(
            target.element.getBoundingClientRect().top - activationLine,
          );

          return targetDistance < nearestDistance ? target : nearest;
        }, sectionTargets[0]);

      setActiveHref(currentTarget.href);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white/[0.025] px-9 py-[22px] text-white/70 backdrop-blur-[3px]"
    >
      <a
        href="#home"
        onClick={() => handleNavClick("#home")}
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
                  onClick={() => handleNavClick(item.href)}
                  animate={{
                    opacity: isActive ? 1 : 0.67,
                    fontWeight: isActive ? 600 : 400,
                    scale: isActive ? 1.04 : 1,
                    textShadow: isActive
                      ? "0 0 18px rgba(255,255,255,0.28)"
                      : "0 0 0 rgba(255,255,255,0)",
                  }}
                  transition={{
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    isActive
                      ? "inline-block font-semibold text-white"
                      : "inline-block font-normal text-white/67 transition-colors hover:text-white"
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
