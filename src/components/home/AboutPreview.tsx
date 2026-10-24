import { Moon, Starfield } from "@/components/ui/Celestial";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/config/business";
import { TarotFan } from "./TarotVisual";

export function AboutPreview() {
  return (
    <Section tone="cream" labelledBy="about-preview-heading">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative mx-auto w-full max-w-lg">
          <div aria-hidden className="absolute inset-x-6 -inset-y-6 overflow-hidden rounded-t-[999px] rounded-b-3xl bg-plum">
            <Starfield />
            <Moon className="absolute right-6 top-8 size-14 opacity-70" />
          </div>
          <TarotFan idPrefix="about-fan" className="relative pt-10" />
        </div>
        <div className="reveal">
          <SectionHeading as="h2" id="about-preview-heading" title="A Moment to Pause, Reflect & Listen" />
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              {business.name} offers tarot readings as a quiet pause in a busy life. Each session is unhurried and personal, shaped around the questions you bring rather than a fixed script.
            </p>
            <p>
              Readings are honest about what tarot is: a tool for reflection and perspective, not a promise about what will happen. You leave with ideas to think about, not instructions to follow.
            </p>
          </div>
          <Button href="/about" variant="outline-dark" className="mt-10">
            Learn More
          </Button>
        </div>
      </Container>
    </Section>
  );
}
