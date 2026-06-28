"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navigationItems, siteIdentity } from "@/constants/portfolio";

type SiteHeaderProps = {
  initialActiveHref?: string;
};

export function SiteHeader({ initialActiveHref = "#home" }: SiteHeaderProps) {
  const [activeHref, setActiveHref] = useState(initialActiveHref);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white/[0.035] px-4 py-4 text-white/70 backdrop-blur-[6px] sm:px-6 md:px-9 md:py-[22px]"
    >
      <a
        href="#home"
        onClick={() => handleNavClick("#home")}
        className="relative z-10 text-[15px] font-normal leading-none transition-colors hover:text-white sm:text-[16px]"
      >
        {siteIdentity.shortName}
      </a>

      <button
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
        className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-white/14 bg-black/12 text-white transition-colors hover:bg-white/10 sm:hidden"
      >
        <span className="sr-only">
          {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        </span>
        <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
          <span
            className={`h-px w-full bg-current transition-transform ${
              isMenuOpen ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-current transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-full bg-current transition-transform ${
              isMenuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <nav aria-label="Primary navigation" className="hidden sm:block">
        <ul className="flex items-center gap-7 text-[14px] leading-none md:gap-[46px] md:text-[15px]">
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

      <motion.nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        initial={false}
        animate={
          isMenuOpen
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -8, pointerEvents: "none" }
        }
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 bg-[#263d37]/98 px-8 pb-10 pt-[96px] backdrop-blur-md sm:hidden"
      >
        <ul className="flex max-w-[320px] flex-col gap-1 text-[15px] font-semibold leading-none">
          {navigationItems.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => handleNavClick(item.href)}
                  className={
                    isActive
                      ? "block rounded-[8px] bg-white/10 px-4 py-4 text-white"
                      : "block rounded-[8px] px-4 py-4 text-white/76 transition-colors hover:bg-white/8 hover:text-white"
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </>
  );
}
