"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gallerySections } from "@/constants/portfolio";

const easeOut = [0.22, 1, 0.36, 1] as const;

const revealUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

type GallerySectionData = (typeof gallerySections)[number];
type GalleryItemData = GallerySectionData["items"][number];

function DashboardDetails({ item }: { item: GalleryItemData }) {
  if (!item.label.toLowerCase().includes("aquila")) {
    return null;
  }

  return (
    <div className="absolute inset-3 grid grid-cols-4 grid-rows-3 gap-1.5 sm:inset-4 sm:gap-2">
      <div className="col-span-2 row-span-2 rounded-sm bg-black/30 p-2 sm:p-3">
        <div className="mb-3 grid grid-cols-4 gap-2">
          {["12", "23", "34", "3"].map((value) => (
            <div key={value}>
              <p className="text-[12px] font-bold text-white">{value}</p>
              <div className="mt-1 h-1 rounded-full bg-white/18" />
            </div>
          ))}
        </div>
        <div className="mx-auto grid h-[78px] w-[78px] place-items-center rounded-full border-[8px] border-[#d8df24] border-b-[#ec4e3d] border-r-[#495c37] text-[13px] font-bold text-[#d8df24]">
          50%
        </div>
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="rounded-sm bg-black/30 p-2">
          <div className="h-1.5 w-3/5 rounded-full bg-white/18" />
          <div className="mt-6 h-1.5 rounded-full bg-[#d8df24]" />
        </div>
      ))}
    </div>
  );
}

function EditorialDetails() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between">
      <div className="flex h-[46px] items-center justify-between bg-white px-4 text-[#202421] sm:h-[54px] sm:px-5">
        <span className="text-[13px] font-bold">perspective</span>
        <span className="text-[20px] leading-none">...</span>
      </div>
      <div className="px-4 pb-14 sm:px-5 sm:pb-[74px]">
        <div className="mx-auto h-[240px] max-w-[220px] rounded-t-full bg-[linear-gradient(135deg,#f2cfbd,#fdf3ea_55%,#d6bca8)] sm:h-[340px] sm:max-w-[260px]" />
      </div>
      <div className="bg-white px-5 py-5 text-[12px] font-semibold text-[#202421]">
        perspective&nbsp; for @eriel, pt. 2
      </div>
    </div>
  );
}

function VideoDetails({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="grid h-[112px] place-items-center bg-white">
        <span
          className={
            label.includes("LAAG")
              ? "text-[43px] font-black text-[#ee741f]"
              : "text-[43px] font-black text-[#263637]"
          }
        >
          {label.includes("LAAG") ? "LAAG MANOLO" : "LAPS MANOLO"}
        </span>
      </div>
      <div className="flex-1 bg-[#202326] p-5">
        <div className="mb-5 flex justify-between text-[10px] text-white/65">
          <span>{label}</span>
          <span className="rounded-sm bg-[#1f73ff] px-5 py-1 text-white">
            Following
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <div className="grid h-[58px] place-items-center rounded-sm bg-white">
                <span className="text-[13px] font-black text-[#253536]">
                  {label.includes("LAAG") ? "LAAG" : "LAPS"}
                </span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryTile({ item }: { item: GalleryItemData }) {
  const imageSrc = "imageSrc" in item ? item.imageSrc : undefined;
  const imageClassName =
    "imageClassName" in item ? item.imageClassName : undefined;
  const style = {
    background: item.background,
  } satisfies CSSProperties;

  return (
    <motion.div
      variants={revealUp}
      transition={{ duration: 0.65, ease: easeOut }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`relative overflow-hidden bg-white/8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] ${item.className}`}
      style={style}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={item.label}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={imageClassName ?? "object-cover"}
        />
      ) : (
        <>
          <DashboardDetails item={item} />
          {item.label === "editorial portrait" && <EditorialDetails />}
          {item.label.includes("channel") && <VideoDetails label={item.label} />}
        </>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(0,0,0,0.16))]" />
      <span className="sr-only">{item.label}</span>
    </motion.div>
  );
}

function GalleryGroup({ section }: { section: GallerySectionData }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="border-b border-white/13 pb-8 pt-7 first:pt-0 sm:pb-[37px] sm:pt-[30px]"
      aria-labelledby={`gallery-${section.layout}`}
    >
      <motion.h3
        id={`gallery-${section.layout}`}
        variants={revealUp}
        transition={{ duration: 0.62, ease: easeOut }}
        className="mb-5 text-[18px] font-bold leading-none text-white/92 sm:mb-[24px] sm:text-[20px]"
      >
        {section.title}
      </motion.h3>
      <div className="grid grid-cols-12 gap-3 sm:gap-[16px]">
        {section.items.map((item) => (
          <GalleryTile key={item.label} item={item} />
        ))}
      </div>
    </motion.section>
  );
}

export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative overflow-hidden px-4 pb-16 pt-16 font-sans text-white sm:px-6 sm:pb-[74px] sm:pt-[72px] lg:px-9"
    >
      <div className="relative z-10 mx-auto max-w-[1075px]">
        <motion.h2
          id="gallery-heading"
          initial={{ opacity: 0, y: 22, filter: "blur(7px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-7 text-[29px] font-bold leading-none text-white sm:mb-[32px]"
        >
          gallery.
        </motion.h2>

        {gallerySections.map((section) => (
          <GalleryGroup key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}
