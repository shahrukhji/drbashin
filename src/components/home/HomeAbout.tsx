import * as React from "react";

import portrait from "@/assets/dr-damini-portrait-original.jpeg";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

export function HomeAbout() {
  return (
    <section className="container py-14">
      <Reveal>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border bg-background soft-shadow">
            <img src={portrait} alt="Dr. Damini Bhasin portrait" className="h-[360px] w-full object-cover" loading="lazy" />
          </div>
          <div>
            <SectionHeading
              eyebrow="About"
              title="Led by Dr Damini Bhasin"
              description="Skilled cosmetic and laser dental surgeon known for a patient‑focused approach and commitment to excellence."
            />
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <p>
                Every patient is treated with personalised attention because no two smiles are the same. Treatment plans
                are designed around individual dental needs, comfort levels, and long‑term oral health goals.
              </p>
              <p>
                With modern dental technology and a calm, welcoming environment, we aim to make every visit comfortable,
                clear, and positive.
              </p>
            </div>
            <div className="mt-7">
              <Button variant="outline" asChild>
                <NavLink to="/about">Read More</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
