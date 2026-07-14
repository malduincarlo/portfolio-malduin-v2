"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experienceItems } from "@/constants/portfolio";
import { NdaPreview } from "@/components/nda-preview";

const easeOut = [0.22, 1, 0.36, 1] as const;

const revealUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

type ExperienceItem = (typeof experienceItems)[number];

function isNdaPreview(media: ExperienceItem["media"], imageSrc?: string) {
  return (
    media === "dashboard" ||
    imageSrc?.includes("Main%20Dashboard") ||
    imageSrc?.includes("Cyber%20Response")
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-6 flex max-w-[565px] flex-wrap gap-2 sm:mt-[27px]">
      {tags.map((tag) => (
        <motion.li
          key={tag}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.35, ease: easeOut }}
          className="rounded-full border border-white/28 bg-white/7 px-3 py-2 text-[12px] font-medium leading-none text-white/90 sm:px-[15px] sm:py-[9px] sm:text-[13px]"
        >
          {tag}
        </motion.li>
      ))}
    </ul>
  );
}

function DashboardPlaceholder() {
  return (
    <div className="h-full w-full bg-[#11171a] p-3 sm:p-[18px]">
      <div className="mb-3 flex items-center justify-between text-[8px] text-white/65">
        <span>AQUILA</span>
        <span>dashboard preview</span>
      </div>
      <div className="grid h-full min-h-[216px] grid-cols-2 gap-[8px] sm:grid-cols-[1.08fr_1fr_1fr_1fr] sm:grid-rows-[1fr_1.2fr]">
        <div className="rounded-sm border border-white/8 bg-[#182226] p-3">
          <div className="grid grid-cols-4 gap-2">
            {["12", "23", "34", "3"].map((value) => (
              <div key={value}>
                <p className="text-[15px] font-bold text-white">{value}</p>
                <div className="mt-2 h-1 rounded-full bg-[#2a383d]" />
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-[13px] rounded-sm border border-red-400/25 bg-red-500/10"
              />
            ))}
          </div>
        </div>
        {[50, 77, 75].map((value) => (
          <div
            key={value}
            className="grid place-items-center rounded-sm border border-white/8 bg-[#182226]"
          >
            <div className="grid h-[82px] w-[82px] place-items-center rounded-full border-[9px] border-[#d7df22] border-b-[#e74d38] border-r-[#3c5034] text-center">
              <span className="text-[15px] font-bold text-[#d7df22]">
                {value}%
              </span>
            </div>
          </div>
        ))}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-sm border border-white/8 bg-[#172024] p-3"
          >
            <div className="h-2 w-1/2 rounded-full bg-white/15" />
            <div className="mt-7 h-2 rounded-full bg-[#d7df22]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DevicesPlaceholder() {
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.45fr)_minmax(92px,0.55fr)] items-center gap-3 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(0,0,0,0.18))] p-3 sm:gap-4 sm:p-5">
      <div className="relative h-[154px] overflow-hidden rounded-[7px] border border-white/18 bg-white/8 shadow-[0_16px_36px_rgba(0,0,0,0.2)] sm:h-[206px]">
        <Image
          src="/etcmf-web-login.png"
          alt="ETCMF web login preview"
          fill
          sizes="(max-width: 900px) 62vw, 330px"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto h-[210px] w-[100px] overflow-hidden rounded-[22px] border-[6px] border-black bg-white shadow-[0_16px_36px_rgba(0,0,0,0.24)] sm:h-[248px] sm:w-[118px] sm:rounded-[26px]">
        <Image
          src="/etcmf-mobile-dashboard.png"
          alt="ETCMF mobile dashboard preview"
          fill
          sizes="118px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function CollagePlaceholder() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-2 bg-[rgba(255,255,255,0.04)] p-3 sm:grid-cols-[1fr_1fr_0.95fr] sm:grid-rows-2 sm:gap-[12px] sm:p-[24px]">
      <div className="relative overflow-hidden bg-[#0d2028]">
        <Image
          src="/louiza%20cover%202.JPG"
          alt="Creative portrait preview"
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>
      <div className="relative overflow-hidden bg-[#61573c]">
        <Image
          src="/cover_whole.jpg"
          alt="Road photography preview"
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>
      <div className="relative row-span-2 overflow-hidden bg-[#faf1e8] max-sm:row-span-1">
        <Image
          src="/cover%20full.JPG"
          alt="Editorial portrait preview"
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>
      <div className="relative col-span-2 overflow-hidden bg-[#202326]">
        <Image
          src="/image%2013.png"
          alt="Videography preview"
          fill
          sizes="360px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function MediaPlaceholder({
  media,
  imageSrc,
}: {
  media: ExperienceItem["media"];
  imageSrc?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 24, scale: 0.98 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="h-[240px] overflow-hidden rounded-[9px] border border-white/24 bg-white/7 sm:h-[302px]"
    >
      {imageSrc ? (
        <div className="relative h-full w-full bg-[#11171a]">
          {isNdaPreview(media, imageSrc) ? (
            <NdaPreview>
              <Image
                src={imageSrc}
                alt={`${media} preview`}
                fill
                sizes="(max-width: 900px) 100vw, 525px"
                className="object-contain p-[18px]"
              />
            </NdaPreview>
          ) : (
            <Image
              src={imageSrc}
              alt={`${media} preview`}
              fill
              sizes="(max-width: 900px) 100vw, 525px"
              className="object-contain p-[18px]"
            />
          )}
        </div>
      ) : null}
      {!imageSrc && media === "dashboard" && (
        <NdaPreview>
          <DashboardPlaceholder />
        </NdaPreview>
      )}
      {media === "devices" && <DevicesPlaceholder />}
      {media === "collage" && <CollagePlaceholder />}
    </motion.div>
  );
}

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="grid grid-cols-1 gap-8 border-b border-white/14 pb-11 pt-10 first:pt-0 lg:grid-cols-[minmax(0,545px)_minmax(360px,525px)] lg:gap-[45px] lg:pb-[53px] lg:pt-[44px]"
    >
      <div>
        <motion.h3
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="text-[22px] font-semibold leading-tight text-white sm:text-[25px] sm:leading-none"
        >
          {item.title}
        </motion.h3>
        <motion.p
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="mt-[9px] text-[14px] leading-tight text-white/55 sm:text-[16px] sm:leading-none"
        >
          {item.subtitle}
        </motion.p>

        <motion.h4
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="mt-6 text-[16px] font-semibold leading-none text-white sm:mt-[26px]"
        >
          significant contributions
        </motion.h4>
        <motion.div
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="mt-5 space-y-4 text-[14px] leading-[1.35] text-white/82 sm:mt-[20px] sm:space-y-[17px] lg:leading-[1.1]"
        >
          {item.contributions.map((contribution) => (
            <p key={contribution}>{contribution}</p>
          ))}
        </motion.div>

        <TagList tags={item.tags} />
      </div>

      <div>
        <motion.div
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="mb-5 flex justify-start gap-3 text-[15px] leading-none text-white/85 sm:text-[17px] lg:mb-[52px] lg:justify-end lg:gap-[17px] lg:text-[19px]"
        >
          <span>{item.type}</span>
          <span className="text-[#c8b56d]/70">|</span>
          <span>{item.period}</span>
        </motion.div>
        <MediaPlaceholder media={item.media} imageSrc={item.imageSrc} />
      </div>
    </motion.article>
  );
}

export function WorkExperienceSection() {
  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative overflow-hidden px-4 pb-16 pt-16 font-sans text-white sm:px-6 sm:pb-[75px] sm:pt-[85px] lg:px-9"
    >
      <div className="relative z-10 mx-auto max-w-[1076px]">
        <motion.h2
          id="works-heading"
          initial={{ opacity: 0, y: 22, filter: "blur(7px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-9 text-[29px] font-bold leading-tight tracking-normal text-white sm:mb-[42px] sm:text-[36px] sm:leading-none"
        >
          works and experience.
        </motion.h2>

        <div>
          {experienceItems.map((item) => (
            <ExperienceRow key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
