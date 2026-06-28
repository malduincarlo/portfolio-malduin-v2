"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionStyle,
} from "framer-motion";
import {
  aboutCopy,
  profileHighlights,
  profileMeta,
  skillItems,
  workPlaceholders,
} from "@/constants/portfolio";

const easeOut = [0.22, 1, 0.36, 1] as const;

const revealUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function ProfilePhotoPlaceholder() {
  return (
    <div
      aria-label="Profile photo placeholder"
      className="relative h-[128px] w-[128px] overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] sm:h-[154px] sm:w-[154px]"
    >
      <Image
        src={profileMeta.imageSrc}
        alt={`${profileMeta.name} portrait`}
        fill
        sizes="(max-width: 640px) 128px, 154px"
        className="object-cover grayscale"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
    </div>
  );
}

function SkillLogo({ icon }: { icon: string }) {
  if (icon === "figma") {
    return (
      <svg viewBox="0 0 32 32" className="h-[27px] w-[27px]" aria-hidden>
        <circle cx="12" cy="8" r="5" fill="#F24E1E" />
        <circle cx="20" cy="8" r="5" fill="#FF7262" />
        <circle cx="12" cy="16" r="5" fill="#A259FF" />
        <circle cx="20" cy="16" r="5" fill="#1ABCFE" />
        <circle cx="12" cy="24" r="5" fill="#0ACF83" />
      </svg>
    );
  }

  if (icon === "lightroom") {
    return (
      <span className="grid h-[30px] w-[30px] place-items-center rounded-md bg-[#071F33] text-[13px] font-bold text-[#31A8FF]">
        Lr
      </span>
    );
  }

  if (icon === "premiere") {
    return (
      <span className="grid h-[30px] w-[30px] place-items-center rounded-md bg-[#2A154F] text-[13px] font-bold text-[#9999FF]">
        Pr
      </span>
    );
  }

  if (icon === "photoshop") {
    return (
      <span className="grid h-[30px] w-[30px] place-items-center rounded-md bg-[#001E36] text-[13px] font-bold text-[#31A8FF]">
        Ps
      </span>
    );
  }

  if (icon === "canva") {
    return (
      <span className="text-[11px] font-bold leading-none text-white">
        Canva
      </span>
    );
  }

  if (icon === "capcut") {
    return (
      <svg viewBox="0 0 32 32" className="h-[28px] w-[28px]" aria-hidden>
        <path
          d="M7 9h18l-6.5 7L25 23H7l6.5-7L7 9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M8 23 24 9M8 9l16 14"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "openai") {
    return <span className="text-[16px] font-bold leading-none">AI</span>;
  }

  return null;
}

function ProfileCard({ style }: { style?: MotionStyle }) {
  return (
    <motion.div
      variants={revealUp}
      transition={{ duration: 0.75, ease: easeOut }}
      style={style}
      className="mt-7 rounded-[18px] border border-white/18 px-4 pb-6 pt-6 text-white/80 sm:mt-[34px] sm:rounded-[22px] sm:px-[26px] sm:pb-[28px] sm:pt-[29px]"
    >
      <div className="mx-auto grid max-w-[725px] grid-cols-1 items-start justify-items-center gap-5 text-center sm:grid-cols-[154px_1fr] sm:justify-items-start sm:gap-[26px] sm:text-left">
        <ProfilePhotoPlaceholder />

        <div className="pt-[6px]">
          <h3 className="text-[24px] font-bold leading-tight text-white sm:text-[29px] sm:leading-none">
            {profileMeta.name}
          </h3>
          <p className="mt-[9px] text-[15px] font-normal leading-tight text-white/60 sm:text-[17px] sm:leading-none">
            {profileMeta.roles}
          </p>

          <dl className="mt-6 grid max-w-[420px] grid-cols-3 gap-4 sm:mt-[27px] sm:gap-[42px]">
            {profileHighlights.map((item) => (
              <div key={item.label}>
                <dd className="text-[16px] font-bold leading-tight text-white sm:text-[18px]">
                  {item.value}
                </dd>
                <dt className="text-[12px] leading-tight text-white/72 sm:text-[15px]">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>

          <dl className="mt-[17px] grid grid-cols-[52px_minmax(0,1fr)] gap-x-3 gap-y-1 text-left text-[11px] leading-[1.35] text-white/65 sm:grid-cols-[38px_1fr] sm:gap-x-[15px]">
            <dt>email</dt>
            <dd className="break-all">{profileMeta.email}</dd>
            <dt>linkedin</dt>
            <dd className="break-all">{profileMeta.linkedin}</dd>
          </dl>
        </div>
      </div>

      <motion.ul
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.045,
              delayChildren: 0.18,
            },
          },
        }}
        className="mx-auto mt-6 grid max-w-[585px] grid-cols-3 justify-items-center gap-x-4 gap-y-5 sm:mt-[18px] sm:flex sm:items-start sm:justify-between sm:gap-4"
      >
        {skillItems.map((skill) => (
          <motion.li
            key={skill.label}
            variants={{
              hidden: { opacity: 0, y: 14, scale: 0.94 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.42, ease: easeOut }}
            className="flex w-[58px] flex-col items-center"
          >
            <div className="grid h-[52px] w-[52px] place-items-center rounded-full border border-[#c0ad63]/65 bg-[#837d55]/25 text-white/80">
              {skill.icon ? (
                <SkillLogo icon={skill.icon} />
              ) : (
                <span className="text-[40px] font-light leading-none text-white/65">
                  {skill.mark}
                </span>
              )}
            </div>
            <p className="mt-[8px] text-center text-[12px] leading-none text-white/75">
              {skill.label}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-6 grid min-h-[420px] grid-cols-1 overflow-hidden rounded-[3px] sm:mt-[15px] sm:h-[320px] sm:min-h-0 sm:grid-cols-3 sm:grid-rows-2">
        {workPlaceholders.map((item) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, scale: 1.04 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: easeOut }}
            className={`relative overflow-hidden border border-black/15 ${item.className}`}
          >
            <Image
              src={item.imageSrc}
              alt={`${item.label} preview`}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_45%,rgba(0,0,0,0.16))]" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AboutCopy({ style }: { style?: MotionStyle }) {
  return (
    <motion.div
      variants={revealUp}
      transition={{ duration: 0.75, delay: 0.12, ease: easeOut }}
      style={style}
      className="mt-7 max-w-[1050px] text-white sm:mt-[31px]"
    >
      <p className="text-[17px] font-bold leading-[1.45] text-white sm:text-[20px]">
        {aboutCopy.lede}
      </p>

      <div className="mt-5 space-y-5 text-[16px] font-normal leading-[1.35] text-white/70 sm:mt-[23px] sm:space-y-[24px] sm:text-[20px] sm:leading-[1.16]">
        {aboutCopy.paragraphs.map((paragraph) => (
          <motion.p
            key={paragraph}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [34, -34]);
  const cardY = useTransform(scrollYProgress, [0, 1], [58, -42]);
  const copyY = useTransform(scrollYProgress, [0, 1], [32, -66]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative min-h-svh overflow-hidden px-4 pb-16 pt-24 font-sans text-white sm:px-6 sm:pb-[76px] sm:pt-[84px] lg:px-9"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="relative z-10 mx-auto max-w-[1075px]"
      >
        <motion.h2
          id="about-heading"
          variants={revealUp}
          transition={{ duration: 0.7, ease: easeOut }}
          style={{ y: headingY }}
          className="text-[29px] font-bold leading-none tracking-normal text-white sm:text-[34px]"
        >
          about.
        </motion.h2>
        <ProfileCard style={{ y: cardY }} />
        <AboutCopy style={{ y: copyY }} />
      </motion.div>
    </section>
  );
}
