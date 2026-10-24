import { CalendarCheck, Compass, Lock, Sparkles, type LucideIcon } from "lucide-react";
import { Constellation } from "@/components/ui/Celestial";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features, type FeatureIconName } from "@/data/content";
import { business } from "@/config/business";

const icons: Record<FeatureIconName, LucideIcon> = {
  sparkles: Sparkles,
  lock: Lock,
  compass: Compass,
  calendar: CalendarCheck,
};

export function WhyChooseUs() {
  return (
    <Section tone="plum" labelledBy="why-heading">
      <Constellation className="absolute bottom-10 left-8 hidden w-48 opacity-40 lg:block" />
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-5">
          <SectionHeading
            as="h2"
            id="why-heading"
            tone="dark"
            eyebrow="The Experience"
            title={`Why Choose ${business.name}`}
            description="A calm, respectful approach to tarot that puts your questions first."
          />
        </div>
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <li key={feature.title} className="reveal border-t border-gold/30 pt-7">
                <Icon size={30} strokeWidth={1.3} className="text-gold-soft" aria-hidden />
                <h3 className="mt-5 font-serif text-3xl font-semibold text-cream">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-cream/75">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
