import { ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactFabs } from "@/components/marketing/ContactFabs";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { clinic } from "@/content/clinic";

import tech from "@/assets/clinic-technology.jpg";
import facility from "@/assets/clinic-facility.jpg";

import { GalleryLightbox } from "@/components/marketing/GalleryLightbox";

const techItems = [
  { title: "Precision diagnostics", desc: "Modern imaging and planning for predictable outcomes." },
  { title: "Comfort-focused procedures", desc: "Gentle techniques designed to minimize discomfort." },
  { title: "Clean, modern operatories", desc: "A calm environment with premium clinical standards." },
] as const;

export default function Technology() {
  useDocumentMeta({
    title: `Technology & Comfort | ${clinic.name}`,
    description:
      "Learn about the advanced technology, conscious sedation approach, and sterilization standards at Bhasin Dental Clinic, Pitampura."
  });

  return (
    <PageLayout>
      <ContactFabs />

      <header className="bg-hero">
        <div className="container py-14 sm:py-18">
          <p className="text-sm font-medium text-muted-foreground">Technology & Comfort</p>
          <h1 className="mt-2 text-balance font-display text-4xl tracking-tight sm:text-5xl">
            Advanced care, designed for comfort
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We invest in modern systems and comfort-forward protocols—so treatment feels smoother and more reassuring.
          </p>
        </div>
      </header>

      <section className="container py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border bg-background soft-shadow">
            <img
              src={tech}
              alt="Advanced dental technology equipment used at the clinic"
              className="h-[360px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Advanced equipment"
              title="Modern tools for precise, efficient treatment"
              description="Better diagnostics and planning help reduce uncertainty and improve outcomes."
            />
            <div className="mt-7 grid gap-3">
              {techItems.map((t) => (
                <div key={t.title} className="rounded-2xl border bg-background p-5">
                  <div className="text-sm font-medium">{t.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="surface rounded-3xl p-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <div className="mt-3 font-display text-xl">Conscious sedation</div>
            <p className="mt-2 text-sm text-muted-foreground">
              For anxious patients and longer procedures, we plan comfort-forward options with safety as the priority.
            </p>
          </div>
          <div className="surface rounded-3xl p-6">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <div className="mt-3 font-display text-xl">Sterilization & safety</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Strict hygiene protocols and a clean environment—every visit, every procedure.
            </p>
          </div>
          <div className="surface rounded-3xl p-6">
            <Stethoscope className="h-5 w-5 text-primary" />
            <div className="mt-3 font-display text-xl">Gentle clinical workflow</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear steps, transparent recommendations, and a calm experience from consultation to follow-up.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <GalleryLightbox
          eyebrow="Gallery"
          title="See the space, feel the comfort"
          description="A clean clinic and modern equipment—designed to make treatment feel calmer."
          items={[
            {
              src: tech,
              alt: "Advanced dental technology equipment used at the clinic",
              caption: "Modern diagnostics",
            },
            {
              src: facility,
              alt: "Clinic reception and waiting area",
              caption: "Clean, calm environment",
            },
          ]}
        />
      </section>
    </PageLayout>
  );
}
