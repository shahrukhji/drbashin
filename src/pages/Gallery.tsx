import * as React from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { ContactFabs } from "@/components/marketing/ContactFabs";
import { GalleryLightbox, type GalleryItem } from "@/components/marketing/GalleryLightbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { clinic } from "@/content/clinic";

import facility from "@/assets/clinic-facility.jpg";
import technology from "@/assets/clinic-technology.jpg";
import doctorPortrait from "@/assets/dr-damini-portrait-original.jpeg";
import teamPhoto from "@/assets/gallery-team-1.jpeg";
import patientPhoto1 from "@/assets/gallery-patient-1.jpeg";
import patientPhoto2 from "@/assets/gallery-patient-2.jpeg";
import patientPhoto3 from "@/assets/gallery-patient-3.jpeg";
import treatmentPhoto from "@/assets/gallery-treatment-1.jpeg";
import eventPhoto from "@/assets/gallery-event-1.jpeg";

type CategoryKey = "facility" | "technology" | "team";

const categories: Record<CategoryKey, { label: string; items: readonly GalleryItem[] }> = {
  facility: {
    label: "Facility",
    items: [
      {
        src: facility,
        alt: "Clinic reception and patient waiting area",
        caption: "Reception & waiting area",
      },
      {
        src: patientPhoto2,
        alt: "Dental clinic chair and operatory area",
        caption: "Operatory & chair",
      },
      {
        src: treatmentPhoto,
        alt: "Dental treatment in progress in the clinic operatory",
        caption: "Treatment in progress",
      },
      {
        src: patientPhoto1,
        alt: "Dental clinic room setup for patient care",
        caption: "Clinic setup",
      },
    ],
  },
  technology: {
    label: "Technology",
    items: [
      {
        src: technology,
        alt: "Advanced dental technology equipment used at the clinic",
        caption: "Modern diagnostics",
      },
      {
        src: patientPhoto2,
        alt: "Comfort-focused dental chair and equipment",
        caption: "Comfort-focused operatory",
      },
      {
        src: treatmentPhoto,
        alt: "Clinical workflow in the operatory",
        caption: "Clinical workflow",
      },
      {
        src: facility,
        alt: "Clean clinic reception and waiting area",
        caption: "Clean, calm environment",
      },
    ],
  },
  team: {
    label: "Team",
    items: [
      {
        src: doctorPortrait,
        alt: "Professional portrait of Dr. Damini Bhasin",
        caption: "Dr. Damini Bhasin",
      },
      {
        src: teamPhoto,
        alt: "Clinic team members at the clinic",
        caption: "Clinic team",
      },
      {
        src: patientPhoto3,
        alt: "Doctor with a patient at the clinic",
        caption: "Patient care",
      },
      {
        src: eventPhoto,
        alt: "Doctor attending an event",
        caption: "Community & events",
      },
    ],
  },
};

export default function Gallery() {
  const [tab, setTab] = React.useState<CategoryKey>("facility");

  useDocumentMeta({
    title: `Gallery | ${clinic.name}`,
    description:
      "Explore photos of the clinic facility, technology, and team at Bhasin Dental Clinic in Pitampura, Delhi.",
  });

  return (
    <PageLayout>
      <ContactFabs />

      <header className="bg-hero relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-12 top-10 h-56 w-56 rounded-full bg-accent/50 blur-2xl" />
          <div className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute left-1/3 top-2 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
        </div>
        <div className="container relative py-14 sm:py-18">
          <p className="text-sm font-medium text-muted-foreground">Gallery</p>
          <h1 className="mt-2 text-balance font-display text-4xl tracking-tight sm:text-5xl">
            Take a quick look inside
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Browse facility, technology and team photos—tap any image to open it full-screen.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Premium, comfort-first clinic
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <ImageIcon className="h-3.5 w-3.5" />
              Tap to enlarge
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="container py-14">
          <Tabs value={tab} onValueChange={(v) => setTab(v as CategoryKey)}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <ImageIcon className="h-4 w-4" />
                Categories
              </div>
              <TabsList className="w-full sm:w-auto bg-accent">
                <TabsTrigger value="facility">Facility</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>
            </div>

            {(Object.keys(categories) as CategoryKey[]).map((key) => (
              <TabsContent key={key} value={key} className="mt-8">
                <GalleryLightbox
                  eyebrow={categories[key].label}
                  title={`Photos: ${categories[key].label}`}
                  description="You can replace placeholders with real clinic photos anytime."
                  items={categories[key].items}
                  className="animate-fade-in"
                />
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
    </PageLayout>
  );
}
