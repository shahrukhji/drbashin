import * as React from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const dentalTreatments = [
  {
    title: "Root Canal Treatment",
    description:
      "Gentle, pain‑minimised root canal care to remove infection and save your natural tooth—followed by proper sealing and protection.",
  },
  {
    title: "Tooth‑Coloured Filling",
    description:
      "Natural‑looking composite fillings that restore strength and appearance while blending seamlessly with your smile.",
  },
  {
    title: "Silver‑Coloured Filling",
    description:
      "Strong, durable restorative fillings suited for specific back‑tooth needs, planned after discussing all material options.",
  },
  {
    title: "Crown and Bridge",
    description:
      "Custom crowns and bridges to restore damaged or missing teeth—designed for comfort, function, and long‑term stability.",
  },
  {
    title: "Partial and Complete Denture",
    description:
      "Comfort‑fit dentures tailored to your bite and facial profile for improved chewing, speech, and everyday confidence.",
  },
  {
    title: "Oral Prophylaxis and Polishing",
    description:
      "Professional cleaning to remove plaque and stains, support gum health, and keep your mouth fresh and healthy.",
  },
  {
    title: "Tooth Whitening",
    description:
      "Safe whitening options to brighten your smile with careful shade planning and sensitivity‑aware protocols.",
  },
  {
    title: "Painless Tooth Extraction",
    description:
      "Comfort‑first extractions using modern anaesthesia and gentle technique, with clear after‑care guidance for quick recovery.",
  },
  {
    title: "Smile Designing",
    description:
      "Aesthetic smile planning tailored to your face and goals—often combining alignment, whitening, bonding, or veneers.",
  },
  {
    title: "Dental Implants",
    description:
      "Fixed, natural‑feeling tooth replacement with implant planning focused on precision, hygiene, and long‑term success.",
  },
  {
    title: "Tooth Jewellery",
    description:
      "A safe, non‑invasive cosmetic add‑on applied with dental‑grade bonding—removable without harming the tooth surface.",
  },
  {
    title: "Invisible Braces",
    description:
      "Discreet aligner‑based orthodontic treatment with guided planning and monitoring for a straighter, healthier smile.",
  },
] as const;

const diagnosticTests = [
  {
    title: "Dental X‑Ray",
    description:
      "Quick, low‑dose imaging to help diagnose hidden decay, infections, and bone levels—supporting precise treatment planning.",
  },
  {
    title: "Blood Test",
    description:
      "Essential blood investigations when required to support safe dental procedures and overall medical clearance.",
  },
  {
    title: "Urine Test",
    description:
      "Basic screening tests when needed to support treatment decisions and identify relevant health considerations.",
  },
  {
    title: "Sugar Test",
    description:
      "Blood glucose checks to help plan safer dental care—especially for healing, infections, and surgical procedures.",
  },
  {
    title: "Blood Pressure Test",
    description:
      "On‑site BP monitoring for safe, stress‑controlled dental care—particularly before longer or surgical appointments.",
  },
  {
    title: "Sputum, Stool, and Semen Tests",
    description:
      "Additional investigations available when required, helping patients access essential diagnostic support conveniently.",
  },
] as const;

function ListCard({
  title,
  items,
}: {
  title: string;
  items: readonly { title: string; description: string }[];
}) {
  return (
    <div className="surface rounded-3xl p-6">
      <div className="font-display text-lg">{title}</div>
      <ul className="mt-4 space-y-4">
        {items.map((it) => (
          <li key={it.title} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
            <div>
              <div className="text-sm font-medium text-foreground">{it.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{it.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HomeServices() {
  return (
    <section className="container py-14">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Wide range of dental services"
          description="A complete range of dental and diagnostic services for all age groups—planned carefully for safety, comfort, and long‑term results."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal delay={80}>
          <ListCard title="Dental treatments available" items={dentalTreatments} />
        </Reveal>
        <Reveal delay={140}>
          <ListCard title="Diagnostic and medical tests" items={diagnosticTests} />
        </Reveal>
      </div>

      <Reveal delay={200}>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          By offering both dental care and essential diagnostic support, we ensure safe and well‑planned treatments for our
          patients.
        </p>
      </Reveal>
    </section>
  );
}
