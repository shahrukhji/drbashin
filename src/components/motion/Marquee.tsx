import * as React from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  /** Tailwind duration class like "[animation-duration:18s]"; defaults to theme marquee (18s). */
  durationClassName?: string;
  /** Pause animation on hover (default true). */
  pauseOnHover?: boolean;
};

/**
 * Horizontal marquee that duplicates content to create a seamless right-to-left loop.
 * Uses Tailwind's `animate-marquee` keyframes defined in tailwind.config.ts.
 */
export function Marquee({
  children,
  className,
  durationClassName,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max items-stretch gap-3",
          "motion-reduce:animate-none",
          "animate-marquee",
          durationClassName,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-label="Scrolling content"
      >
        <div className="flex items-stretch gap-3">{children}</div>
        {/* Duplicate content for seamless loop */}
        <div className="flex items-stretch gap-3" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
