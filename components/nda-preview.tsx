import type { ReactNode } from "react";

export function NdaPreview({ children }: { children: ReactNode }) {
  return (
    <div
      tabIndex={0}
      className="group/nda relative h-full w-full overflow-hidden focus:outline-none"
      aria-label="Preview hidden under NDA"
    >
      <div className="absolute inset-0 scale-[1.015] blur-[4px] brightness-[0.82] saturate-[0.85] transition duration-300 group-hover/nda:blur-[5px] group-focus/nda:blur-[5px]">
        {children}
      </div>
      <div className="absolute inset-0 bg-black/22" aria-hidden="true" />
      <div className="absolute inset-0 grid place-items-center opacity-0 transition duration-200 group-hover/nda:opacity-100 group-focus/nda:opacity-100">
        <span className="rounded-full border border-white/24 bg-black/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
          under NDA
        </span>
      </div>
    </div>
  );
}
