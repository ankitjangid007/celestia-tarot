import { Moon, Starfield } from "@/components/ui/Celestial";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Page not found",
  description: "This page could not be found.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section data-tone="dark" className="relative isolate flex min-h-svh items-center overflow-hidden bg-midnight py-32 text-cream">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(109,63,217,0.35),transparent_60%),linear-gradient(180deg,#08070b,#21152d)]"
      />
      <Starfield className="-z-10" />
      <Container className="text-center">
        <Moon filled className="mx-auto mb-8 size-20 opacity-90" />
        <h1 className="mx-auto max-w-3xl font-serif text-balance text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[1] tracking-tight">
          Looks like this path wasn’t in the cards.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-cream/75">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on course.
        </p>
        <Button href="/" className="mt-10">
          Return Home
        </Button>
      </Container>
    </section>
  );
}
