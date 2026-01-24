import * as React from "react";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** ms */
  delay?: number;
  /** How much of the element must be visible before revealing */
  threshold?: number;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mql) return;

    const onChange = () => setReduced(!!mql.matches);
    onChange();

    // Safari
    // eslint-disable-next-line deprecation/deprecation
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    // eslint-disable-next-line deprecation/deprecation
    else mql.addListener(onChange);

    return () => {
      // eslint-disable-next-line deprecation/deprecation
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      // eslint-disable-next-line deprecation/deprecation
      else mql.removeListener(onChange);
    };
  }, []);

  return reduced;
}

export function Reveal({ children, className, delay = 0, threshold = 0.2 }: Props) {
  const reduceMotion = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (reduceMotion) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
      style={{ transitionDelay: `${reduceMotion ? 0 : delay}ms` }}
    >
      {children}
    </div>
  );
}
