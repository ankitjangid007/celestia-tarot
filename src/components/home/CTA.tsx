import { LogoMark, Moon, OrbitRings, Starfield } from "@/components/ui/Celestial";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BOOKING_HREF, whatsappUrl } from "@/lib/utils";

interface CTAProps {
  headingId?: string;
}

export function CTA({ headingId = "cta-heading" }: CTAProps) {
  return (
    <Section tone="midnight" labelledBy={headingId} className="isolate" size="md">
      <div
        aria-hidden
        className="animate-drift absolute left-1/2 top-1/2 -z-10 size-[48rem] max-w-[170vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,63,217,0.5),transparent_65%)]"
      />
      <Starfield className="-z-10" />
      <OrbitRings className="absolute left-1/2 top-1/2 -z-10 w-[64rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <Moon className="absolute -left-8 bottom-8 -z-10 size-36 opacity-25 sm:left-16 sm:size-48" />

      <Container>
        {/* Arched "tarot window" framing the call to action. */}
        <div className="relative mx-auto max-w-4xl rounded-t-[9rem] rounded-b-3xl border border-gold/50 bg-midnight/60 px-6 pb-14 pt-20 text-center backdrop-blur-[2px] sm:rounded-t-[20rem] sm:px-16 sm:pb-20 sm:pt-28">
          <span aria-hidden className="pointer-events-none absolute inset-2 rounded-[inherit] border border-gold/20" />
          <LogoMark className="mx-auto mb-8 h-20 w-auto" />
          <h2
            id={headingId}
            className="mx-auto max-w-3xl font-serif text-balance text-[clamp(2.4rem,6.5vw,4.75rem)] font-medium leading-[1.02] tracking-tight"
          >
            Ready to Explore Your Questions?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-cream/75">
            Take a moment to pause, reflect and explore what the cards may offer.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={BOOKING_HREF} external>Book a Reading</Button>
            <Button href={whatsappUrl("Hello, I’d like to book a tarot reading.")} external variant="outline-light">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
