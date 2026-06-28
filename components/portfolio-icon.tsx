export type PortfolioIconName = "mail" | "linkedin" | "pin";

export function PortfolioIcon({ name }: { name: PortfolioIconName }) {
  const commonProps = {
    className: "h-[18px] w-[18px] shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "mail") {
    return (
      <svg {...commonProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...commonProps}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M16 16v-3a2 2 0 0 0-4 0" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M20 10c0 4.8-8 11-8 11S4 14.8 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
