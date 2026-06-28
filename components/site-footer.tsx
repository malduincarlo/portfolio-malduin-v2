import { footerInfo } from "@/constants/portfolio";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden px-4 py-10 text-center font-sans text-white sm:px-9 sm:py-[44px]">
      <div className="relative z-10 mx-auto flex max-w-[520px] flex-col items-center text-[14px] leading-tight text-white/88 sm:text-[16px] sm:leading-none">
        <a
          href={`mailto:${footerInfo.email}`}
          className="break-all font-bold text-white transition-colors hover:text-white/75"
        >
          {footerInfo.email}
        </a>
        <a
          href={`tel:${footerInfo.phone.replaceAll("-", "")}`}
          className="mt-[18px] font-normal transition-colors hover:text-white"
        >
          {footerInfo.phone}
        </a>
        <p className="mt-[17px] font-normal">{footerInfo.copyright}</p>
      </div>
    </footer>
  );
}
