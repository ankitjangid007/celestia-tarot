import { Moon, Starfield } from "@/components/ui/Celestial";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BOOKING_HREF, whatsappUrl } from "@/lib/utils";

interface CTAProps {
  headingId?: string;
}

export function CTA({ headingId = "cta-heading" }: CTAProps) {
  return (
    <Section tone="midnight" labelledBy={headingId} className="isolate">
      <div
        aria-hidden
        className="animate-drift absolute left-1/2 top-1/2 -z-10 size-[44rem] max-w-[160vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,63,217,0.45),transparent_65%)]"
      />
      <Starfield className="-z-10" />
      <Moon className="absolute right-[-2rem] top-10 -z-10 size-40 opacity-30 sm:right-16 sm:size-52" />
      <Container className="text-center">
        <h2
          id={headingId}
          className="mx-auto max-w-4xl font-serif text-balance text-[clamp(2.5rem,7vw,5.25rem)] font-medium leading-[1.02] tracking-tight"
        >
          Ready to Explore Your Questions?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
          Take a moment to pause, reflect and explore what the cards may offer.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={BOOKING_HREF}>Book a Reading</Button>
          <Button href={whatsappUrl("Hello, I’d like to book a tarot reading.")} external variant="outline-light">
            Chat on WhatsApp
          </Button>
        </div>
      </Container>
    </Section>
  );
}
