export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Choose Your Reading",
    description:
      "Browse the readings and pick the one that fits your question, or start with a general reading.",
  },
  {
    number: "02",
    title: "Book Your Session",
    description:
      "Send your details through the contact form or WhatsApp and we will confirm a time with you.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Meet for your session and talk through your questions as the cards are drawn and explored.",
  },
  {
    number: "04",
    title: "Reflect",
    description:
      "Take the insights with you, sit with them, and decide for yourself what is worth acting on.",
  },
];

export type FeatureIconName = "sparkles" | "lock" | "compass" | "calendar";

export interface Feature {
  title: string;
  description: string;
  icon: FeatureIconName;
}

export const features: Feature[] = [
  {
    title: "Personalized Readings",
    description:
      "Every session starts with your question, not a script. The reading follows what matters to you.",
    icon: "sparkles",
  },
  {
    title: "Confidential Experience",
    description:
      "What you share stays between us. Readings are held in a respectful, private setting.",
    icon: "lock",
  },
  {
    title: "Thoughtful Guidance",
    description:
      "Cards are explored as prompts for reflection, with honesty about what tarot can and cannot do.",
    icon: "compass",
  },
  {
    title: "Convenient Booking",
    description:
      "Reach out by form, WhatsApp or email and we will help you find a time that works.",
    icon: "calendar",
  },
];

export const principles = ["Reflection", "Perspective", "Self-exploration"] as const;
