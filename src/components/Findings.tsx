import { useState } from "react";
import Section from "./Section";
import ChartCard from "./ChartCard";
import Lightbox from "./Lightbox";
import { findings } from "../data/surveyData";

export default function Findings() {
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const items = findings.map((f) => ({
    src: f.image,
    caption: `${f.id.toUpperCase()} — ${f.question}`,
  }));

  return (
    <Section
      id="findings"
      index="04"
      kicker="Survey Results"
      title="Findings"
      emphasis
    >
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-ink/80">
        Each card maps to one survey question. Click any chart to view it full
        size. Chart images load from{" "}
        <code className="font-mono text-sm text-redDeep">/charts</code> — drop the
        matching file in to update a card with no code change.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {findings.map((finding, i) => (
          <ChartCard
            key={finding.id}
            finding={finding}
            onZoom={() => setLbIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        items={items}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onIndexChange={setLbIndex}
      />
    </Section>
  );
}
