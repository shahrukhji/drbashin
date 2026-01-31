import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import heroImg from "@/assets/bhasin-hero.jpg";
import { clinic } from "@/content/clinic";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

function TrustBadges() {
  return (
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
}

export function HomeHero({ onBook }: { onBook: () => void }) {
  return (
    <section className="bg-hero">
      <div className="container grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <Reveal>
          <div>
            <h1 className="text-balance font-display text-4xl tracking-tight sm:text-5xl">{clinic.name}</h1>
            <p className="mt-3 text-balance text-base text-muted-foreground sm:text-lg">
              Where Every Smile Is Treated With Care and Confidence
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Bhasin Dental Clinic is a trusted dental care provider in Pitampura, serving patients with dedication and
              expertise since {clinic.established}. Led by Dr Damini Bhasin (B.D.S., PGDHHM, MSR, MIDA), we deliver
              comfort‑first care with modern dental technology in a calm, welcoming environment.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="hero" size="lg" onClick={onBook}>
                Book Appointment
                <ArrowRight />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <NavLink to="/about">Learn More</NavLink>
              </Button>
            </div>

            <TrustBadges />
          </div>
        </Reveal>

        <Reveal delay={120}>
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
        </Reveal>
      </div>
    </section>
  );
}
