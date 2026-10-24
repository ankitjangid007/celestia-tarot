import { Constellation, Moon, OrbitRings, Starfield } from "@/components/ui/Celestial";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BOOKING_HREF } from "@/lib/utils";
import { TarotVisual } from "./TarotVisual";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      data-tone="dark"
      className="relative isolate overflow-hidden bg-midnight text-cream"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(109,63,217,0.38),transparent_55%),radial-gradient(ellipse_at_10%_100%,rgba(48,32,68,0.9),transparent_60%),linear-gradient(180deg,#08070b,#21152d)]"
      />
      <Starfield className="-z-10" />
      <Moon className="absolute left-[-3rem] top-32 -z-10 hidden size-40 opacity-25 lg:block" />
      <Constellation className="absolute bottom-16 left-8 -z-10 hidden w-56 opacity-50 sm:block" />

      <Container className="grid min-h-svh items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:pb-24 lg:pt-36">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="rise rise-1 font-serif text-balance text-[clamp(2.9rem,11.2vw,6.6rem)] lg:text-[clamp(4.5rem,6.6vw,6.6rem)] font-medium leading-[0.96] tracking-tight"
          >
            Discover What <em className="font-normal italic text-gold-soft">the Cards</em> Have to Reveal
          </h1>
          <p className="rise rise-2 mt-8 max-w-xl font-serif text-[clamp(1.35rem,3.4vw,2rem)] italic leading-snug text-gold-soft">
            Tarot Readings for Clarity, Reflection &amp; Possibility
          </p>
          <p className="rise rise-3 mt-6 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
            Personalized tarot readings designed to help you reflect, explore your questions, and gain a fresh perspective on life’s important moments.
          </p>
          <div className="rise rise-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={BOOKING_HREF} external>Book a Reading</Button>
            <Button href="/services" variant="outline-light">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="rise rise-5 relative mx-auto w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-[22rem]">
          <div aria-hidden className="animate-drift absolute -inset-16 rounded-full bg-violet/30 blur-3xl" />
          <OrbitRings className="absolute left-1/2 top-1/2 w-[175%] max-w-none -translate-x-1/2 -translate-y-1/2" />
          <TarotVisual idPrefix="hero" className="animate-float relative" />
        </div>
      </Container>
      <div aria-hidden className="h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
