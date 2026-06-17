import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface SectionProps {
  id: string;
  index: string; // e.g. "03"
  title: string;
  kicker?: string;
  children: ReactNode;
  emphasis?: boolean; // stronger red rule + mist band (Findings)
}

/**
 * Standard section wrapper: id anchor, mono section index, thin red vertical
 * rule, heading, and a scroll-triggered fade-up reveal.
 */
export default function Section({
  id,
  index,
  title,
  kicker,
  children,
  emphasis = false,
}: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${
        emphasis ? "bg-mist" : ""
      } py-20 md:py-28`}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <header className="mb-10 flex items-start gap-4 md:mb-14">
          <span
            aria-hidden="true"
            className={`mt-1 block h-12 w-1 rounded-full ${
              emphasis ? "bg-red" : "bg-red/70"
            }`}
          />
          <div>
            <div className="font-mono text-caption font-medium uppercase tracking-[0.2em] text-redDeep">
              {index} {kicker ? `· ${kicker}` : ""}
            </div>
            <h2 className="mt-2 text-3xl font-bold leading-tight md:text-h2">
              {title}
            </h2>
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
