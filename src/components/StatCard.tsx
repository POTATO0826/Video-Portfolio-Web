import { useCountUp } from "../hooks/useCountUp";
import type { StatCard as StatCardData } from "../data/surveyData";

/**
 * Hero stat card with mono numerals that count up once on first view.
 */
export default function StatCard({ value, label }: StatCardData) {
  const { ref, display } = useCountUp(value);

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <span
        ref={ref}
        className="block font-mono text-3xl font-semibold leading-none text-redDeep md:text-4xl"
      >
        {display}
      </span>
      <span className="mt-3 block text-caption leading-snug text-muted">
        {label}
      </span>
    </div>
  );
}
