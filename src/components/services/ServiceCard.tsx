import { BriefcaseBusiness, Gem, Heart, MoonStar, Sparkles, Sprout, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Constellation, Starfield } from "@/components/ui/Celestial";
import type { Service, ServiceIconName } from "@/data/services";
import { cn, roman } from "@/lib/utils";

const icons: Record<ServiceIconName, LucideIcon> = {
  heart: Heart,
  briefcase: BriefcaseBusiness,
  sparkles: Sparkles,
  gem: Gem,
  sprout: Sprout,
  "moon-star": MoonStar,
};

export function ServiceIcon({ name, className, size = 28 }: { name: ServiceIconName; className?: string; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} strokeWidth={1.2} aria-hidden className={className} />;
}

interface ServiceCardProps {
  service: Service;
  /** 1-based position, shown as a roman numeral. */
  position: number;
  variant?: "dark" | "cream";
  className?: string;
}

export function ServiceCard({ service, position, variant = "cream", className }: ServiceCardProps) {
  const dark = variant === "dark";
  return (
    <article
      className={cn(
        "group relative isolate flex h-full min-h-[22rem] flex-col justify-between gap-12 overflow-hidden p-8 transition-[transform,border-color,box-shadow] duration-700 hover:-translate-y-1.5 sm:p-10",
        dark
          ? "rounded-t-[3rem] rounded-b-md border border-gold/25 bg-linear-to-br from-plum-dark to-[#1a1026] text-cream shadow-[0_28px_50px_-30px_rgba(0,0,0,0.9)] hover:border-gold/70"
          : "rounded-t-md rounded-b-[3rem] border border-line bg-cream text-ink shadow-[0_28px_50px_-34px_rgba(33,21,45,0.45)] hover:border-gold",
        className,
      )}
    >
      {/* Fine inner frame, like the border of a printed card. */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-2 -z-10 rounded-[inherit] border transition-colors duration-700",
          dark ? "border-gold/15 group-hover:border-gold/45" : "border-gold/35 group-hover:border-gold/80",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-7 top-5 -z-10 select-none font-serif text-7xl font-light leading-none sm:text-8xl",
          dark ? "text-gold/15" : "text-plum/10",
        )}
      >
        {roman(position)}
      </span>
      <Constellation
        className={cn(
          "absolute bottom-6 right-7 -z-10 w-32 transition-opacity duration-700 sm:w-40",
          dark ? "opacity-25 group-hover:opacity-50" : "opacity-40 group-hover:opacity-80",
          position % 2 === 0 && "-scale-x-100",
        )}
      />

      <div>
        <span
          className={cn(
            "grid size-16 place-items-center rounded-t-full rounded-b-xl border",
            dark ? "border-gold/50 text-gold-soft" : "border-violet/35 text-violet",
          )}
        >
          <ServiceIcon name={service.icon} size={28} />
        </span>
        <h3 className="mt-8 max-w-xs font-serif text-[2rem] font-semibold leading-[1.05] sm:text-4xl">{service.title}</h3>
        <p className={cn("mt-4 max-w-sm leading-relaxed", dark ? "text-cream/75" : "text-ink-soft")}>
          {service.description}
        </p>
      </div>

      <Link
        href={`/services#${service.id}`}
        className={cn(
          "group/link inline-flex w-fit items-center gap-3 text-sm font-medium tracking-wide transition-colors duration-300",
          dark ? "text-gold-soft" : "text-violet",
        )}
      >
        Explore Reading
        <span aria-hidden className="h-px w-8 bg-current transition-[width] duration-500 group-hover/link:w-14" />
        <span className="sr-only"> : {service.title}</span>
      </Link>
    </article>
  );
}

/** Mini tarot-style panel used beside each service on the services page. Decorative. */
export function ServiceEmblem({ service, position }: { service: Service; position: number }) {
  return (
    <div
      aria-hidden
      className="relative aspect-[3/4] w-full max-w-[7.5rem] overflow-hidden rounded-t-full rounded-b-2xl border border-gold/60 bg-linear-to-b from-plum-dark to-midnight text-gold-soft shadow-[0_24px_40px_-24px_rgba(33,21,45,0.6)] sm:max-w-[9rem]"
    >
      <Starfield />
      <span className="absolute inset-2 rounded-t-full rounded-b-xl border border-gold/30" />
      <span className="absolute inset-0 grid place-items-center">
        <ServiceIcon name={service.icon} size={38} />
      </span>
      <span className="absolute inset-x-0 bottom-4 text-center font-serif text-base tracking-[0.25em] text-gold">
        {roman(position)}
      </span>
    </div>
  );
}
