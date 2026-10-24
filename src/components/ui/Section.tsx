import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "ivory" | "cream" | "plum" | "midnight";

const toneClasses: Record<SectionTone, string> = {
  ivory: "bg-ivory text-ink",
  cream: "bg-cream text-ink",
  plum: "bg-plum text-cream",
  midnight: "bg-midnight text-cream",
};

interface SectionProps {
  tone?: SectionTone;
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

/** Page band with consistent vertical rhythm. Dark tones set data-tone for focus styling. */
export function Section({ tone = "ivory", id, labelledBy, className, children }: SectionProps) {
  const isDark = tone === "plum" || tone === "midnight";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={isDark ? "dark" : "light"}
      className={cn("relative overflow-hidden py-20 sm:py-28 lg:py-36", toneClasses[tone], className)}
    >
      {children}
    </section>
  );
}
