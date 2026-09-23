"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gallerySections } from "@/constants/gallery";
import { NdaPreview } from "@/components/nda-preview";

const easeOut = [0.22, 1, 0.36, 1] as const;

const revealUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

type GallerySectionData = (typeof gallerySections)[number];
type GalleryItemData = GallerySectionData["items"][number];
type SelectedImage = { imageSrc: string; label: string; nda?: boolean };

function isNdaItem(item: GalleryItemData, imageSrc?: string) {
  return (
    item.label.toLowerCase().includes("aquila") ||
    imageSrc?.includes("Main%20Dashboard") ||
    imageSrc?.includes("Cyber%20Response")
  );
}

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

function GalleryTile({
  item,
  showCaption = true,
  onOpenImage,
}: {
  item: GalleryItemData;
  showCaption?: boolean;
  onOpenImage?: (images: SelectedImage[]) => void;
}) {
  const imageSrc = "imageSrc" in item ? item.imageSrc : undefined;
  const previewImages = "previewImages" in item ? item.previewImages : undefined;
  const imageClassName =
    "imageClassName" in item ? item.imageClassName : undefined;
  const frameClassName =
    "frameClassName" in item ? item.frameClassName : undefined;
  const sampleUrl = "sampleUrl" in item ? item.sampleUrl : undefined;
  const imagesToOpen: SelectedImage[] | undefined = previewImages
    ? [...previewImages]
    : imageSrc
      ? [{ imageSrc, label: item.label, nda: isNdaItem(item, imageSrc) }]
      : undefined;
  const style = {
    background: item.background,
  } satisfies CSSProperties;

  return (
    <motion.article
      variants={revealUp}
      transition={{ duration: 0.65, ease: easeOut }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`group min-w-0 ${item.className}`}
    >
      <div
        className={`relative overflow-hidden rounded-[8px] border border-white/12 bg-white/8 shadow-[0_18px_45px_rgba(0,0,0,0.16)] focus-within:ring-2 focus-within:ring-[#c8b56d] focus-within:ring-offset-2 focus-within:ring-offset-[#121515] ${frameClassName}`}
        style={style}
      >
        {previewImages ? (
          <div className="absolute inset-0 grid grid-cols-2 gap-2 bg-[#e9eee6] p-3 sm:gap-3 sm:p-4">
            {previewImages.map((preview) => (
              <div
                key={preview.imageSrc}
                className="relative min-h-0 overflow-hidden rounded-[5px] bg-white shadow-[0_8px_20px_rgba(28,54,26,0.13)]"
              >
                <Image
                  src={preview.imageSrc}
                  alt={preview.label}
                  fill
                  sizes="(max-width: 640px) 45vw, 16vw"
                  className="object-contain transition duration-500 group-hover:scale-[1.025]"
                />
              </div>
            ))}
          </div>
        ) : imageSrc ? (
          isNdaItem(item, imageSrc) ? (
            <NdaPreview>
              <Image
                src={imageSrc}
                alt={item.label}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={imageClassName ?? "object-cover"}
              />
            </NdaPreview>
          ) : (
            <Image
              src={imageSrc}
              alt={item.label}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={`${imageClassName ?? "object-cover"} transition duration-500 ease-out group-hover:scale-[1.035]`}
            />
          )
        ) : (
          <>
            <DashboardDetails item={item} />
            {item.label === "editorial portrait" && <EditorialDetails />}
            {item.label.includes("channel") && (
              <VideoDetails label={item.label} />
            )}
          </>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(0,0,0,0.16))]" />
        {onOpenImage && imagesToOpen && (
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-in focus:outline-none"
            aria-label={previewImages ? `View image gallery: ${item.label}` : `View full image: ${item.label}`}
            onClick={() => onOpenImage(imagesToOpen)}
          >
            <span className="absolute bottom-3 right-3 rounded-full border border-white/25 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100">
              {previewImages ? "View screens" : showCaption ? "View design" : "View photo"}
            </span>
          </button>
        )}
        {sampleUrl && (
          <a
            href={sampleUrl}
            aria-label={`Click to show sample output for ${item.label}`}
            className="absolute inset-0 flex cursor-pointer items-end justify-center bg-black/0 pb-4 transition-colors duration-200 hover:bg-black/55 focus-visible:bg-black/55 focus-visible:outline-none sm:items-center sm:pb-0"
          >
            <span className="rounded-full border border-white/35 bg-black/70 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
              Click to show sample output
            </span>
          </a>
        )}
      </div>
      {showCaption && (
        <div className="pt-3 sm:pt-[14px]">
          <p className="text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-[#c8b56d]/85">
            {item.meta}
          </p>
          <h4 className="mt-2 truncate text-[16px] font-bold leading-tight text-white sm:text-[18px]">
            {item.label}
          </h4>
          <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.35] text-white/58 sm:text-[14px]">
            {item.description}
          </p>
        </div>
      )}
    </motion.article>
  );
}

