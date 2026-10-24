import { PageHero } from "@/components/layout/PageHero";
import { CTA } from "@/components/home/CTA";
import { Ornament } from "@/components/ui/Celestial";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/config/business";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description: `Learn about ${business.name}: who we are, how we approach tarot readings, and what to expect from a session.`,
  path: "/about",
});

const approach = [
  {
    title: "Listening first",
    text: "Every reading begins with your question. The cards respond to what you bring, not to a fixed script.",
  },
  {
    title: "Honest about tarot",
    text: "Tarot is a tool for reflection. We never claim to predict the future with certainty or to replace professional advice.",
  },
  {
    title: "Your choices stay yours",
    text: "Insights are offered as perspectives to consider. What you do with them is entirely your decision.",
  },
] as const;

const expectations = [
  "A private, unhurried conversation focused on your questions.",
  "Cards drawn and explained in plain language, with space for your own interpretation.",
  "Gentle, honest reflections, not alarming or absolute statements.",
  "Time to ask follow-up questions before the session ends.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description={`${business.name} offers personalized tarot readings for people who want a quiet space to reflect and gain perspective.`}
      />

      <Section tone="ivory" labelledBy="who-heading">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading as="h2" id="who-heading" title="Who We Are" />
            <Ornament className="mt-8" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            <p>{business.description}</p>
            <p>
              We are based in {business.address}. Readings are arranged by appointment, and you can reach us by the contact form, WhatsApp, phone or email.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="plum" labelledBy="purpose-heading">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading as="h2" id="purpose-heading" tone="dark" title="Our Purpose" />
          </div>
          <p className="font-serif text-3xl leading-snug text-cream sm:text-4xl lg:col-span-7">
            To give people a calm, respectful space to pause, ask better questions and see their situation from a new angle.
          </p>
        </Container>
      </Section>

      <Section tone="cream" labelledBy="approach-heading">
        <Container>
          <SectionHeading as="h2" id="approach-heading" title="Our Approach to Tarot Readings" />
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {approach.map((item) => (
              <li key={item.title} className="border-t border-line pt-7">
                <h3 className="font-serif text-3xl font-semibold text-plum">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ivory" labelledBy="expect-heading">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading as="h2" id="expect-heading" title="What Clients Can Expect" />
          </div>
          <ul className="space-y-5 lg:col-span-6 lg:col-start-7">
            {expectations.map((item) => (
              <li key={item} className="flex gap-4 border-b border-line pb-5 text-lg leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-3 size-1.5 shrink-0 rotate-45 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="cream" labelledBy="philosophy-heading">
        <Container narrow className="text-center">
          <h2 id="philosophy-heading" className="font-serif text-4xl font-medium text-plum sm:text-5xl">
            Our Reading Philosophy
          </h2>
          <Ornament className="mx-auto mt-8" />
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            We see tarot as a mirror, not a map. The cards can help you notice what you already sense, name what feels unclear, and consider possibilities you may have overlooked. They cannot decide for you, and no reading guarantees an outcome. Our aim is to leave you feeling more thoughtful and more in command of your own path.
          </p>
        </Container>
      </Section>

      <CTA headingId="about-cta-heading" />
    </>
  );
}
