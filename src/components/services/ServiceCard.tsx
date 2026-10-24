import { BriefcaseBusiness, Gem, Heart, MoonStar, Sparkles, Sprout, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { Service, ServiceIconName } from "@/data/services";
import { cn } from "@/lib/utils";

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
  return <Icon size={size} strokeWidth={1.3} aria-hidden className={className} />;
}

interface ServiceCardProps {
  service: Service;
  variant?: "dark" | "cream";
  className?: string;
}

export function ServiceCard({ service, variant = "cream", className }: ServiceCardProps) {
  const dark = variant === "dark";
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col justify-between gap-10 border p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 sm:p-9",
        dark
          ? "rounded-t-[2.5rem] rounded-b-md border-line-dark bg-plum-dark/70 text-cream shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] hover:border-gold"
          : "rounded-t-md rounded-b-[2.5rem] border-line bg-cream text-ink shadow-[0_18px_40px_-26px_rgba(33,21,45,0.35)] hover:border-gold",
        className,
      )}
    >
      <div>
        <ServiceIcon name={service.icon} size={34} className={dark ? "text-gold-soft" : "text-violet"} />
        <h3 className="mt-8 font-serif text-3xl font-semibold leading-tight sm:text-[2rem]">{service.title}</h3>
        <p className={cn("mt-4 max-w-md leading-relaxed", dark ? "text-cream/75" : "text-ink-soft")}>
          {service.description}
        </p>
      </div>
      <Link
        href={`/services#${service.id}`}
        className={cn(
          "inline-flex w-fit items-center gap-3 border-b pb-1 text-sm font-medium tracking-wide transition-colors duration-300",
          dark ? "border-gold/50 text-gold-soft hover:border-gold-soft" : "border-violet/40 text-violet hover:border-violet",
        )}
      >
        Explore Reading
        <span className="sr-only"> : {service.title}</span>
      </Link>
    </article>
  );
}
