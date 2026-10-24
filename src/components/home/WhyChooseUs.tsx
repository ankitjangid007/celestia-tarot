import { CalendarCheck, Compass, Lock, Sparkles, type LucideIcon } from "lucide-react";
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
    <Section tone="cream" labelledBy="why-heading">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="reveal lg:col-span-5">
          <SectionHeading
            as="h2"
            id="why-heading"
            title={`Why Choose ${business.name}`}
            description="A calm, respectful approach to tarot that puts your questions first."
          />
        </div>
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <li key={feature.title} className="reveal border-t border-line pt-7">
                <Icon size={30} strokeWidth={1.3} className="text-violet" aria-hidden />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-plum">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
