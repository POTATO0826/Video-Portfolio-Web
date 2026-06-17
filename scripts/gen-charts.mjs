// Generates clean, on-brand horizontal bar charts (SVG) for the 17 findings
// from the real Google Form survey data. Output: public/charts/*.svg
// Run with: bun scripts/gen-charts.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "charts");
mkdirSync(OUT, { recursive: true });

// Design tokens (mirror tailwind.config.js)
const RED = "#E4032E";
const RED_DEEP = "#B3122B";
const INK = "#15110F";
const SURFACE = "#FFFFFF";
const GRID = "#E4E0D9";
const NEUTRAL = "#D8D2C8";
const MUTED = "#6E6A64";

const W = 800;
const H = 450;
const N_RESP = 16;

/** @type {{file:string, options:[string,number][], multi?:boolean}[]} */
const charts = [
  { file: "q1-age-group", options: [["18–24", 75], ["Below 18", 25]] },
  { file: "q2-current-status", options: [["Student", 93.8], ["Working adult", 6.3]] },
  { file: "q3-soft-drink-frequency", options: [["1–2 times per week", 43.8], ["3 or more times per week", 25], ["Rarely", 18.8], ["Never", 6.3], ["1–2 times per month", 6.3]] },
  { file: "q4-awareness", options: [["Yes", 93.8], ["No", 6.3]] },
  { file: "q5-tried-before", options: [["Yes", 93.8], ["No", 6.3]] },
  { file: "q6-purchase-frequency", options: [["Rarely", 37.5], ["Never", 18.8], ["Sometimes", 18.8], ["Very often", 18.8], ["Often", 6.3]] },
  { file: "q7-main-reason", options: [["Zero sugar / health reason", 56.3], ["Taste", 18.8], ["I do not buy it", 12.5], ["Brand reputation", 6.3], ["Easy to find in shops", 6.3]] },
  { file: "q8-buying-factor", options: [["Taste", 37.5], ["Sugar content", 25], ["Price", 18.8], ["Brand", 12.5], ["Promotion", 6.3]] },
  { file: "q9-reasonable-price", options: [["RM2.00 – RM2.50", 43.8], ["RM2.51 – RM3.00", 25], ["Below RM2.00", 18.8], ["RM3.01 – RM3.50", 6.3], ["Above RM3.50", 6.3]] },
  { file: "q10-price-increase-50sen", options: [["Probably yes", 37.5], ["Definitely yes", 25], ["Not sure", 25], ["Definitely no", 12.5]] },
  { file: "q11-price-increase-rm1", options: [["Buy it less often", 43.8], ["Still buy Coca-Cola Zero Sugar", 31.3], ["Switch to another brand", 18.8], ["Not sure", 6.3]] },
  { file: "q12-closest-substitute", options: [["Coca-Cola Original Taste", 31.3], ["Pepsi Max", 18.8], ["Sprite Zero", 12.5], ["100Plus Zero", 12.5], ["Other zero-sugar drinks", 12.5], ["I am not sure", 12.5]] },
  { file: "q13-pepsi-cheaper", options: [["Yes", 43.8], ["Maybe", 31.3], ["No", 25]] },
  { file: "q14-same-price-choice", options: [["Coca-Cola Zero Sugar", 56.3], ["I have no preference", 18.8], ["Pepsi Max", 12.5], ["Other drink", 12.5]] },
  { file: "q15-brand-loyalty", options: [["Rated 1", 6.3], ["Rated 2", 0], ["Rated 3", 37.5], ["Rated 4", 25], ["Rated 5", 31.3]] },
  { file: "q16-buy-more-often", multi: true, options: [["Lower price", 50], ["Better taste", 43.8], ["Larger bottle size", 31.3], ["More promotions", 25], ["More availability in shops", 25], ["More health awareness marketing", 25], ["Nothing", 18.8], ["Better packaging", 6.3]] },
  { file: "q17-healthier-choice", options: [["Yes", 56.3], ["No", 25], ["Not sure", 18.8]] },
];

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const SANS =
  "-apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, 'Consolas', 'SF Mono', Menlo, monospace";

function buildChart({ options, multi }) {
  // sort descending by value; keep highest first so the leader reads as the
  // red accent bar.
  const rows = [...options].sort((a, b) => b[1] - a[1]);

  const LEFT = 248; // right edge of the label column
  const BAR_X = LEFT + 12;
  const BAR_MAX = 712; // right edge of the 100% bar
  const TOP = 46;
  const BOTTOM = 398;
  const span = BAR_MAX - BAR_X;
  const scale = (pct) => (pct / 100) * span;

  const n = rows.length;
  const rowH = (BOTTOM - TOP) / n;
  const barH = Math.min(26, rowH * 0.56);

  const parts = [];

  // background
  parts.push(
    `<rect x="0" y="0" width="${W}" height="${H}" rx="14" fill="${SURFACE}"/>`,
  );

  // gridlines + axis labels at 0/25/50/75/100%
  for (const g of [0, 25, 50, 75, 100]) {
    const x = BAR_X + scale(g);
    parts.push(
      `<line x1="${x.toFixed(1)}" y1="${TOP - 8}" x2="${x.toFixed(1)}" y2="${BOTTOM + 4}" stroke="${GRID}" stroke-width="1"/>`,
    );
    parts.push(
      `<text x="${x.toFixed(1)}" y="${BOTTOM + 22}" font-family="${MONO}" font-size="11" fill="${MUTED}" text-anchor="middle">${g}%</text>`,
    );
  }

  rows.forEach(([label, pct], i) => {
    const cy = TOP + rowH * i + rowH / 2;
    const barY = cy - barH / 2;
    const isLeader = i === 0 && pct > 0;
    const fill = isLeader ? RED : NEUTRAL;
    const w = scale(pct);

    // category label (right-aligned in the label column)
    parts.push(
      `<text x="${LEFT}" y="${(cy + 4).toFixed(1)}" font-family="${SANS}" font-size="13" fill="${INK}" text-anchor="end">${esc(label)}</text>`,
    );

    // bar
    if (w > 0) {
      parts.push(
        `<rect x="${BAR_X}" y="${barY.toFixed(1)}" width="${w.toFixed(1)}" height="${barH.toFixed(1)}" rx="4" fill="${fill}"/>`,
      );
    }

    // value label at the end of the bar
    const valX = BAR_X + Math.max(w, 0) + 8;
    const valColor = isLeader ? RED_DEEP : MUTED;
    const valWeight = isLeader ? "600" : "500";
    parts.push(
      `<text x="${valX.toFixed(1)}" y="${(cy + 4).toFixed(1)}" font-family="${MONO}" font-size="13" font-weight="${valWeight}" fill="${valColor}" text-anchor="start">${pct}%</text>`,
    );
  });

  // caption
  const caption =
    `n = ${N_RESP} responses` + (multi ? "  ·  multiple answers allowed" : "");
  parts.push(
    `<text x="${W - 16}" y="${H - 14}" font-family="${MONO}" font-size="11" fill="${MUTED}" text-anchor="end">${caption}</text>`,
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">
${parts.join("\n")}
</svg>
`;
}

let count = 0;
for (const chart of charts) {
  const svg = buildChart(chart);
  writeFileSync(join(OUT, `${chart.file}.svg`), svg, "utf8");
  count++;
}
console.log(`Generated ${count} chart SVGs in public/charts/`);
