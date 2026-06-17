export interface StatCard {
  value: string;
  label: string;
}

export interface Finding {
  id: string;
  question: string;
  image: string; // path under /public/charts
  keyResult: string;
  analysis: string;
}

export interface InfoCard {
  title: string;
  body: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string; // swap in a real YouTube embed URL to replace the placeholder box
}

export interface EvidenceItem {
  src: string; // path under /public/evidence
  caption: string;
}

export interface TimelineStep {
  label: string;
  detail: string;
}

export const heroStats: StatCard[] = [
  { value: "16", label: "survey responses" },
  { value: "93.8%", label: "product awareness" },
  { value: "56.3%", label: "choose Coke Zero when same price as Pepsi Black" },
  { value: "50%", label: "want a lower price" },
];

export const findings: Finding[] = [
  {
    id: "q1",
    question: "Age group",
    image: "/charts/q1-age-group.svg",
    keyResult: "75% aged 18–24; 25% below 18.",
    analysis:
      "Most respondents are young consumers, so the findings mainly represent student and young adult behaviour.",
  },
  {
    id: "q2",
    question: "Current status",
    image: "/charts/q2-current-status.svg",
    keyResult: "93.8% students; 6.3% working adults.",
    analysis: "The survey mainly reflects student buying behaviour.",
  },
  {
    id: "q3",
    question: "Soft drink frequency",
    image: "/charts/q3-soft-drink-frequency.svg",
    keyResult: "43.8% drink soft drinks 1–2x/week; 25% 3+ times/week.",
    analysis:
      "Most respondents are familiar with soft drinks, making their opinions relevant.",
  },
  {
    id: "q4",
    question: "Product awareness",
    image: "/charts/q4-awareness.svg",
    keyResult: "93.8% have heard of Coca-Cola Zero Sugar.",
    analysis: "The product has strong awareness among respondents.",
  },
  {
    id: "q5",
    question: "Product trial",
    image: "/charts/q5-tried-before.svg",
    keyResult: "93.8% have tried Coca-Cola Zero Sugar.",
    analysis: "Most respondents are familiar with the product.",
  },
  {
    id: "q6",
    question: "Purchase frequency",
    image: "/charts/q6-purchase-frequency.svg",
    keyResult: "37.5% rarely; 18.8% sometimes; 18.8% very often.",
    analysis: "Awareness is high, but regular demand is moderate.",
  },
  {
    id: "q7",
    question: "Main reason for buying",
    image: "/charts/q7-main-reason.svg",
    keyResult: "56.3% buy for zero sugar / health; 18.8% for taste.",
    analysis: "Health awareness is the strongest demand factor.",
  },
  {
    id: "q8",
    question: "Buying decision factor",
    image: "/charts/q8-buying-factor.svg",
    keyResult: "37.5% taste; 25% sugar content; 18.8% price.",
    analysis: "Consumers care about taste, health, and affordability.",
  },
  {
    id: "q9",
    question: "Reasonable price",
    image: "/charts/q9-reasonable-price.svg",
    keyResult: "43.8% say RM2.00–RM2.50; 25% say RM2.51–RM3.00.",
    analysis: "The product should remain affordable, especially for students.",
  },
  {
    id: "q10",
    question: "RM0.50 price increase",
    image: "/charts/q10-price-increase-50sen.svg",
    keyResult: "25% definitely buy; 37.5% probably buy; 25% unsure; 12.5% would not.",
    analysis: "A small price increase may still be acceptable.",
  },
  {
    id: "q11",
    question: "RM1.00 price increase",
    image: "/charts/q11-price-increase-rm1.svg",
    keyResult: "31.3% still buy; 43.8% buy less often; 18.8% switch brand.",
    analysis: "A larger price increase makes consumers more price-sensitive.",
  },
  {
    id: "q12",
    question: "Closest substitute",
    image: "/charts/q12-closest-substitute.svg",
    keyResult:
      "31.3% Coca-Cola Original; 18.8% Pepsi Black; 12.5% Sprite Zero; 12.5% 100Plus Zero; 12.5% other.",
    analysis:
      "Coca-Cola Zero Sugar competes with both rival brands and Coca-Cola's own products.",
  },
  {
    id: "q13",
    question: "If Pepsi Black were cheaper",
    image: "/charts/q13-pepsi-cheaper.svg",
    keyResult: "43.8% would switch; 31.3% maybe; 25% would not.",
    analysis:
      "This shows cross-price elasticity because some consumers may switch when a substitute is cheaper.",
  },
  {
    id: "q14",
    question: "Same price choice",
    image: "/charts/q14-same-price-choice.svg",
    keyResult: "56.3% choose Coke Zero; 12.5% Pepsi Black; 18.8% no preference.",
    analysis:
      "Coca-Cola Zero Sugar has stronger brand preference when price is equal.",
  },
  {
    id: "q15",
    question: "Brand loyalty",
    image: "/charts/q15-brand-loyalty.svg",
    keyResult: "37.5% rated 3; 25% rated 4; 31.3% rated 5.",
    analysis: "Most respondents show moderate to strong brand loyalty.",
  },
  {
    id: "q16",
    question: "What would make them buy more often",
    image: "/charts/q16-buy-more-often.svg",
    keyResult:
      "50% lower price; 43.8% better taste; 31.3% larger bottle; 25% promotions; 25% availability; 25% health marketing.",
    analysis:
      "Lower pricing, better taste, and promotions are the strongest improvement areas.",
  },
  {
    id: "q17",
    question: "Healthier choice",
    image: "/charts/q17-healthier-choice.svg",
    keyResult: "56.3% think it is healthier than regular soft drinks; 25% no; 18.8% unsure.",
    analysis: "Coca-Cola can use health-focused marketing to strengthen demand.",
  },
];

