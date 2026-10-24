import { PageHero } from "@/components/layout/PageHero";
import { LegalDocument, type LegalSection } from "@/components/ui/LegalDocument";
import { business } from "@/config/business";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `The terms that apply when you use the ${business.name} website and book tarot reading services.`,
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    title: "Introduction",
    paragraphs: [
      `Welcome to ${business.name}. These Terms of Service explain the rules for using this website and booking our services. By using the site or booking a reading, you agree to these terms. If you do not agree, please do not use the site or our services.`,
    ],
  },
  {
    title: "Description of Services",
    paragraphs: [
      `${business.name} offers personalized tarot card readings intended for reflection, self-exploration, personal guidance and entertainment. The services currently listed on our Services page may change from time to time.`,
    ],
  },
  {
    title: "Bookings and Appointments",
    paragraphs: [
      "Bookings are made by contacting us through the website, WhatsApp, phone or email. A booking is confirmed only once we have replied to confirm the date, time and format of your session.",
      "Please provide accurate contact details so that we can reach you about your appointment.",
    ],
  },
  {
    title: "Payments",
    paragraphs: [
      "Fees for each reading, accepted payment methods and when payment is due will be communicated to you before your session is confirmed. Please make sure you understand the fee before you confirm a booking.",
    ],
  },
  {
    title: "Cancellation and Rescheduling",
    paragraphs: [
      "If you need to cancel or reschedule, please let us know as early as you can by using the contact details on this site. Any specific notice period, refund or rescheduling terms will be shared with you at the time of booking.",
    ],
  },
  {
    title: "User Responsibilities",
    list: [
      "Provide accurate information when you book.",
      "Treat us and other users with respect.",
      "Use our readings as a source of reflection, and make your own decisions about your life.",
      "Do not use the website for unlawful purposes or attempt to disrupt its operation.",
    ],
  },
  {
    title: "Service Limitations",
    paragraphs: [
      "Tarot readings are not a prediction of the future with certainty. They are not medical, legal, financial or psychological advice, and they are not a substitute for a qualified professional. No result or outcome is guaranteed. Please read our Disclaimer for more detail.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      `The content of this website, including text, design, graphics and logos, belongs to ${business.name} or its licensors. You may not copy, reproduce or distribute it without our written permission, except for personal, non-commercial use.`,
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      `To the fullest extent permitted by applicable law, ${business.name} is not liable for any loss or damage arising from your use of the website or from decisions you make after a reading. Nothing in these terms limits any right or liability that cannot be limited by law.`,
    ],
  },
  {
    title: "Changes to Terms",
    paragraphs: [
      "We may update these terms from time to time. The latest version will always be available on this page, with the date it was last updated. Continuing to use the site after changes means you accept the revised terms.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `If you have questions about these terms, contact ${business.name} at ${business.email} or ${business.phone}. Our address is ${business.address}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" description="Plain-language terms for using our website and booking a reading." />
      <LegalDocument sections={sections} />
    </>
  );
}
