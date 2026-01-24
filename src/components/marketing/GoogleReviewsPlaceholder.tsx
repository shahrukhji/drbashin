import { ExternalLink, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/motion/Marquee";
import { cn } from "@/lib/utils";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
      ))}
    </div>
  );
}

export function GoogleReviewsPlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-3xl border bg-background p-6 soft-shadow", className)}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-sm font-medium">Google Reviews</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Ready for integration: replace this block with your Google Business Profile reviews feed.
          </p>
        </div>
        <Stars />
      </div>

      <div className="mt-5">
        <Marquee className="rounded-2xl" pauseOnHover durationClassName="[animation-duration:20s]">
          {[
            {
              quote:
                "Sample review card. Once connected, real reviews will appear here with author, rating, and date.",
              author: "Google user",
            },
            {
              quote:
                "Patients love fast scheduling, clear explanations, and comfort-first care—this is a placeholder example.",
              author: "Google user",
            },
            {
              quote:
                "Third‑party reviews build trust. Replace this placeholder with your live Google Business Profile feed.",
              author: "Google user",
            },
            {
              quote:
                "A smooth right‑to‑left slider keeps the section lively while staying readable—placeholder text.",
              author: "Google user",
            },
            {
              quote:
                "Tip: Use real names + timestamps when integrated. For now, these cards demonstrate layout only.",
              author: "Google user",
            },
          ].map((r, i) => (
            <div
              key={i}
              className={cn(
                "surface w-[280px] shrink-0 rounded-2xl p-4",
                "sm:w-[320px]",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <Stars />
                <div className="text-xs text-muted-foreground">Google</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">“{r.quote}”</p>
              <div className="mt-3 text-xs text-muted-foreground">— {r.author}</div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-muted-foreground">
          Tip: Keep NAP (Name/Address/Phone) consistent for better local SEO.
        </div>
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://www.google.com/business/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Business Profile"
          >
            <ExternalLink />
            Google Business Profile
          </a>
        </Button>
      </div>
    </div>
  );
}
