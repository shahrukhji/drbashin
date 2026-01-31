import * as React from "react";

import { Reveal } from "@/components/motion/Reveal";
import { SlotCounter } from "@/components/motion/SlotCounter";

export function HomeOutcomes() {
  return (
    <section className="container py-10">
      <Reveal>
        <div className="surface relative overflow-hidden rounded-3xl p-6 sm:p-8">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-14 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/60 blur-3xl" />
          </div>

          <div className="relative">
            <div className="text-sm font-medium text-muted-foreground">Successfully Completed</div>
            <h2 className="mt-2 text-balance font-display text-2xl tracking-tight sm:text-3xl">
              Proven outcomes, premium care
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["10000+ Dental Implants", "5000+ Invisible Aligners", "7000+ Digital Smile designs"].map((label, i) => {
                const [count, ...rest] = label.split(" ");
                const end = Number(count.replace(/\D/g, ""));
                const start = Math.max(0, end - 1000);
                const step = end >= 10000 ? 100 : 50;
                return (
                  <Reveal key={label} delay={120 + i * 90}>
                    <div className="rounded-2xl border bg-background/70 p-5 soft-shadow">
                      <div className="font-display text-3xl">
                        <SlotCounter start={start} end={end} step={step} durationMs={1400} suffix="+" />
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{rest.join(" ")}</div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
