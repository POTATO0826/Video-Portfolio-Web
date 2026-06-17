import StatCard from "./StatCard";
import { heroStats } from "../data/surveyData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border"
    >
      {/* faint red glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-content px-5 pb-20 pt-20 sm:px-8 md:pb-28 md:pt-28">
        <div className="font-mono text-caption font-medium uppercase tracking-[0.25em] text-redDeep">
          00 · Microeconomics Group Study
        </div>

        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-hero">
          Microeconomic Analysis of{" "}
          <span className="text-redDeep">Coca-Cola Zero Sugar</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          A study on consumer demand, price sensitivity, brand loyalty, and
          competition in the soft drink market.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#findings"
            className="inline-flex items-center justify-center rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-redDeep"
          >
            View Findings
          </a>
          <a
            href="#videos"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            Video Portfolio
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {heroStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
