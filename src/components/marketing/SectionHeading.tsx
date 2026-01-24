import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <div className="text-sm font-medium text-muted-foreground">{eyebrow}</div>
      ) : null}
      <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
