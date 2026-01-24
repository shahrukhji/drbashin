import * as React from "react";

import { cn } from "@/lib/utils";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

function formatCompact(n: number) {
  return n.toLocaleString("en-IN");
}

export function SlotCounter({
  start,
  end,
  step = 100,
  durationMs = 1200,
  suffix = "+",
  className,
}: {
  start: number;
  end: number;
  step?: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = React.useState(false);
  const [value, setValue] = React.useState(reduced ? end : start);

  React.useEffect(() => {
    if (reduced) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  React.useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(end);
      return;
    }

    let raf = 0;
    let startTs = 0;
    const range = end - start;
    const steps = Math.max(1, Math.round(range / step));

    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const t = Math.min(1, (ts - startTs) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const idx = Math.min(steps, Math.round(eased * steps));
      setValue(Math.min(end, start + idx * step));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, end, inView, reduced, start, step]);

  return (
    <span
      ref={ref}
      className={cn("tabular-nums tracking-tight", className)}
      aria-label={`${formatCompact(end)}${suffix}`}
    >
      {formatCompact(value)}
      {suffix}
    </span>
  );
}
