import { ExternalLink, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
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

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="surface rounded-2xl p-4">
            <p className="text-sm text-muted-foreground">
              “Sample review card. Once connected, real reviews will appear here with author and date.”
            </p>
            <div className="mt-3 text-xs text-muted-foreground">— Google user</div>
          </div>
        ))}
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
