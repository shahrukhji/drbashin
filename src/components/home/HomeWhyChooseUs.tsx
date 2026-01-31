import * as React from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const items = [
  {
    title: "Experienced, Patient‑First Care",
    description:
      "Our experienced dentist follows a patient‑first approach, focusing on comfort, care, and individual needs.",
  },
  {
    title: "Comprehensive Dental Care Under One Roof",
    description:
      "Complete dental services in one place for convenience, continuity of care, and consistent treatment quality.",
  },
  {
    title: "Advanced and Hygienic Clinical Setup",
    description:
      "A modern, well‑equipped, hygienic environment with strict safety and sterilisation standards.",
  },
  {
    title: "Honest Guidance & Transparent Treatment Plans",
    description:
      "Clear, honest explanations with no hidden steps—so you can make informed decisions confidently.",
  },
  {
    title: "Comfortable, Stress‑Free Dental Experience",
    description:
      "A calm, welcoming space designed to reduce anxiety from the moment you enter.",
  },
  {
    title: "Trust Beyond Treatment",
    description:
      "We aim to build lasting confidence and trust with every patient—beyond just dental procedures.",
  },
] as const;

export function HomeWhyChooseUs() {
  return (
    <section className="container py-14">
      <Reveal>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Quality, trust, and patient satisfaction"
          description="Choosing the right dentist is essential for long‑lasting oral health. Here’s what patients value most at Bhasin Dental Clinic."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f, i) => (
          <Reveal key={f.title} delay={80 + i * 60}>
            <div className="surface rounded-3xl p-6">
              <div className="text-sm font-medium">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
