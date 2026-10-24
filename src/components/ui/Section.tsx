import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "ivory" | "cream" | "plum" | "midnight";

const toneClasses: Record<SectionTone, string> = {
  ivory: "bg-ivory text-ink",
  cream: "bg-cream text-ink",
  plum: "bg-plum text-cream",
  midnight: "bg-midnight text-cream",
};

const sizeClasses = {
  default: "py-20 sm:py-28 lg:py-36",
  md: "py-16 sm:py-20 lg:py-24",
  sm: "py-10 sm:py-12 lg:py-14",
} as const;

interface SectionProps {
  tone?: SectionTone;
  size?: keyof typeof sizeClasses;
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

/** Page band with consistent vertical rhythm. Dark tones set data-tone for focus styling. */
export function Section({ tone = "ivory", size = "default", id, labelledBy, className, children }: SectionProps) {
  const isDark = tone === "plum" || tone === "midnight";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={isDark ? "dark" : "light"}
      className={cn("relative overflow-hidden", sizeClasses[size], toneClasses[tone], className)}
    >
      {children}
    </section>
  );
}
