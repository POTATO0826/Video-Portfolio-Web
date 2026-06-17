import { useState } from "react";
import Section from "./Section";
import Lightbox from "./Lightbox";
import { evidence } from "../data/surveyData";

function EvidenceThumb({
  src,
  caption,
  onOpen,
}: {
  src: string;
  caption: string;
  onOpen: () => void;
}) {
  const [error, setError] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
      <button
        type="button"
        onClick={onOpen}
        disabled={error}
        aria-label={`View larger: ${caption}`}
        className="group relative block aspect-video w-full cursor-zoom-in bg-mist disabled:cursor-default"
      >
        {!error ? (
          <>
            <img
              src={src}
              alt={caption}
              loading="lazy"
              onError={() => setError(true)}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {/* zoom hint */}
            <span className="pointer-events-none absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/0 text-white opacity-0 transition-all duration-300 group-hover:bg-ink/60 group-hover:opacity-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21l-4-4M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </>
        ) : (
          <span className="flex h-full w-full flex-col items-center justify-center px-4 text-center">
            <span className="font-mono text-caption text-muted">
              Image pending
            </span>
            <span className="mt-1 font-mono text-[11px] text-muted/70">{src}</span>
          </span>
        )}
      </button>
      <figcaption className="px-4 py-3 text-caption text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function EvidenceGallery() {
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  return (
    <Section
      id="evidence"
      index="08"
      kicker="Documentation"
      title="Evidence Gallery"
    >
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-ink/80">
        Google Form result screenshots. Click any image to view it full size.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {evidence.map((item, i) => (
          <EvidenceThumb
            key={item.src}
            src={item.src}
            caption={item.caption}
            onOpen={() => setLbIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        items={evidence}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onIndexChange={setLbIndex}
      />
    </Section>
  );
}
