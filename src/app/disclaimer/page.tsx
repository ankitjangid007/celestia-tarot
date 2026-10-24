import { PageHero } from "@/components/layout/PageHero";
import { LegalDocument, type LegalSection } from "@/components/ui/LegalDocument";
import { business } from "@/config/business";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Tarot Disclaimer",
  description: `${business.name} readings are for reflection, guidance and entertainment. They are not medical, legal, financial or psychological advice.`,
  path: "/disclaimer",
});

const sections: LegalSection[] = [
  {
    title: "Purpose of Tarot Readings",
    paragraphs: ["Tarot readings offered by " + business.name + " are provided for:"],
    list: ["Reflection", "Personal guidance", "Entertainment", "Self-exploration"],
  },
  {
    title: "Not Professional Advice",
    paragraphs: ["Please understand that:"],
    list: [
      "Tarot readings are not medical advice.",
      "Tarot readings are not legal advice.",
      "Tarot readings are not financial advice.",
      "Tarot readings are not psychological or mental-health treatment.",
    ],
  },
  {
    title: "No Guaranteed Outcomes",
    paragraphs: [
      "No future outcome is guaranteed. Tarot does not predict events with certainty, and nothing said in a reading should be taken as a promise or assurance of any result.",
    ],
  },
  {
    title: "Your Decisions Are Your Own",
    paragraphs: [
      "You remain responsible for your own decisions and actions. Please consult a qualified doctor, lawyer, financial adviser or mental-health professional for matters within their expertise. If you are in crisis or need urgent help, contact your local emergency services or a crisis support line.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Tarot Disclaimer" description="An honest note about what tarot readings are, and what they are not." />
      <LegalDocument
        intro="Tarot is a tool for reflection. It is not a substitute for professional advice, and it cannot promise what will happen."
        sections={sections}
      />
    </>
  );
}
