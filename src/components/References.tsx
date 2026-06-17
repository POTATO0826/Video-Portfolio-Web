import Section from "./Section";
import { references } from "../data/surveyData";

/** Splits a reference string so any trailing URL renders as a clickable link. */
function renderEntry(entry: string) {
  const match = entry.match(/(https?:\/\/\S+)$/);
  if (!match) return entry;
  const url = match[1];
  const text = entry.slice(0, entry.length - url.length);
  return (
    <>
      {text}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="break-words text-redDeep underline decoration-redDeep/30 underline-offset-2 transition-colors hover:decoration-redDeep"
      >
        {url}
      </a>
    </>
  );
}

export default function References() {
  return (
    <Section id="references" index="09" kicker="Sources" title="References">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <ol className="list-none divide-y divide-border">
          {references.map((entry, i) => (
            <li
              key={i}
              className="grid grid-cols-[2rem_1fr] gap-4 px-5 py-4 transition-colors hover:bg-mist/50 md:px-7 md:py-5"
            >
              <span
                aria-hidden="true"
                className="select-none pt-0.5 font-mono text-sm font-semibold text-redDeep"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-relaxed text-ink/80">
                {renderEntry(entry)}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-4 font-mono text-caption text-muted">
        APA 7th edition · {references.length} sources
      </p>
    </Section>
  );
}
