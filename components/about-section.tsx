"use client";

import { motion } from "framer-motion";
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
      className="h-[154px] w-[154px] rounded-full border border-white/20 bg-[radial-gradient(circle_at_45%_28%,rgba(255,255,255,0.55),rgba(255,255,255,0.22)_28%,rgba(0,0,0,0.35)_70%)] shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]"
    />
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

function ProfileCard() {
  return (
    <motion.div
      variants={revealUp}
      transition={{ duration: 0.75, ease: easeOut }}
      className="mt-[34px] rounded-[22px] border border-white/18 px-[26px] pb-[28px] pt-[29px] text-white/80"
    >
      <div className="mx-auto grid max-w-[725px] grid-cols-[154px_1fr] items-start gap-[26px]">
        <ProfilePhotoPlaceholder />

        <div className="pt-[6px]">
          <h3 className="text-[29px] font-bold leading-none text-white">
            {profileMeta.name}
          </h3>
          <p className="mt-[9px] text-[17px] font-normal leading-none text-white/60">
            {profileMeta.roles}
          </p>

          <dl className="mt-[27px] grid max-w-[420px] grid-cols-3 gap-[42px]">
            {profileHighlights.map((item) => (
              <div key={item.label}>
                <dd className="text-[18px] font-bold leading-tight text-white">
                  {item.value}
                </dd>
                <dt className="text-[15px] leading-tight text-white/72">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>

          <dl className="mt-[17px] grid grid-cols-[38px_1fr] gap-x-[15px] gap-y-[1px] text-[11px] leading-[1.35] text-white/65">
            <dt>email</dt>
            <dd>{profileMeta.email}</dd>
            <dt>linkedin</dt>
            <dd>{profileMeta.linkedin}</dd>
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
        className="mx-auto mt-[18px] flex max-w-[585px] items-start justify-between gap-4"
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
              {"icon" in skill ? (
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

      <div className="mt-[15px] grid h-[320px] grid-cols-3 grid-rows-2 overflow-hidden rounded-[3px]">
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
            <div className={`absolute inset-0 ${item.tone}`} />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_45%,rgba(0,0,0,0.22))]" />
            <span className="absolute left-4 top-4 rounded-sm bg-black/35 px-3 py-2 text-[12px] font-semibold text-white/85">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AboutCopy() {
  return (
    <motion.div
      variants={revealUp}
      transition={{ duration: 0.75, delay: 0.12, ease: easeOut }}
      className="mt-[31px] max-w-[1050px] text-white"
    >
      <p className="text-[20px] font-bold leading-[1.45] text-white">
        {aboutCopy.lede}
      </p>

      <div className="mt-[23px] space-y-[24px] text-[20px] font-normal leading-[1.16] text-white/70">
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
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative min-h-svh overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center px-9 pb-[76px] pt-[84px] font-sans text-white"
    >
      <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
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
          className="text-[34px] font-bold leading-none tracking-normal text-white"
        >
          about.
        </motion.h2>
        <ProfileCard />
        <AboutCopy />
      </motion.div>
    </section>
  );
}
