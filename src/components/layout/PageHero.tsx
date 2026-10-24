import type { ReactNode } from "react";
import { Constellation, Moon, Starfield } from "@/components/ui/Celestial";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  description?: ReactNode;
}

/** Dark hero band shared by inner pages. Keeps the fixed navbar legible. */
export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section data-tone="dark" className="relative isolate overflow-hidden bg-midnight text-cream">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(109,63,217,0.35),transparent_55%),linear-gradient(180deg,#08070b,#21152d)]"
      />
      <Starfield className="-z-10" />
      <Moon className="absolute -right-6 top-24 -z-10 size-36 opacity-30 sm:right-20 sm:size-52" />
      <Constellation className="absolute bottom-6 left-6 -z-10 hidden w-44 opacity-45 sm:block" />
      <Container className="pb-20 pt-36 sm:pb-24 sm:pt-44">
        <h1 className="rise rise-1 max-w-4xl font-serif text-balance text-[clamp(2.75rem,8vw,5.75rem)] font-medium leading-[0.98] tracking-tight">
          {title}
        </h1>
        {description ? (
          <p className="rise rise-2 mt-7 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl">{description}</p>
        ) : null}
      </Container>
      <div aria-hidden className="h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
