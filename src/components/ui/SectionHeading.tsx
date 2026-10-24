import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small label above the heading. Use sparingly. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em]",
            align === "center" && "justify-center",
            dark ? "text-gold-soft" : "text-violet",
          )}
        >
          <span aria-hidden className={cn("h-px w-10", dark ? "bg-gold/70" : "bg-violet/50")} />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          "font-serif text-balance text-[clamp(2.35rem,6.4vw,4.5rem)] font-medium leading-[1.02] tracking-tight",
          dark ? "text-cream" : "text-plum",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto",
            dark ? "text-cream/75" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
