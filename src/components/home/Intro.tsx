import { Ornament } from "@/components/ui/Celestial";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/config/business";
import { principles } from "@/data/content";

export function Intro() {
  return (
    <Section tone="ivory" labelledBy="intro-heading">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-6">
          <SectionHeading as="h2" id="intro-heading" title={business.tagline} />
          <Ornament className="mt-10" />
        </div>
        <div className="reveal space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-5 lg:col-start-8 lg:pt-4">
          <p>
            A tarot reading is a conversation with a deck of symbolic images. The cards don’t hand you a fixed future. They give you something to look at, so questions that were hard to put into words can finally take shape.
          </p>
          <p>
            People come to tarot for reflection, self-exploration and a fresh perspective. A reading can help you slow down, notice what you already feel, and consider your options with a little more clarity. The choices that follow are always yours.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 font-serif text-2xl text-plum">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
