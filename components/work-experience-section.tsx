"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experienceItems } from "@/constants/portfolio";

const easeOut = [0.22, 1, 0.36, 1] as const;

const revealUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

type ExperienceItem = (typeof experienceItems)[number];

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-[27px] flex max-w-[565px] flex-wrap gap-[8px]">
      {tags.map((tag) => (
        <motion.li
          key={tag}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.35, ease: easeOut }}
          className="rounded-full border border-white/28 bg-white/7 px-[15px] py-[9px] text-[13px] font-medium leading-none text-white/90"
        >
          {tag}
        </motion.li>
      ))}
    </ul>
  );
}

function DashboardPlaceholder() {
  return (
    <div className="h-full w-full bg-[#11171a] p-[18px]">
      <div className="mb-3 flex items-center justify-between text-[8px] text-white/65">
        <span>AQUILA</span>
        <span>dashboard preview</span>
      </div>
      <div className="grid h-[216px] grid-cols-[1.08fr_1fr_1fr_1fr] grid-rows-[1fr_1.2fr] gap-[8px]">
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
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(0,0,0,0.2))]">
      <div className="absolute left-[66px] top-[70px] h-[146px] w-[250px] -rotate-[20deg] rounded-[8px] bg-[#333] shadow-2xl">
        <div className="absolute inset-[6px] overflow-hidden rounded-[4px] bg-[#d7d9d3]">
          <Image
            src="/Login.png"
            alt="ETCMF login preview"
            fill
            sizes="250px"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-[42px] left-[58px] h-[54px] w-[170px] skew-x-[-24deg] rounded-sm bg-[#878985]" />
      </div>
      <div className="absolute right-[70px] top-[34px] h-[230px] w-[104px] rounded-[24px] bg-black p-[7px] shadow-2xl">
        <div className="relative h-full overflow-hidden rounded-[18px] bg-[#eef0ea]">
          <Image
            src="/Login%20Page.png"
            alt="ETCMF mobile preview"
            fill
            sizes="104px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function CollagePlaceholder() {
  return (
    <div className="grid h-full w-full grid-cols-[1fr_1fr_0.95fr] grid-rows-2 gap-[12px] bg-[rgba(255,255,255,0.04)] p-[24px]">
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
      <div className="relative row-span-2 overflow-hidden bg-[#faf1e8]">
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
      className="h-[302px] overflow-hidden rounded-[9px] border border-white/24 bg-white/7"
    >
      {imageSrc ? (
        <div className="relative h-full w-full bg-[#11171a]">
          <Image
            src={imageSrc}
            alt={`${media} preview`}
            fill
            sizes="(max-width: 900px) 100vw, 525px"
            className="object-contain p-[18px]"
          />
        </div>
      ) : null}
      {!imageSrc && media === "dashboard" && <DashboardPlaceholder />}
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
      className="grid grid-cols-[minmax(0,545px)_minmax(420px,525px)] gap-[45px] border-b border-white/14 pb-[53px] pt-[44px] first:pt-0"
    >
      <div>
        <motion.h3
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="text-[25px] font-semibold leading-none text-white"
        >
          {item.title}
        </motion.h3>
        <motion.p
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="mt-[9px] text-[16px] leading-none text-white/55"
        >
          {item.subtitle}
        </motion.p>

        <motion.h4
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="mt-[26px] text-[16px] font-semibold leading-none text-white"
        >
          significant contributions
        </motion.h4>
        <motion.div
          variants={revealUp}
          transition={{ duration: 0.62, ease: easeOut }}
          className="mt-[20px] space-y-[17px] text-[14px] leading-[1.1] text-white/82"
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
          className="mb-[52px] flex justify-end gap-[17px] text-[19px] leading-none text-white/85"
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
      className="relative overflow-hidden px-9 pb-[75px] pt-[85px] font-sans text-white"
    >
      <div className="relative z-10 mx-auto max-w-[1076px]">
        <motion.h2
          id="works-heading"
          initial={{ opacity: 0, y: 22, filter: "blur(7px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-[42px] text-[36px] font-bold leading-none tracking-normal text-white"
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
