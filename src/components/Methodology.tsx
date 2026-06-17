import Section from "./Section";
import Timeline from "./Timeline";
import { methodologyPoints, methodologySteps } from "../data/surveyData";

export default function Methodology() {
  return (
    <Section
      id="methodology"
      index="03"
      kicker="Method"
      title="Research Method"
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <ul className="grid gap-4">
          {methodologyPoints.map((point, i) => (
            <li key={i} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red"
              />
              <p className="text-base leading-relaxed text-ink/80">{point}</p>
            </li>
          ))}
        </ul>

        <Timeline steps={methodologySteps} />
      </div>
    </Section>
  );
}
