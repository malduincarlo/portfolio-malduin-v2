import { footerInfo } from "@/constants/portfolio";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center px-9 py-[44px] text-center font-sans text-white">
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-[520px] flex-col items-center text-[16px] leading-none text-white/88">
        <a
          href={`mailto:${footerInfo.email}`}
          className="font-bold text-white transition-colors hover:text-white/75"
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
