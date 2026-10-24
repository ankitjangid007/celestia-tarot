import { PageHero } from "@/components/layout/PageHero";
import { LegalDocument, type LegalSection } from "@/components/ui/LegalDocument";
import { business } from "@/config/business";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses and protects your personal information.`,
  path: "/privacy",
});

const sections: LegalSection[] = [
  {
    title: "Information Collected",
    paragraphs: [
      `${business.name} collects only the information needed to respond to you and deliver our services. This may include the details you give us when you contact us or book a reading, and limited technical information about how the website is used.`,
    ],
  },
  {
    title: "Contact Information",
    paragraphs: [
      "When you use the contact form, email, phone or WhatsApp, we may receive your name, email address, phone number and the contents of your message.",
    ],
  },
  {
    title: "Booking Information",
    paragraphs: [
      "To arrange a reading we may record the service you are interested in, your preferred time and any questions or topics you choose to share. Please share only what you are comfortable with.",
    ],
  },
  {
    title: "How Information Is Used",
    list: [
      "To reply to your enquiries and arrange appointments.",
      "To provide the reading you requested.",
      "To keep records needed to run our services.",
      "To improve the website and our services.",
      "To meet legal obligations where they apply.",
    ],
    paragraphs: ["We do not sell your personal information."],
  },
  {
    title: "Cookies / Analytics",
    paragraphs: [
      "Depending on the tools used by the website, cookies or similar technologies may be used to make the site work, remember preferences or understand how it is used. If analytics or marketing tools are added, this policy will be updated to describe them.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Depending on the tools used by the website, we may rely on third-party services such as hosting, email, messaging (for example WhatsApp), payment or scheduling providers. These services have their own privacy practices, and we encourage you to review them. Links to social media pages on this site lead to services we do not control.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We take reasonable steps to protect the information you share with us. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We keep personal information only for as long as needed for the purposes described here, or as required by law, and then delete or anonymize it.",
    ],
  },
  {
    title: "User Rights",
    paragraphs: [
      `Depending on where you live, you may have the right to access, correct or delete the personal information we hold about you, or to object to certain uses. To make a request, contact us at ${business.email}.`,
    ],
  },
  {
    title: "Children’s Privacy",
    paragraphs: [
      "Our services are intended for adults. We do not knowingly collect personal information from children. If you believe a child has given us personal information, please contact us so we can remove it.",
    ],
  },
  {
    title: "Policy Changes",
    paragraphs: [
      "We may update this policy from time to time. The latest version will be posted on this page with the date it was last updated.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `Questions about this policy can be sent to ${business.name} at ${business.email} or ${business.phone}. Our address is ${business.address}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="What we collect, why we collect it and how we look after it." />
      <LegalDocument sections={sections} />
    </>
  );
}
