import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric value up from 0 once the element first enters the viewport.
 * Preserves any non-numeric prefix/suffix in the original string (e.g. "%").
 * Honours prefers-reduced-motion by showing the final value immediately.
 */
export function useCountUp(target: string, duration = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(target);
  const started = useRef(false);

  useEffect(() => {
    const match = target.match(/^([^\d]*)([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const end = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const node = ref.current;
    if (reduced || !node || typeof IntersectionObserver === "undefined") {
      setDisplay(target);
      return;
    }

    const format = (n: number) =>
      `${prefix}${n.toFixed(decimals)}${suffix}`;

    setDisplay(format(0));

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(format(end * eased));
        if (progress < 1) requestAnimationFrame(tick);
        else setDisplay(target);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run();
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, display } as const;
}
