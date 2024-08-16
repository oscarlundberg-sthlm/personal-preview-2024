import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  iconComponent: ReactNode;
  href: string;
  ariaLabel: string;
  style: "vwDynamic" | "verticalOverlay";
}

function SocialLink({ iconComponent, href, ariaLabel, style }: Props) {
  if (style === "verticalOverlay") {
    return (
      <Link
        href={href}
        className="p-0.5 flex items-center justify-center group rounded-full relative"
        aria-label={ariaLabel}
      >
        <div className="absolute inset-[3px] bg-2025-red shadow-md rounded-full -z-10"></div>
        <div className="absolute inset-[3px] bg-gray-400/20 rounded-full -z-10"></div>
        <div className="p-2.5">{iconComponent}</div>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="p-0.5 flex items-center justify-center group rounded-full sm:border border-current relative"
      aria-label={ariaLabel}
    >
      <div className="hidden sm:block absolute -inset-px transition duration-100 ease-linear border border-current rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[1.2] -z-10"></div>
      <div className="sm:hidden absolute inset-[3px] bg-white/20 rounded-full"></div>
      <div className="p-2.5">{iconComponent}</div>
    </Link>
  );
}

export default SocialLink;
