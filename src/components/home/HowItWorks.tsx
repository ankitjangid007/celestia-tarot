import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/data/content";

export function HowItWorks() {
  return (
    <Section tone="ivory" labelledBy="how-heading">
      <Container>
        <div className="reveal">
          <SectionHeading as="h2" id="how-heading" eyebrow="The Process" title="How It Works" description="From first message to your session, in four simple steps." />
        </div>
        <ol className="relative mt-16 grid gap-12 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden className="absolute left-[1.9rem] top-4 h-[calc(100%-2rem)] w-px bg-line lg:left-0 lg:top-[2.6rem] lg:h-px lg:w-full" />
          {steps.map((step) => (
            <li key={step.number} className="reveal relative flex gap-6 lg:block">
              <span className="relative z-10 flex h-16 shrink-0 items-center bg-ivory pr-3 font-serif text-6xl font-medium leading-none text-gold lg:h-auto lg:pr-6 lg:text-7xl">
                {step.number}
              </span>
              <div className="lg:mt-8">
                <h3 className="font-serif text-3xl font-semibold leading-tight text-plum">{step.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
