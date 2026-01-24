import * as React from "react";
import { Image as ImageIcon } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { WhatsAppFab } from "@/components/marketing/WhatsAppFab";
import { GalleryLightbox, type GalleryItem } from "@/components/marketing/GalleryLightbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { clinic } from "@/content/clinic";

import facility from "@/assets/clinic-facility.jpg";
import technology from "@/assets/clinic-technology.jpg";
import team from "@/assets/dr-damini-portrait.jpg";

const placeholder = "/placeholder.svg";

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
        src: placeholder,
        alt: "Clinic corridor and interiors",
        caption: "Clinic interiors (add photo)",
      },
      {
        src: placeholder,
        alt: "Treatment room",
        caption: "Treatment room (add photo)",
      },
      {
        src: placeholder,
        alt: "Sterilization area",
        caption: "Sterilization zone (add photo)",
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
        src: placeholder,
        alt: "Comfort-focused dental chair setup",
        caption: "Comfort-focused operatory (add photo)",
      },
      {
        src: placeholder,
        alt: "Intra-oral scan workflow",
        caption: "Digital planning (add photo)",
      },
      {
        src: placeholder,
        alt: "Sterilization equipment",
        caption: "Safety & sterilization (add photo)",
      },
    ],
  },
  team: {
    label: "Team",
    items: [
      {
        src: team,
        alt: "Professional portrait of Dr. Damini Bhasin",
        caption: "Dr. Damini Bhasin",
      },
      {
        src: placeholder,
        alt: "Clinic team assisting patients",
        caption: "Front desk team (add photo)",
      },
      {
        src: placeholder,
        alt: "Clinic staff preparing a treatment room",
        caption: "Clinical assistants (add photo)",
      },
      {
        src: placeholder,
        alt: "Team group photo",
        caption: "Team group photo (add photo)",
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
      <WhatsAppFab />

      <header className="bg-hero">
        <div className="container py-14 sm:py-18">
          <p className="text-sm font-medium text-muted-foreground">Gallery</p>
          <h1 className="mt-2 text-balance font-display text-4xl tracking-tight sm:text-5xl">
            Take a quick look inside
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Browse facility, technology and team photos—tap any image to open it full-screen.
          </p>
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
              <TabsList className="w-full sm:w-auto">
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
                />
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
    </PageLayout>
  );
}
