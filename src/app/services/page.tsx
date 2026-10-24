import Link from "next/link";
import { CTA } from "@/components/home/CTA";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceIcon } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { business } from "@/config/business";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";
import { BOOKING_HREF, cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Tarot Reading Services",
  description: `Explore ${business.name} tarot readings for love, career, personal growth, compatibility and spiritual reflection.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Tarot Reading Services"
        description="Six kinds of reading, each shaped around the questions you bring. Choose the one that fits, or begin with a general reading."
      />

      <Section tone="ivory" className="py-12 sm:py-16 lg:py-16">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-ink-soft">
            All readings are offered for reflection and personal guidance. They are not medical, legal, financial or mental-health advice, and no outcome is guaranteed. Please read our{" "}
            <Link href="/disclaimer" className="font-medium text-violet underline underline-offset-4">
              disclaimer
            </Link>
            .
          </p>
        </Container>
      </Section>

      {services.map((service, index) => {
        const headingId = `${service.id}-heading`;
        return (
          <Section
            key={service.id}
            id={service.id}
            tone={index % 2 === 0 ? "cream" : "ivory"}
            labelledBy={headingId}
            className="py-16 sm:py-20 lg:py-24"
          >
            <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <ServiceIcon name={service.icon} size={40} className="text-violet" />
                <h2 id={headingId} className="mt-6 font-serif text-balance text-4xl font-medium leading-tight text-plum sm:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">{service.description}</p>
              </div>
              <div className={cn("space-y-9 lg:col-span-6 lg:col-start-7")}>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-plum">Who it’s for</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{service.audience}</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-plum">What the session focuses on</h3>
                  <ul className="mt-3 space-y-2 text-ink-soft">
                    {service.focus.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {service.note ? (
                  <p className="border-l-2 border-gold pl-4 text-sm leading-relaxed text-ink-soft">{service.note}</p>
                ) : null}
                <Button href={BOOKING_HREF} external variant="plum">
                  Book This Reading
                  <span className="sr-only"> : {service.title}</span>
                </Button>
              </div>
            </Container>
          </Section>
        );
      })}

      <CTA headingId="services-cta-heading" />
    </>
  );
}
