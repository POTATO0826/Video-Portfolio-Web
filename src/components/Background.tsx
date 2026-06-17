import Section from "./Section";
import MarketStructure from "./MarketStructure";
import { backgroundPoints } from "../data/surveyData";

export default function Background() {
  return (
    <Section
      id="background"
      index="02"
      kicker="Context"
      title="Company & Product Background"
    >
      <ul className="grid max-w-3xl gap-4">
        {backgroundPoints.map((point, i) => (
          <li key={i} className="flex gap-4">
            <span className="mt-1 font-mono text-sm font-semibold text-redDeep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-base leading-relaxed text-ink/80">{point}</p>
          </li>
        ))}
      </ul>

      <MarketStructure />
    </Section>
  );
}
