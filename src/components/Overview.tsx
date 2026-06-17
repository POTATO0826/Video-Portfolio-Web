import Section from "./Section";
import { projectOverview } from "../data/surveyData";

export default function Overview() {
  return (
    <Section id="overview" index="01" kicker="Overview" title="Project Overview">
      <p className="max-w-3xl text-lg leading-relaxed text-ink/80">
        {projectOverview}
      </p>
    </Section>
  );
}
