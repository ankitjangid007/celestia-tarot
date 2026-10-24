export type ServiceIconName =
  | "heart"
  | "briefcase"
  | "sparkles"
  | "gem"
  | "sprout"
  | "moon-star";

export interface Service {
  id: string;
  title: string;
  /** Short description used on cards. */
  description: string;
  icon: ServiceIconName;
  /** Who the reading is for. */
  audience: string;
  /** What the session focuses on. */
  focus: string[];
  /** Optional clarification shown on the services page. */
  note?: string;
}

export const services: Service[] = [
  {
    id: "love-relationship",
    title: "Love & Relationship Reading",
    description:
      "A reflective look at connection, communication and the patterns you bring to your relationships.",
    icon: "heart",
    audience:
      "Anyone thinking about a current relationship, a past one, or what they hope to welcome next.",
    focus: [
      "The feelings and dynamics behind your question",
      "Patterns in how you communicate and connect",
      "Perspectives you may not have considered",
      "Questions worth carrying into your next conversation",
    ],
  },
  {
    id: "career-finance",
    title: "Career & Finance Reading",
    description:
      "A thoughtful space to examine your work, direction and relationship with money.",
    icon: "briefcase",
    audience:
      "People facing a change at work, weighing a new direction, or wanting clarity on what matters to them professionally.",
    focus: [
      "What you want from your work and where you feel stuck",
      "Strengths and themes the cards bring to the surface",
      "Your values around security, risk and ambition",
      "Next steps you may wish to explore for yourself",
    ],
    note: "This reading is personal reflection. It is not professional financial, investment or career advice. For financial decisions, please speak with a qualified professional.",
  },
  {
    id: "general-tarot",
    title: "General Tarot Reading",
    description:
      "An open session for whatever is on your mind, guided by the cards that appear.",
    icon: "sparkles",
    audience:
      "First-time clients, or anyone with a broad question or no question at all, just a sense that something needs attention.",
    focus: [
      "The themes most present in your life right now",
      "Questions you bring on the day",
      "Gentle perspective on choices in front of you",
      "A clear, unhurried conversation about what the cards suggest",
    ],
  },
  {
    id: "marriage-compatibility",
    title: "Marriage & Compatibility",
    description:
      "Reflections on partnership, shared values and what it means to build a life with someone.",
    icon: "gem",
    audience:
      "Partners, engaged couples, or individuals considering commitment who want space to think it through.",
    focus: [
      "Shared hopes, expectations and differences",
      "Strengths within the partnership",
      "Areas that may benefit from more honest conversation",
      "What commitment means to you personally",
    ],
    note: "Readings explore perspective and reflection. They do not decide, or promise, the outcome of a relationship.",
  },
  {
    id: "personal-growth",
    title: "Personal Growth Reading",
    description:
      "A session for self-understanding, change and the next chapter of your own story.",
    icon: "sprout",
    audience:
      "People in a period of transition, rebuilding confidence, or looking to understand themselves a little better.",
    focus: [
      "Strengths, habits and patterns worth noticing",
      "What you may be ready to let go of",
      "Intentions you want to set for the months ahead",
      "Ways to stay curious and kind with yourself",
    ],
    note: "Tarot is not a substitute for therapy or mental-health care. If you are struggling, please reach out to a qualified professional.",
  },
  {
    id: "spiritual-guidance",
    title: "Spiritual Guidance",
    description:
      "A quiet session for meaning, intuition and a deeper connection with your inner voice.",
    icon: "moon-star",
    audience:
      "Those who want to slow down, listen inwardly and explore questions of purpose, intuition or inner peace.",
    focus: [
      "Where you feel called to pay more attention",
      "Intuition and how you recognize it",
      "Rituals and reflections that support stillness",
      "Questions of meaning, offered without any single belief system",
    ],
  },
];
