import Section from "./Section";
import Card from "./Card";
import { recommendations } from "../data/surveyData";

export default function Recommendations() {
  return (
    <Section
      id="recommendations"
      index="07"
      kicker="Strategy"
      title="Recommendations"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec, i) => (
          <Card key={rec.title} className="flex flex-col p-6">
            <span className="font-mono text-sm font-semibold text-redDeep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-h3 font-semibold">{rec.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {rec.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
