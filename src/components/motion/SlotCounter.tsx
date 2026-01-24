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

function SlotDigit({
  digit,
  runKey,
  durationMs,
  delayMs,
  className,
}: {
  digit: number;
  runKey: number;
  durationMs: number;
  delayMs: number;
  className?: string;
}) {
  const measureRef = React.useRef<HTMLSpanElement | null>(null);
  const [digitH, setDigitH] = React.useState<number>(0);
  const [translateY, setTranslateY] = React.useState(0);

  React.useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    setDigitH(el.getBoundingClientRect().height || 0);
  }, []);

  React.useEffect(() => {
    if (!digitH) return;
    // Reset to top, then spin to target.
    setTranslateY(0);
    const spins = 2; // fixed spins to feel "slot-like" without being too long
    const target = (spins * 10 + digit) * digitH;
    const id = window.setTimeout(() => {
      // next tick so transition applies
      requestAnimationFrame(() => setTranslateY(-target));
    }, delayMs);
    return () => window.clearTimeout(id);
  }, [digit, digitH, delayMs, runKey]);

  const stack: number[] = React.useMemo(() => {
    // Build enough digits to support the fixed spin distance above.
    // (spins*10 + digit) positions, plus some extra.
    const spins = 2;
    const count = spins * 10 + 10;
    return Array.from({ length: count }, (_, i) => i % 10);
  }, []);

  return (
    <span className={cn("inline-flex h-[1.05em] overflow-hidden align-baseline", className)}>
      <span
        className="inline-flex flex-col leading-none"
        style={{
          transform: `translateY(${translateY}px)`,
          transitionProperty: "transform",
          transitionTimingFunction: "cubic-bezier(0.2, 0.9, 0.2, 1)",
          transitionDuration: `${durationMs}ms`,
        }}
        aria-hidden
      >
        {stack.map((n, idx) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            className="leading-none"
            ref={idx === 0 ? measureRef : undefined}
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
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
  const [runKey, setRunKey] = React.useState(0);

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

  // Auto-run once when the counter becomes visible.
  React.useEffect(() => {
    if (!inView) return;
    if (reduced) return;
    setRunKey((k) => k + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const formattedEnd = formatCompact(end);

  return (
    <span
      ref={ref}
      className={cn("tabular-nums tracking-tight", className)}
      aria-label={`${formattedEnd}${suffix}`}
      tabIndex={reduced ? -1 : 0}
      onMouseEnter={() => (reduced ? undefined : setRunKey((k) => k + 1))}
      onFocus={() => (reduced ? undefined : setRunKey((k) => k + 1))}
    >
      {reduced ? (
        <>
          {formattedEnd}
          {suffix}
        </>
      ) : (
        <>
          {formattedEnd.split("").map((ch, i) => {
            const n = Number(ch);
            if (Number.isFinite(n)) {
              return (
                <SlotDigit
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${runKey}-${i}`}
                  digit={n}
                  runKey={runKey}
                  durationMs={durationMs}
                  delayMs={i * 55}
                />
              );
            }
            return (
              <span key={`${runKey}-${i}`} className="inline-block" aria-hidden>
                {ch}
              </span>
            );
          })}
          <span aria-hidden>{suffix}</span>
        </>
      )}
    </span>
  );
}
