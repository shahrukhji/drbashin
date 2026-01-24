import * as React from "react";
import { ArrowRight, MapPin, Phone, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { NavLink } from "@/components/NavLink";

import heroImg from "@/assets/bhasin-hero.jpg";
import portrait from "@/assets/dr-damini-portrait.jpg";

import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { WhatsAppFab } from "@/components/marketing/WhatsAppFab";
import { TestimonialsCarousel } from "@/components/marketing/TestimonialsCarousel";
import { GoogleReviewsPlaceholder } from "@/components/marketing/GoogleReviewsPlaceholder";
import { AppointmentDialog } from "@/components/appointments/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { clinic, serviceCategories, testimonials, whyChooseUs } from "@/content/clinic";
import { cn } from "@/lib/utils";

const TrustBadges = () => (
  <div className="mt-10 grid gap-3 sm:grid-cols-3">
    {["7+ Years of Excellence", "Advanced Technology", "Pain‑Free Treatments"].map((t) => (
      <div key={t} className="rounded-2xl border bg-background/70 px-4 py-3 text-sm soft-shadow">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="font-medium">{t}</span>
        </div>
      </div>
    ))}
  </div>
);

export default function Index() {
  const [open, setOpen] = React.useState(false);

  useDocumentMeta({
    title: `${clinic.name} | Pitampura, Delhi`,
    description:
      "Bhasin Dental Clinic in Pitampura, Delhi—advanced, pain-free dental care since 2017. Book an appointment for preventive, cosmetic, restorative, and sedation dentistry.",
  });

  return (
    <PageLayout>
      <WhatsAppFab />

      <section className="bg-hero">
        <div className="container grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <h1 className="text-balance font-display text-4xl tracking-tight sm:text-5xl">
              Welcome to {clinic.name}
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Your trusted partner for advanced dental care since {clinic.established}. Experience calm, comfort-first treatment with modern technology.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="hero" size="lg" onClick={() => setOpen(true)}>
                Book Appointment
                <ArrowRight />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <NavLink to="/about">Learn More</NavLink>
              </Button>
            </div>

            <TrustBadges />
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border bg-background soft-shadow">
              <img
                src={heroImg}
                alt="Modern dental clinic interior"
                className="h-[340px] w-full object-cover sm:h-[420px]"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-5 -left-4 hidden h-28 w-28 rounded-3xl bg-accent/60 blur-2xl sm:block" />
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border bg-background soft-shadow">
            <img
              src={portrait}
              alt="Dr. Damini Bhasin portrait"
              className="h-[360px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About"
              title="Led by Dr. Damini Bhasin"
              description="A premium dental experience focused on empathy, precision, and comfort—every step of the way."
            />
            <p className="mt-5 text-sm text-muted-foreground">
              From routine cleanings to advanced treatments, we prioritize gentle care, clear communication, and results you can feel confident about.
            </p>
            <div className="mt-7">
              <Button variant="outline" asChild>
                <NavLink to="/about">Read More</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <SectionHeading
          eyebrow="Experience"
          title="What to expect on your first visit"
          description="A calm, guided process designed to reduce anxiety and deliver clarity—before any treatment begins."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="surface rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="font-medium">Comfort-first assessment</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              We start with a gentle examination and clear explanation—no rushing, no pressure.
            </p>
          </div>
          <div className="surface rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="font-medium">Personalized treatment plan</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Options, timelines, and costs are discussed upfront—so you can decide confidently.
            </p>
          </div>
          <div className="surface rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                <Timer className="h-5 w-5" />
              </div>
              <div className="font-medium">Efficient appointments</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Modern diagnostics help us reduce chair-time while keeping results precise.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <SectionHeading
          eyebrow="Services"
          title="Care for every smile"
          description="Explore our core service categories—designed around comfort, longevity, and confidence."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((s) => (
            <div
              key={s.key}
              className={cn(
                "rounded-3xl border bg-background p-6 transition-transform duration-300 hover:-translate-y-1 soft-shadow",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="font-display text-lg">{s.title}</div>
                <div className="h-10 w-10 rounded-2xl bg-accent" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
              <div className="mt-5">
                <Button variant="soft" size="sm" asChild>
                  <NavLink to="/services">View Details</NavLink>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <SectionHeading
          eyebrow="Why choose us"
          title="A calmer dental experience"
          description="Advanced technology meets personalized care—built for trust and comfort."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((f) => (
            <div key={f.title} className="surface rounded-3xl p-6">
              <div className="text-sm font-medium">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by patients"
          description="A small snapshot of the comfort-first experience we aim to deliver." 
        />
        <div className="mt-10">
          <TestimonialsCarousel items={testimonials} />
        </div>

        <div className="mt-10">
          <GoogleReviewsPlaceholder />
        </div>
      </section>

      <section className="container py-14">
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
      </section>

      <section className="bg-hero">
        <div className="container py-14">
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
        </div>
      </section>

      <AppointmentDialog open={open} onOpenChange={setOpen} />
    </PageLayout>
  );
}
