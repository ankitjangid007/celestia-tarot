"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section tone="ivory" labelledBy="faq-heading">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading as="h2" id="faq-heading" eyebrow="Good to Know" title="Questions, Answered" description="Everything you might want to know before your first reading." />
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((item, index) => {
              const open = openIndex === index;
              const buttonId = `${baseId}-button-${index}`;
              const panelId = `${baseId}-panel-${index}`;
              return (
                <li key={item.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-2xl font-semibold leading-snug text-plum transition-colors hover:text-violet sm:text-[1.65rem]"
                    >
                      {item.question}
                      <Plus
                        size={22}
                        aria-hidden
                        className={cn("shrink-0 text-gold transition-transform duration-500", open && "rotate-45")}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    inert={!open}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 leading-relaxed text-ink-soft">{item.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
