import { AboutPreview } from "@/components/home/AboutPreview";
import { CTA } from "@/components/home/CTA";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Intro } from "@/components/home/Intro";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { siteDescription, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ description: siteDescription, path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <AboutPreview />
      <ServicesPreview />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
}
