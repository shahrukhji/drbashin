import * as React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactFabs } from "@/components/marketing/ContactFabs";
import { AppointmentDialog } from "@/components/appointments/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { clinic, serviceCategories } from "@/content/clinic";

export default function Services() {
  const [open, setOpen] = React.useState(false);
  const [service, setService] = React.useState<string | undefined>(undefined);

  useDocumentMeta({
    title: `Services | ${clinic.name}`,
    description:
      "Explore preventive, cosmetic, restorative and advanced dental services at Bhasin Dental Clinic in Pitampura, Delhi."
  });

  return (
    <PageLayout>
      <ContactFabs />

      <header className="bg-hero">
        <div className="container py-14 sm:py-18">
          <p className="text-sm font-medium text-muted-foreground">Services</p>
          <h1 className="mt-2 text-balance font-display text-4xl tracking-tight sm:text-5xl">
            Comprehensive care—from routine to advanced
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Modern dentistry with clear recommendations and comfort-first planning.
          </p>
        </div>
      </header>

      <section className="container py-14">
        <SectionHeading
          eyebrow="What we offer"
          title="Service categories"
          description="Each category includes a guided process, benefits, and a clear next step."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((s) => (
            <article key={s.key} className="surface rounded-3xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-accent" />
              </div>

              <ul className="mt-5 grid gap-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  variant="hero"
                  onClick={() => {
                    setService(s.title);
                    setOpen(true);
                  }}
                >
                  Book This Service
                  <ArrowRight />
                </Button>
                <div className="text-xs text-muted-foreground">Comfort-first planning • Clear next steps</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AppointmentDialog open={open} onOpenChange={setOpen} initialService={service} />
    </PageLayout>
  );
}
