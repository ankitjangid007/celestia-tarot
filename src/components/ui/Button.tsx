import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "gold" | "outline-light" | "outline-dark" | "plum";

const variants: Record<ButtonVariant, string> = {
  gold: "bg-gold text-midnight border-gold hover:bg-gold-soft hover:border-gold-soft",
  "outline-light": "border-gold/60 text-cream hover:border-gold-soft hover:bg-gold/10",
  "outline-dark": "border-ink/30 text-ink hover:border-violet hover:text-violet",
  plum: "bg-plum text-cream border-plum hover:bg-plum-dark hover:border-plum-dark",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 py-3 text-[0.95rem] font-medium tracking-wide transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60";

interface SharedProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = SharedProps & {
  href: string;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "gold", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    const { href, external } = props;
    const isExternalScheme = /^(https?:|mailto:|tel:)/.test(href);
    if (external || isExternalScheme) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
          {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
