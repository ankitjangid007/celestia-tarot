"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { LogoMark } from "@/components/ui/Celestial";
import { Button } from "@/components/ui/Button";
import { business } from "@/config/business";
import { BOOKING_HREF, cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}
const getScrolled = () => window.scrollY > 24;
const getServerScrolled = () => false;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolled, getServerScrolled);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <header
      data-tone="dark"
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-cream backdrop-blur-sm transition-[background-color,border-color,backdrop-filter] duration-500",
        solid ? "border-b border-line-dark/70 bg-plum/90 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="size-9 shrink-0" />
          <span className="font-serif text-2xl font-semibold tracking-wide sm:text-[1.7rem]">{business.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "border-b border-transparent py-1 text-[0.95rem] tracking-wide transition-colors duration-300 hover:text-gold-soft",
                    isActive(link.href) && "border-gold text-gold-soft",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={BOOKING_HREF} external className="min-h-11 px-6 py-2">
            Book a Reading
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-gold/50 text-cream transition-colors hover:border-gold-soft md:hidden"
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 pb-8 pt-2 sm:px-8">
            <ul className="divide-y divide-line-dark">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block py-4 font-serif text-3xl",
                      isActive(link.href) ? "text-gold-soft" : "text-cream",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={BOOKING_HREF} external className="mt-6 w-full">
              Book a Reading
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