export const competitors: string[] = [
  "Pepsi Black",
  "Coca-Cola Original Taste",
  "Sprite Zero",
  "100Plus Zero",
  "Other zero-sugar drinks",
];

export const backgroundPoints: string[] = [
  "Coca-Cola Zero Sugar is a sugar-free variant of the Coca-Cola brand, produced by The Coca-Cola Company, one of the world's largest beverage manufacturers.",
  "It is positioned as a healthier alternative to regular Coca-Cola, offering the classic cola taste with zero sugar and zero calories.",
  "The product targets health-conscious consumers, especially younger buyers who want to reduce sugar intake without giving up soft drinks.",
  "In Malaysia, it competes directly with other zero-sugar soft drinks and is widely available in convenience stores, supermarkets, and vending machines.",
];

export const marketStructureIntro =
  "The soft drink market operates as an oligopoly: a small number of large firms dominate the market, products are close substitutes, and each firm's pricing decisions affect the others. Coca-Cola Zero Sugar competes against a handful of well-known rivals rather than many small sellers, so brand loyalty, marketing, and price positioning matter more than in a competitive market.";

export const methodologyPoints: string[] = [
  "A quantitative survey was distributed online using a Google Form to collect primary data on consumer behaviour.",
  "The questionnaire covered awareness, purchase habits, price sensitivity, substitutes, and brand loyalty.",
  "A total of 16 responses were collected, mostly from students aged 18–24.",
  "Responses were summarised into charts to identify patterns in demand and price sensitivity.",
  "Findings were linked to microeconomic concepts such as demand, price elasticity, and cross-price elasticity.",
];

export const methodologySteps: TimelineStep[] = [
  { label: "Define objective", detail: "Study consumer demand and price sensitivity for Coca-Cola Zero Sugar." },
  { label: "Design survey", detail: "Build a 17-question Google Form covering behaviour, price, and loyalty." },
  { label: "Collect data", detail: "Distribute online and gather 16 responses." },
  { label: "Analyse results", detail: "Summarise responses into charts and identify trends." },
  { label: "Apply theory", detail: "Connect findings to microeconomic concepts and recommendations." },
];

export const analysisCards: InfoCard[] = [
  {
    title: "Demand",
    body: "Demand is influenced by health awareness, taste, price, and brand preference. Since 56.3% buy Coca-Cola Zero Sugar for zero sugar or health reasons, health is a strong demand factor.",
  },
  {
    title: "Price Elasticity of Demand",
    body: "A RM0.50 price increase may not strongly reduce demand, but a RM1.00 increase causes more respondents to buy less or switch brands. This means demand becomes more elastic when the price increase is larger.",
  },
  {
    title: "Cross-Price Elasticity",
    body: "43.8% would switch to Pepsi Black if it is cheaper. This shows that Pepsi Black is a substitute product and competitor pricing can affect Coca-Cola Zero Sugar demand.",
  },
  {
    title: "Revenue Effect",
    body: "Small price increases may increase revenue if consumers continue buying. However, large price increases may reduce total revenue because consumers may buy less or switch to substitutes.",
  },
];

export const recommendations: InfoCard[] = [
  {
    title: "Lower Price or Promotions",
    body: "50% of respondents said lower price would make them buy Coca-Cola Zero Sugar more often.",
  },
  {
    title: "Improve or Highlight Taste",
    body: "43.8% said better taste would encourage them to buy more often.",
  },
  {
    title: "Health-Focused Marketing",
    body: "56.3% see Coca-Cola Zero Sugar as healthier than regular soft drinks.",
  },
  {
    title: "Larger Bottle Size or Value Packs",
    body: "31.3% selected larger bottle size.",
  },
  {
    title: "Maintain Brand Loyalty",
    body: "Most respondents rated their Coca-Cola brand loyalty between 3 and 5.",
  },
];

