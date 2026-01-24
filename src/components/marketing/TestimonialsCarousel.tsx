import * as React from "react";
import { Quote, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  quote: string;
  rating: number;
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
      ))}
    </div>
  );
}

export function TestimonialsCarousel({
  items,
  className,
}: {
  items: readonly Testimonial[];
  className?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const id = window.setInterval(() => {
      api.scrollNext();
    }, 5500);

    return () => window.clearInterval(id);
  }, [api]);

  return (
    <div className={cn("relative", className)}>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="animate-fade-in"
      >
        <CarouselContent className="-ml-4">
          {items.map((t) => (
            <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <figure className="h-full rounded-3xl border bg-background p-6 soft-shadow">
                <div className="flex items-center justify-between gap-4">
                  <Stars count={t.rating} />
                  <Quote className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <blockquote className="mt-4 text-sm text-muted-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm font-medium">{t.name}</figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-14 bg-gradient-to-r from-background to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-14 bg-gradient-to-l from-background to-transparent sm:block" />

        <div className="mt-6 flex items-center justify-center gap-3">
          <CarouselPrevious className="static pointer-events-auto translate-y-0" />
          <CarouselNext className="static pointer-events-auto translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