function GalleryGroup({
  section,
  onOpenImage,
}: {
  section: GallerySectionData;
  onOpenImage: (images: SelectedImage[]) => void;
}) {
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
          <GalleryTile
            key={item.label}
            item={item}
            showCaption={section.layout !== "photo"}
            onOpenImage={section.layout === "video" ? undefined : onOpenImage}
          />
        ))}
      </div>
    </motion.section>
  );
}

export function GallerySection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [viewerImages, setViewerImages] = useState<SelectedImage[]>([]);
  const [viewerIndex, setViewerIndex] = useState(0);
  const selectedImage = viewerImages[viewerIndex];

  useEffect(() => {
    if (viewerImages.length === 0) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [viewerImages.length]);

  function openImages(images: SelectedImage[]) {
    setViewerImages(images);
    setViewerIndex(0);
    dialogRef.current?.showModal();
  }

  function stepImage(direction: number) {
    setViewerIndex((current) =>
      (current + direction + viewerImages.length) % viewerImages.length,
    );
  }

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
          <GalleryGroup
            key={section.title}
            section={section}
            onOpenImage={openImages}
          />
        ))}
      </div>
      <dialog
        ref={dialogRef}
        aria-label={selectedImage ? `Full image: ${selectedImage.label}` : "Image viewer"}
        onClose={() => setViewerImages([])}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (viewerImages.length < 2) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            stepImage(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
        className="fixed inset-0 z-50 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden bg-[#080a0a]/96 p-0 text-white backdrop:bg-black/90 open:flex open:items-center open:justify-center"
      >
        <div className="flex h-full w-full max-w-[1600px] flex-col px-4 pb-5 pt-4 sm:px-8 sm:pb-7 sm:pt-6">
          <div className="flex shrink-0 justify-end pb-3 sm:pb-4">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:bg-white/12 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8b56d]"
              aria-label="Close image viewer"
            >
              <span aria-hidden="true" className="text-[25px] font-light leading-none">×</span>
            </button>
          </div>
          {selectedImage && (
            <div className={`relative min-h-0 flex-1 ${viewerImages.length > 1 ? "mx-auto w-full max-w-[560px]" : ""}`}>
              <Image
                src={selectedImage.imageSrc}
                alt={selectedImage.label}
                fill
                sizes="100vw"
                className={`object-contain ${selectedImage.nda ? "blur-[6px] brightness-[0.75]" : ""}`}
              />
              {selectedImage.nda && (
                <div className="absolute inset-0 grid place-items-center">
                  <span className="rounded-full border border-white/25 bg-black/65 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    Under NDA
                  </span>
                </div>
              )}
              {viewerImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepImage(-1)}
                    aria-label="Previous image"
                    className="absolute left-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/65 text-white/85 transition hover:bg-black/85 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8b56d] sm:left-4 sm:h-12 sm:w-12"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => stepImage(1)}
                    aria-label="Next image"
                    className="absolute right-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/65 text-white/85 transition hover:bg-black/85 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8b56d] sm:right-4 sm:h-12 sm:w-12"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <span className="sr-only" aria-live="polite">
                    Image {viewerIndex + 1} of {viewerImages.length}
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
}
