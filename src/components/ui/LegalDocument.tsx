import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { business } from "@/config/business";

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalDocumentProps {
  intro?: string;
  sections: LegalSection[];
}

const slug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Readable long-form layout for Terms, Privacy and Disclaimer. */
export function LegalDocument({ intro, sections }: LegalDocumentProps) {
  return (
    <Section tone="ivory" className="py-16 sm:py-24 lg:py-28">
      <Container narrow>
        <p className="text-sm text-ink-soft">Last updated: {business.legalLastUpdated}</p>
        {intro ? <p className="mt-6 font-serif text-2xl leading-snug text-plum sm:text-3xl">{intro}</p> : null}
        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={slug(section.title)}>
              <h2 id={slug(section.title)} className="font-serif text-3xl font-semibold text-plum sm:text-4xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft sm:text-[1.05rem]">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.list ? (
                  <ul className="list-disc space-y-2 pl-6 marker:text-gold">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
