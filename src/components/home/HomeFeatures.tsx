import * as React from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const features = [
  {
    title: "Quality Healthcare Services",
    description: "Strict hygiene and sterilisation protocols for safe, reliable, high‑quality dental care.",
  },
  {
    title: "Expert Care",
    description: "Treatments personally supervised and performed under the guidance of Dr Damini Bhasin.",
  },
  {
    title: "Professional Medical Care",
    description: "Friendly yet professional support so patients feel informed, comfortable, and confident.",
  },
  {
    title: "Modern Equipment",
    description: "Updated equipment and advanced technology for accurate diagnosis and improved comfort.",
  },
  {
    title: "State‑of‑the‑Art Facilities",
    description: "A clean, modern, relaxing clinic environment designed to reduce dental anxiety.",
  },
  {
    title: "Support",
    description: "We’re here to guide you whenever you need assistance with dental concerns.",
  },
  {
    title: "Affordable Treatment",
    description: "Cost‑effective care without compromising on safety, materials, or results.",
  },
] as const;

export function HomeFeatures() {
  return (
    <section className="container py-14">
      <Reveal>
        <SectionHeading eyebrow="Our Features" title="A premium experience, built around comfort" />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
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
