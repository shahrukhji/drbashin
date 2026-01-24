import { Award, HeartHandshake, Sparkles } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { WhatsAppFab } from "@/components/marketing/WhatsAppFab";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { clinic } from "@/content/clinic";

import portrait from "@/assets/dr-damini-portrait.jpg";
import facility from "@/assets/clinic-facility.jpg";
import technology from "@/assets/clinic-technology.jpg";

import { GalleryLightbox } from "@/components/marketing/GalleryLightbox";

const timeline = [
  { year: "2017", title: "Clinic established", desc: "Founded in Pitampura with a focus on premium, patient-first dentistry." },
  { year: "Today", title: "Comfort-first care", desc: "Advanced technology and conscious sedation options for pain-minimized treatments." },
] as const;

export default function About() {
  useDocumentMeta({
    title: `About | ${clinic.name}`,
    description:
      "Learn about Bhasin Dental Clinic in Pitampura, Delhi—our story, philosophy, and Dr. Damini Bhasin’s patient-centered approach.",
  });

  return (
    <PageLayout>
      <WhatsAppFab />

      <header className="bg-hero">
        <div className="container py-14 sm:py-18">
          <p className="text-sm font-medium text-muted-foreground">About</p>
          <h1 className="mt-2 text-balance font-display text-4xl tracking-tight sm:text-5xl">
            Warm, modern dentistry—built on trust
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We combine advanced technology with an empathetic, comfort-first approach—so you feel informed, safe, and in control.
          </p>
        </div>
      </header>

      <section className="container py-14">
        <SectionHeading
          eyebrow="Our story"
          title={`Established excellence since ${clinic.established}`}
          description="A simple promise: gentle care, clear guidance, and outcomes you can trust."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {timeline.map((t) => (
            <div key={t.year} className="surface rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">{t.year}</div>
                  <div className="mt-1 font-display text-xl">{t.title}</div>
                </div>
                <div className="h-10 w-10 rounded-xl bg-accent" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Meet your dentist"
              title={clinic.doctor}
              description="A calm, meticulous approach—paired with modern protocols designed for comfort." 
            />

            <div className="mt-8 grid gap-4">
              <div className="flex gap-3 rounded-2xl border bg-background p-5">
                <Sparkles className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Evidence-based treatment</div>
                  <div className="text-sm text-muted-foreground">Clear options, transparent recommendations, and long-term planning.</div>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border bg-background p-5">
                <HeartHandshake className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Patient-first communication</div>
                  <div className="text-sm text-muted-foreground">You’ll always know what’s happening, why it matters, and what comes next.</div>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border bg-background p-5">
                <Award className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Premium clinical standards</div>
                  <div className="text-sm text-muted-foreground">Strict hygiene protocols and a clean, modern facility.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-3xl border bg-background soft-shadow">
              <img
                src={portrait}
                alt="Professional portrait of Dr. Damini Bhasin"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              “Your comfort is our priority”—from anxiety-friendly planning to pain-minimized techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border bg-background soft-shadow">
            <img
              src={facility}
              alt="Bhasin Dental Clinic reception and waiting area"
              className="h-[340px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our facility"
              title="Clean, modern, and built for comfort"
              description="A calm environment, modern treatment rooms, and an experience designed to make visits easier."
            />
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
              <li>• Modern treatment rooms and equipment</li>
              <li>• Hygiene-first sterilization protocols</li>
              <li>• Friendly staff and relaxed waiting area</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <GalleryLightbox
          eyebrow="Gallery"
          title="A quick look inside the clinic"
          description="Tap any image to open it full-screen."
          items={[
            {
              src: facility,
              alt: "Clinic reception and patient waiting area",
              caption: "Reception & waiting area",
            },
            {
              src: technology,
              alt: "Modern dental technology equipment",
              caption: "Technology & equipment",
            },
          ]}
        />
      </section>
    </PageLayout>
  );
}
