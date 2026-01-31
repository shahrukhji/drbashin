import * as React from "react";
import { ArrowRight } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactFabs } from "@/components/marketing/ContactFabs";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { clinic } from "@/content/clinic";
import { servicesPageGroups } from "@/content/services-page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Services() {
  useDocumentMeta({
    title: `Services | ${clinic.name}`,
    description:
      "Explore dental treatments and diagnostic support at Bhasin Dental Clinic in Pitampura, Delhi."
  });

  const waLink = React.useCallback(
    (serviceTitle: string) => {
      const text = encodeURIComponent(
        `Hi, I’d like to know more about ${serviceTitle} at ${clinic.name}. Please share the next steps.`,
      );
      return `https://wa.me/${clinic.whatsapp}?text=${text}`;
    },
    [],
  );

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

        <div className="mt-10 space-y-10">
          {servicesPageGroups.map((group) => (
            <section key={group.key} className="surface rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-2xl">{group.title}</h2>
                <p className="text-sm text-muted-foreground">{group.description}</p>
              </div>

              <div className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {group.services.map((s) => (
                    <AccordionItem key={s.key} value={s.key}>
                      <AccordionTrigger className="text-left">{s.title}</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6">
                          <p className="text-sm text-muted-foreground">{s.summary}</p>

                          <div className="grid gap-6 lg:grid-cols-2">
                            <div>
                              <div className="text-sm font-medium">Guided process</div>
                              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                                {s.process.map((step) => (
                                  <li key={step} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>

                            <div>
                              <div className="text-sm font-medium">Benefits</div>
                              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                {s.benefits.map((b) => (
                                  <li key={b} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <div className="text-sm font-medium">FAQs</div>
                            <div className="mt-3 grid gap-3">
                              {s.faqs.map((f) => (
                                <div key={f.q} className="rounded-2xl border bg-background/60 p-4">
                                  <div className="text-sm font-medium">{f.q}</div>
                                  <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Button variant="hero" asChild>
                              <a href={waLink(s.title)} target="_blank" rel="noopener noreferrer">
                                WhatsApp for next steps
                                <ArrowRight />
                              </a>
                            </Button>
                            <div className="text-xs text-muted-foreground">Comfort-first planning • Clear next steps</div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
