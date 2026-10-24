import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { business } from "@/config/business";
import { createMetadata } from "@/lib/seo";
import { telHref, whatsappUrl } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Contact Us",
  description: `Book a tarot reading or ask a question. Contact ${business.name} by form, WhatsApp, phone or email.`,
  path: "/contact",
});

const linkClass = "break-words text-plum underline-offset-4 transition-colors hover:text-violet hover:underline";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Ready to book a reading, or just have a question? Send a message and we’ll get back to you."
      />
      <Section tone="ivory" id="booking" labelledBy="booking-heading" size="md">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 id="contact-details-heading" className="font-serif text-4xl font-medium text-plum">
              {business.name}
            </h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <Mail size={22} strokeWidth={1.4} className="mt-1 shrink-0 text-violet" aria-hidden />
                <div>
                  <p className="text-sm text-ink-soft">Email</p>
                  <a href={`mailto:${business.email}`} className={linkClass}>{business.email}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={22} strokeWidth={1.4} className="mt-1 shrink-0 text-violet" aria-hidden />
                <div>
                  <p className="text-sm text-ink-soft">Phone</p>
                  <a href={telHref()} className={linkClass}>{business.phone}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle size={22} strokeWidth={1.4} className="mt-1 shrink-0 text-violet" aria-hidden />
                <div>
                  <p className="text-sm text-ink-soft">WhatsApp</p>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {business.phone}<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin size={22} strokeWidth={1.4} className="mt-1 shrink-0 text-violet" aria-hidden />
                <div>
                  <p className="text-sm text-ink-soft">Address</p>
                  <p className="text-plum">{business.address}</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 border-t border-line pt-8">
              <p className="mb-4 text-sm text-ink-soft">Follow along</p>
              <SocialLinks tone="light" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 id="booking-heading" className="mb-8 font-serif text-4xl font-medium text-plum sm:text-5xl">
              Book a Reading
            </h2>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
