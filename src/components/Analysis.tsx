import Section from "./Section";
import Card from "./Card";
import { analysisCards } from "../data/surveyData";

export default function Analysis() {
  return (
    <Section
      id="analysis"
      index="05"
      kicker="Microeconomics"
      title="Economic Analysis"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {analysisCards.map((card) => (
          <Card key={card.title} className="p-6">
            <h3 className="text-h3 font-semibold text-redDeep">{card.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink/80">
              {card.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
