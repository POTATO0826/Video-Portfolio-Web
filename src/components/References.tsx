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
        className="break-all text-redDeep underline decoration-redDeep/40 underline-offset-2 hover:decoration-redDeep"
      >
        {url}
      </a>
    </>
  );
}

export default function References() {
  return (
    <Section id="references" index="09" kicker="Sources" title="References">
      <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
        <ol className="list-none space-y-5">
          {references.map((entry, i) => (
            <li
              key={i}
              className="text-base leading-relaxed text-ink/80 [padding-left:2rem] [text-indent:-2rem]"
            >
              {renderEntry(entry)}
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-4 font-mono text-caption text-muted">
        APA 7th edition · {references.length} sources · hanging indent applied.
      </p>
    </Section>
  );
}
