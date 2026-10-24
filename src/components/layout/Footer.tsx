import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Constellation, LogoMark, Starfield } from "@/components/ui/Celestial";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { business } from "@/config/business";
import { services } from "@/data/services";
import { telHref, whatsappUrl } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

const legal = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

const linkClass = "text-cream/75 transition-colors duration-300 hover:text-gold-soft";
const headingClass = "font-serif text-xl font-semibold text-cream";

export function Footer() {
  return (
    <footer data-tone="dark" className="relative isolate overflow-hidden bg-midnight text-cream">
      <Starfield className="-z-10 opacity-60" />
      <Constellation className="absolute right-10 top-16 -z-10 hidden w-52 opacity-40 lg:block" />
      <div className="h-px bg-linear-to-r from-transparent via-gold/60 to-transparent" aria-hidden />
      <Container className="grid gap-14 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <LogoMark className="h-14 w-auto" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-3xl font-semibold">{business.shortName}</span>
              <span className="mt-2 text-[0.65rem] uppercase tracking-[0.32em] text-gold-soft">{business.descriptor}</span>
            </span>
          </Link>
          <p className="mt-2 font-serif text-lg italic text-gold-soft">{business.tagline}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">{business.description}</p>
          {/* <SocialLinks className="mt-7" /> */}
        </div>

        <nav aria-label="Footer navigation" className="lg:col-span-2">
          <h2 className={headingClass}>Navigate</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services" className="lg:col-span-3">
          <h2 className={headingClass}>Readings</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`} className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-3">
          <h2 className={headingClass}>Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${business.email}`} className={`${linkClass} break-all`}>
                {business.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <a href={telHref()} className={linkClass}>
                {business.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li className="flex gap-3 text-cream/75">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <span>{business.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden px-4 text-center">
        <p className="font-serif text-[clamp(3.5rem,15vw,13rem)] font-medium leading-[0.95] tracking-tight text-transparent pb-3 [-webkit-text-stroke:1px_rgba(201,169,110,0.3)]">
          {business.shortName}
        </p>
      </div>

      <div className="border-t border-line-dark">
        <Container className="flex flex-col gap-4 py-6 text-sm text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {business.copyrightYear} {business.name}. All Rights Reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
