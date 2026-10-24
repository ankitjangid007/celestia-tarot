"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { business } from "@/config/business";
import { services } from "@/data/services";
import { cn, mailtoHref, whatsappUrl } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "prepared" | "sent" | "failed";

/**
 * Optional backend hook-up. Set NEXT_PUBLIC_CONTACT_ENDPOINT to a URL that accepts
 * a JSON POST of FormValues. Without it, the form never claims a message was sent.
 */
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\d\s-]{7,20}$/;
const FIELD_ORDER: FieldName[] = ["name", "email", "phone", "service", "message"];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim()))
    errors.phone = "Use digits, spaces, +, - or brackets only.";
  if (!values.service) errors.service = "Choose the reading you’re interested in.";
  if (values.message.trim().length < 10) errors.message = "Tell us a little about what you’d like to explore (at least 10 characters).";
  return errors;
}

function readValues(form: HTMLFormElement): FormValues {
  const data = new FormData(form);
  const get = (key: FieldName) => String(data.get(key) ?? "");
  return { name: get("name"), email: get("email"), phone: get("phone"), service: get("service"), message: get("message") };
}

function serviceTitle(id: string): string {
  return services.find((service) => service.id === id)?.title ?? id;
}

function composeMessage(values: FormValues): string {
  return [
    `Hello ${business.name},`,
    "",
    `I’d like to book: ${serviceTitle(values.service)}`,
    "",
    values.message.trim(),
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.phone.trim() ? `Phone: ${values.phone.trim()}` : "",
  ]
    .filter((line, index, lines) => line !== "" || lines[index - 1] !== "")
    .join("\n");
}

const inputClass =
  "w-full rounded-md border bg-ivory px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition-colors focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/30";

interface FieldProps {
  id: FieldName;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: (props: { id: string; className: string; "aria-invalid": boolean; "aria-describedby": string | undefined; "aria-required": boolean }) => ReactNode;
}

function Field({ id, label, required = false, hint, error, children }: FieldProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-plum">
        {label}
        {required ? <span aria-hidden className="text-violet"> *</span> : <span className="font-normal text-ink-soft"> (optional)</span>}
      </label>
      {children({
        id,
        className: cn(inputClass, error ? "border-red-700" : "border-line"),
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy,
        "aria-required": required,
      })}
      {hint && !error ? <p id={hintId} className="mt-2 text-sm text-ink-soft">{hint}</p> : null}
      {error ? <p id={errorId} className="mt-2 text-sm font-medium text-red-800">{error}</p> : null}
    </div>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  useEffect(() => {
    if (status === "prepared" || status === "sent") resultRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = readValues(form);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setSubmitted(values);
    if (!CONTACT_ENDPOINT) {
      setStatus("prepared");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(response.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if ((status === "prepared" || status === "sent") && submitted) {
    const message = composeMessage(submitted);
    const sent = status === "sent";
    return (
      <div role="status" className="rounded-3xl border border-line bg-cream p-7 sm:p-10">
        <h3 ref={resultRef} tabIndex={-1} className="font-serif text-3xl font-semibold text-plum focus:outline-none">
          {sent ? "Thank you. Your message has been sent." : "Your enquiry is ready to send"}
        </h3>
        {sent ? (
          <p className="mt-4 leading-relaxed text-ink-soft">
            We’ll reply to {submitted.email.trim()} as soon as we can to talk about availability.
          </p>
        ) : (
          <>
            <p className="mt-4 leading-relaxed text-ink-soft">
              This form isn’t connected to a server yet, so nothing has been sent. Choose how you’d like to send your details:
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={mailtoHref(`Reading enquiry: ${serviceTitle(submitted.service)}`, message)} variant="plum">
                Send by email
              </Button>
              <Button href={whatsappUrl(message)} external variant="outline-dark">
                Send on WhatsApp
              </Button>
            </div>
          </>
        )}
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSubmitted(null);
          }}
          className="mt-7 text-sm font-medium text-violet underline underline-offset-4"
        >
          {sent ? "Send another message" : "Edit my details"}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-line bg-cream p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          {(props) => <input {...props} name="name" type="text" autoComplete="name" defaultValue={submitted?.name} />}
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          {(props) => <input {...props} name="email" type="email" autoComplete="email" defaultValue={submitted?.email} />}
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="phone" label="Phone" error={errors.phone} hint="Include your country code if you’d like us to call or text.">
          {(props) => <input {...props} name="phone" type="tel" autoComplete="tel" defaultValue={submitted?.phone} />}
        </Field>
        <Field id="service" label="Service" required error={errors.service}>
          {(props) => (
            <select {...props} name="service" defaultValue={submitted?.service ?? ""}>
              <option value="" disabled>
                Select a reading
              </option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>
      <Field id="message" label="Message" required error={errors.message}>
        {(props) => <textarea {...props} name="message" rows={6} defaultValue={submitted?.message} />}
      </Field>

      <div aria-live="polite">
        {status === "failed" ? (
          <p className="rounded-md border border-red-700 bg-red-50 px-4 py-3 text-sm font-medium text-red-900">
            We couldn’t send your message just now. Please try again, or contact us directly by email or WhatsApp.
          </p>
        ) : null}
      </div>

      <Button type="submit" variant="plum" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Request a reading"}
      </Button>
    </form>
  );
}
