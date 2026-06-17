import type { TimelineStep } from "../data/surveyData";

/**
 * Vertical numbered timeline with mono step numbers and a connecting rule.
 */
export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-8">
      {steps.map((step, i) => (
        <li key={step.label} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-semibold text-redDeep"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-h3 font-semibold">{step.label}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {step.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
