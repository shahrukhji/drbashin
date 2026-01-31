import * as React from "react";
import { MapPin, Phone } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactFabs } from "@/components/marketing/ContactFabs";
import { GoogleReviewsPlaceholder } from "@/components/marketing/GoogleReviewsPlaceholder";
import { AppointmentDialog } from "@/components/appointments/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Reveal } from "@/components/motion/Reveal";
import { clinic } from "@/content/clinic";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeOutcomes } from "@/components/home/HomeOutcomes";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeWhyChooseUs } from "@/components/home/HomeWhyChooseUs";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeFeatures } from "@/components/home/HomeFeatures";
import { HomeFaqs } from "@/components/home/HomeFaqs";

export default function Index() {
  const [open, setOpen] = React.useState(false);

  useDocumentMeta({
    title: `${clinic.name} | Pitampura, Delhi`,
    description:
      "Bhasin Dental Clinic in Pitampura, Delhi—advanced, pain-free dental care since 2017. Book an appointment for preventive, cosmetic, restorative, and sedation dentistry.",
  });

  return (
    <PageLayout>
      <ContactFabs />

      <HomeHero onBook={() => setOpen(true)} />
      <HomeOutcomes />
      <HomeAbout />
      <HomeWhyChooseUs />
      <HomeServices />
      <HomeFeatures />
      <HomeFaqs />


      {/* Keep existing review + location + CTA sections below */}

      <section className="container py-14">
        <Reveal>
          <SectionHeading eyebrow="Reviews" title="Google Business Reviews" />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10">
            <GoogleReviewsPlaceholder />
          </div>
        </Reveal>
      </section>

      <section className="container py-14">
        <Reveal>
          <div className="grid gap-6 rounded-3xl border bg-background p-8 soft-shadow lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl">Visit us in Pitampura</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Conveniently located near Ram Mandir. Call or message on WhatsApp for quick guidance and directions.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}>
                  <Phone />
                  Call {clinic.phones[0]}
                </a>
              </Button>
              <Button variant="soft" size="lg" asChild>
                <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="surface rounded-2xl p-5">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4" />
              <div>
                <div className="text-sm font-medium text-foreground">Address</div>
                <div className="mt-1">{clinic.addressLine}</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              Add a Google Maps embed on the Contact page in Phase 2.
            </div>
          </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-hero">
        <div className="container py-14">
          <Reveal>
            <div className="grid gap-6 rounded-3xl border bg-background/70 p-8 soft-shadow lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="font-display text-2xl">Ready to schedule?</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your preference and we’ll confirm your appointment shortly. Click-to-call and WhatsApp are available for quick support.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg" onClick={() => setOpen(true)}>
                Book Your Appointment
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}>Call Us Now</a>
              </Button>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AppointmentDialog open={open} onOpenChange={setOpen} />
    </PageLayout>
  );
}
