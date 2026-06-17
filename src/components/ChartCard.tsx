import { useState } from "react";
import Card from "./Card";
import type { Finding } from "../data/surveyData";

/**
 * Findings card: question title, 16:9 lazy-loaded chart image, mono "Key result"
 * line, and a short analysis. Swapping the image file at the given path updates
 * the card with no code change.
 */
export default function ChartCard({
  finding,
  onZoom,
}: {
  finding: Finding;
  onZoom?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="border-b border-border p-5 pb-4">
        <span className="font-mono text-caption uppercase tracking-widest text-muted">
          {finding.id}
        </span>
        <h3 className="mt-1 text-h3 font-semibold">{finding.question}</h3>
      </div>

      <button
        type="button"
        onClick={onZoom}
        disabled={error}
        aria-label={`View larger chart: ${finding.question}`}
        className="relative block aspect-video w-full cursor-zoom-in overflow-hidden bg-mist disabled:cursor-default"
      >
        {!error ? (
          <>
            <img
              src={finding.image}
              alt={`Chart: ${finding.question} — ${finding.keyResult}`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              className={`h-full w-full object-contain transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
            <span className="pointer-events-none absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/0 text-white opacity-0 transition-all duration-300 hover:bg-ink/60 group-hover:bg-ink/60 group-hover:opacity-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21l-4-4M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </>
        ) : (
          <span className="flex h-full w-full flex-col items-center justify-center px-4 text-center">
            <span className="font-mono text-caption text-muted">
              Chart image pending
            </span>
            <span className="mt-1 font-mono text-[11px] text-muted/70">
              {finding.image}
            </span>
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="font-mono text-sm leading-relaxed text-redDeep">
          <span className="font-semibold uppercase tracking-wide">
            Key result:{" "}
          </span>
          {finding.keyResult}
        </p>
        <p className="text-sm leading-relaxed text-muted">{finding.analysis}</p>
      </div>
    </Card>
  );
}
