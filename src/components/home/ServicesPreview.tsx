import { Constellation } from "@/components/ui/Celestial";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

/** Asymmetric 12-column layout with alternating dark and cream cards. */
const layout = [
  { variant: "dark", span: "lg:col-span-7" },
  { variant: "cream", span: "lg:col-span-5" },
  { variant: "cream", span: "lg:col-span-5" },
  { variant: "dark", span: "lg:col-span-7" },
  { variant: "cream", span: "lg:col-span-6" },
  { variant: "dark", span: "lg:col-span-6" },
] as const;

export function ServicesPreview() {
  return (
    <Section tone="plum" labelledBy="services-heading">
      <Constellation className="absolute right-6 top-10 hidden w-48 opacity-50 md:block" />
      <Container>
        <div className="reveal flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            as="h2"
            id="services-heading"
            tone="dark"
            eyebrow="Our Readings"
            title="Readings for Every Question"
            description="Choose the reading that fits what you’re exploring, or begin with a general session and let the cards lead."
          />
          <Button href="/services" variant="outline-light" className="w-fit shrink-0">
            View All Services
          </Button>
        </div>
        <ul className="mt-14 grid gap-6 lg:grid-cols-12">
          {services.map((service, index) => (
            <li key={service.id} className={layout[index]?.span}>
              <ServiceCard service={service} position={index + 1} variant={layout[index]?.variant ?? "cream"} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
