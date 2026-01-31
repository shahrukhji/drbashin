import * as React from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const dentalTreatments = [
  "Root Canal Treatment",
  "Tooth‑Coloured Filling",
  "Silver‑Coloured Filling",
  "Crown and Bridge",
  "Partial and Complete Denture",
  "Oral Prophylaxis and Polishing",
  "Tooth Whitening",
  "Painless Tooth Extraction",
  "Smile Designing",
  "Dental Implants",
  "Tooth Jewellery",
  "Invisible Braces",
] as const;

const diagnosticTests = [
  "Dental X‑Ray",
  "Blood Test",
  "Urine Test",
  "Sugar Test",
  "Blood Pressure Test",
  "Sputum, Stool, and Semen Tests",
] as const;

function ListCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="surface rounded-3xl p-6">
      <div className="font-display text-lg">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
            <span>{it}</span>
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
