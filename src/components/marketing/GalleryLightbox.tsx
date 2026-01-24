import * as React from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly GalleryItem[];
  className?: string;
};

export function GalleryLightbox({
  eyebrow,
  title,
  description,
  items,
  className,
}: Props) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const hasOpen = openIndex !== null;
  const active = hasOpen ? items[openIndex] : null;

  const goPrev = React.useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  }, [openIndex, items.length]);

  const goNext = React.useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));
  }, [openIndex, items.length]);

  React.useEffect(() => {
    if (!hasOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, hasOpen]);

  return (
    <div className={cn("surface rounded-3xl p-6", className)}>
      <div className="max-w-2xl">
        {eyebrow ? <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p> : null}
        <h2 className="mt-2 text-balance font-display text-2xl tracking-tight sm:text-3xl">{title}</h2>
        {description ? <p className="mt-3 text-sm text-muted-foreground">{description}</p> : null}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item, idx) => (
          <button
            key={item.caption}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group relative overflow-hidden rounded-2xl border bg-background text-left soft-shadow"
            aria-label={`Open image: ${item.caption}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-background/80 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="text-sm font-medium">{item.caption}</div>
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-background">
                  <Maximize2 className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={hasOpen} onOpenChange={(o) => setOpenIndex(o ? openIndex : null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-display">{active?.caption}</DialogTitle>
            <DialogDescription>
              Use the arrows (or your keyboard) to browse the gallery.
            </DialogDescription>
          </DialogHeader>

          <div className="relative mt-2 overflow-hidden rounded-2xl border bg-background">
            {active ? (
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[70vh] w-full object-contain"
              />
            ) : null}

            {items.length > 1 ? (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3">
                <div className="pointer-events-auto">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={goPrev}
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </Button>
                </div>
                <div className="pointer-events-auto">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={goNext}
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