export const videos: VideoItem[] = [
  {
    id: "video-1",
    title: "Video 1 — Project Overview & Findings",
    description:
      "An overview of the study, survey method, and the key findings on consumer demand and price sensitivity for Coca-Cola Zero Sugar.",
    embedUrl: "", // paste a YouTube embed URL later, e.g. https://www.youtube.com/embed/VIDEO_ID
  },
  {
    id: "video-2",
    title: "Video 2 — Microeconomic Analysis & Recommendations",
    description:
      "A deeper look at the microeconomic concepts (elasticity, oligopoly, brand loyalty) and the recommendations drawn from the survey results.",
    embedUrl: "", // paste a YouTube embed URL later, e.g. https://www.youtube.com/embed/VIDEO_ID
  },
];

// Google Form result screenshots (one per survey question), used as primary
// evidence. Drop additional files into /public/evidence and add them here.
export const evidence: EvidenceItem[] = [
  { src: "/evidence/form-q1.png", caption: "Q1 — What is your age group?" },
  { src: "/evidence/form-q2.png", caption: "Q2 — What is your current status?" },
  { src: "/evidence/form-q3.png", caption: "Q3 — How often do you drink soft drinks?" },
  { src: "/evidence/form-q4.png", caption: "Q4 — Have you heard of Coca-Cola Zero Sugar before?" },
  { src: "/evidence/form-q5.png", caption: "Q5 — Have you tried Coca-Cola Zero Sugar before?" },
  { src: "/evidence/form-q6.png", caption: "Q6 — How often do you buy Coca-Cola Zero Sugar?" },
  { src: "/evidence/form-q7.png", caption: "Q7 — Main reason you would buy Coca-Cola Zero Sugar?" },
  { src: "/evidence/form-q8.png", caption: "Q8 — Which factor affects your buying decision the most?" },
  { src: "/evidence/form-q9.png", caption: "Q9 — Reasonable price for one can of Coca-Cola Zero Sugar?" },
  { src: "/evidence/form-q10.png", caption: "Q10 — Would you still buy if the price rises by RM0.50?" },
  { src: "/evidence/form-q11.png", caption: "Q11 — What would you do if the price rises by RM1.00?" },
  { src: "/evidence/form-q12.png", caption: "Q12 — Closest substitute to Coca-Cola Zero Sugar?" },
  { src: "/evidence/form-q13.png", caption: "Q13 — Would you switch if Pepsi Max were cheaper?" },
  { src: "/evidence/form-q14.png", caption: "Q14 — Same price: which one would you choose?" },
  { src: "/evidence/form-q15.png", caption: "Q15 — How loyal are you to Coca-Cola as a brand?" },
  { src: "/evidence/form-q16.png", caption: "Q16 — What would make you buy it more often?" },
  { src: "/evidence/form-q17.png", caption: "Q17 — Is it a healthier choice than regular soft drinks?" },
];

export const projectOverview =
  "This project studies Coca-Cola Zero Sugar using microeconomic concepts such as demand, supply, price elasticity of demand, cross-price elasticity, oligopoly competition, brand loyalty, and consumer behaviour.";

// APA 7th edition. Each entry renders with a hanging indent.
export const references: string[] = [
  "Auer, J., & Papies, D. (2019). Cross-price elasticities and their determinants: A meta-analysis and new empirical generalizations. Journal of the Academy of Marketing Science, 48(3), 584–605. https://doi.org/10.1007/s11747-019-00642-0",
  "Darlington Arinze, E., Uchechukwu, A., Marshall, A., Smith, A., Hicks, J., Allen, R., & Samuelson, P. (2024). The role of elasticity in shaping business strategy and economic policy. [Publisher/journal missing]. https://smartie.kiu.ac.ug/public/assets/publications/42e0c8abbed7e08f32ade4b0c291bcabc7433a1f.pdf",
  "Einav, L., & Levin, J. (2010). Empirical industrial organization: A progress report. Journal of Economic Perspectives, 24(2), 145–162. https://doi.org/10.1257/jep.24.2.145",
  "Knežević, A. (2021). The case study of the Coca-Cola Company [Document]. University of Zagreb Institutional Repository. https://www.bib.irb.hr:8443/1258564/",
  "Mozaffarian, D., Angell, S. Y., Lang, T., & Rivera, J. A. (2018). Role of government policy in nutrition—barriers to and opportunities for healthier eating. BMJ, 361, Article k2426. https://doi.org/10.1136/bmj.k2426",
  "Panzavolta, T. (2024). International partnership: Charles Philip Shanghai and the Coca-Cola Company, the new product development [Master's thesis, Ca' Foscari University of Venice]. http://hdl.handle.net/20.500.14247/19324",
  "Spiller, S. A. (2011). Opportunity cost consideration. Journal of Consumer Research, 38(4), 595–610. https://doi.org/10.1086/660045",
  "Tanwar, R. (2013). Porter's generic competitive strategies. [Journal name missing], 15(1), 11–17.",
  "Wen Hui Bo. (2025). Optimization of new media integrated marketing path for fast-moving consumer goods: Deconstruction based on Coca-Cola's summer campaign. Global Media and Social Sciences Research Journal, 6(1), 303–309. https://doi.org/10.71465/gmssrj101",
];
