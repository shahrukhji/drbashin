import * as React from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you provide painless dental treatments?",
    a: "Yes, we use modern techniques and equipment to ensure maximum comfort during procedures, including painless extractions.",
  },
  {
    q: "Are cosmetic dental treatments available?",
    a: "Yes, we offer smile designing, tooth whitening, tooth jewellery, and invisible braces.",
  },
  {
    q: "Do you provide dental implants and dentures?",
    a: "Yes, we offer both dental implants and partial or complete dentures based on patient needs.",
  },
  {
    q: "Is the clinic suitable for children and elderly patients?",
    a: "Absolutely. We provide dental care for patients of all age groups with customised treatment plans.",
  },
  {
    q: "Do you offer diagnostic tests at the clinic?",
    a: "Yes, we provide dental X‑rays and essential medical tests to support safe and effective dental treatments.",
  },
] as const;

export function HomeFaqs() {
  return (
    <section className="container py-14">
      <Reveal>
        <SectionHeading eyebrow="FAQs" title="Common questions" />
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 surface rounded-3xl p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
}
