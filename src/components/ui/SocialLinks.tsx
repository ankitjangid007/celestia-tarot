import { MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import { cn, whatsappUrl } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  /** "dark" = on a dark surface, "light" = on cream/ivory. */
  tone?: "dark" | "light";
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.9v3h2.6V21" />
    </svg>
  );
}

export function SocialLinks({ className, tone = "dark" }: SocialLinksProps) {
  const links = [
    { label: "Instagram", href: business.instagram, icon: <InstagramIcon /> },
    { label: "Facebook", href: business.facebook, icon: <FacebookIcon /> },
    { label: "WhatsApp", href: whatsappUrl(), icon: <MessageCircle size={20} strokeWidth={1.6} aria-hidden /> },
  ];
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "grid size-11 place-items-center rounded-full border transition-colors duration-300",
              tone === "dark"
                ? "border-line-dark text-cream/80 hover:border-gold hover:text-gold-soft"
                : "border-line text-plum hover:border-violet hover:text-violet",
            )}
          >
            {link.icon}
            <span className="sr-only">{link.label} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
