import CompetitorCard from "./CompetitorCard";
import { competitors, marketStructureIntro } from "../data/surveyData";

/**
 * Rendered inside the Background section: oligopoly explanation + competitor
 * cards.
 */
export default function MarketStructure() {
  return (
    <div className="mt-16">
      <h3 className="text-h3 font-semibold">Oligopoly Market Structure</h3>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/80">
        {marketStructureIntro}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {competitors.map((name, i) => (
          <CompetitorCard key={name} name={name} index={i} />
        ))}
      </div>
    </div>
  );
}
