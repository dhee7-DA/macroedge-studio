export type SlideBackground = "light" | "dark";

export type SlideType =
  | "hero"
  | "concept"
  | "code"
  | "table"
  | "steps"
  | "reference"
  | "cta"
  | "dosdonts"
  | "pitfalls"
  | "problem"
  | "schema"
  | "histogram"
  | "kpi"
  | "bullbear"
  | "timeline"
  | "gauge"
  | "chart"
  | "waterfall"
  | "versus"
  | "memo";

export interface KPICard {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  subtext?: string;
  badge?: string;
}

export interface BullBearPoint {
  title: string;
  detail?: string;
}

export interface BullBearData {
  bullTitle?: string;
  bullPoints: BullBearPoint[];
  bearTitle?: string;
  bearPoints: BullBearPoint[];
}

export interface TimelineMilestone {
  period: string; // e.g. "Q1 2026", "Phase 1"
  title: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface ValuationGaugeData {
  metric: string; // e.g. "EV / FCF", "P/E Ratio"
  currentValue: string; // e.g. "28.5x"
  bandMin: string; // e.g. "12x (Historical Trough)"
  bandMax: string; // e.g. "45x (Cycle Peak)"
  zone: "cheap" | "fair" | "stretched" | "euphoric";
  verdict: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  secondaryValue?: number;
}

export interface FinancialChartData {
  chartType: "area" | "line" | "spread" | "drawdown";
  metricName: string;
  currentValue: string;
  change?: string;
  isPositive?: boolean;
  subtext?: string;
  badge?: string;
  unit?: string;
  dataPoints: ChartDataPoint[];
  xAxisLabels?: string[];
  yAxisMin?: number;
  yAxisMax?: number;
  benchmarkName?: string;
}

export interface WaterfallStep {
  label: string;
  amount: string; // e.g. "$120B", "-$34B", "+$12B"
  type: "base" | "positive" | "negative" | "total";
  subtext?: string;
  percentage?: string;
}

export interface WaterfallData {
  title?: string;
  startingLabel: string;
  endingLabel: string;
  steps: WaterfallStep[];
  summaryInsight?: string;
}

export interface VersusEntity {
  name: string;
  ticker: string;
  badge?: string;
  highlight?: boolean;
}

export interface VersusMetric {
  label: string;
  valA: string;
  valB: string;
  advantage: "A" | "B" | "neutral";
  delta?: string;
}

export interface VersusData {
  entityA: VersusEntity;
  entityB: VersusEntity;
  metrics: VersusMetric[];
  verdict: string;
  verdictWinner?: "A" | "B" | "neutral";
}

export interface ConfidentialMemoData {
  securityStamp?: string; // e.g. "CONFIDENTIAL // COMMITTEE EYES ONLY"
  documentId?: string; // e.g. "MEMO-2026-ALPHA-09"
  sender: string; // e.g. "Macro Quantitative Risk Desk"
  targetEntity: string; // e.g. "Federal Reserve Liquidity Facility"
  date: string;
  keyFinding: string;
  redactedCount?: number;
  bulletPoints: string[];
  actionDirective: string;
}

export interface HistogramBar {
  label: string;
  tickerLogo: string;
  icon?: string;
  value: number;
  valueLabel: string;
  highlight?: boolean;
}

export interface HistogramData {
  bars: HistogramBar[];
  caption?: string;
  maxValue?: number;
}

export interface CodeLine {
  text: string;
  highlight?: boolean;
}

export interface TableRow {
  cells: string[];
  highlight?: boolean;
  italic?: boolean;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  icon: string;
  label: string;
  description: string;
}

export interface DosDontsItem {
  text: string;
  detail?: string;
}

export interface Pitfall {
  title: string;
  description: string;
  fix?: string;
}

export interface ProblemSlide {
  difficulty: "EASY" | "MEDIUM" | "HARD";
  question: string;
  hint?: string;
  solution: CodeLine[];
  result?: { headers: string[]; rows: TableRow[] };
}

export interface SchemaColumn {
  name: string;
  type?: string;
  isPK?: boolean;
  isFK?: boolean;
  ref?: string;
}

export interface SchemaCard {
  tableName: string;
  columns: SchemaColumn[];
}

export interface TopicSocialCopy {
  igCaption?: string;
  hashtags?: string[];
  xThread?: string[];
  linkedInPost?: string;
  contrarianHook?: string;
  painHook?: string;
  aspirationalHook?: string;
}

export interface TopicMetadata {
  id: string;
  title: string;
  category: "Macro" | "India" | "Crypto" | "Stock Teardown" | "Deep Tech" | "Fundamentals" | "Books";
  tags?: string[];
  social?: TopicSocialCopy;
}

export interface SlideData {
  type: SlideType;
  background: SlideBackground;
  tag: string;
  tagRight?: string;
  heading: string;
  headingAccent?: string;
  subheading?: string;
  body?: string;
  bullets?: string[];
  keywords?: string[];
  footnote?: string;
  code?: CodeLine[];
  codeLabel?: string;
  table?: {
    headers: string[];
    rows: TableRow[];
    caption?: string;
  };
  steps?: Step[];
  features?: FeatureItem[];
  insightBox?: string;
  ctaText?: string;
  nextTopic?: string;
  dos?: DosDontsItem[];
  donts?: DosDontsItem[];
  pitfalls?: Pitfall[];
  problem?: ProblemSlide;
  diagram?: string[];
  schemaCards?: SchemaCard[];
  histogram?: HistogramData;
  kpis?: KPICard[];
  bullBear?: BullBearData;
  timeline?: TimelineMilestone[];
  valuationGauge?: ValuationGaugeData;
  chart?: FinancialChartData;
  waterfall?: WaterfallData;
  versus?: VersusData;
  memo?: ConfidentialMemoData;
  levelBadge?: string;
  topicNum?: string;
  required?: boolean;
}

export interface CarouselData {
  topic: string;
  handle: string;
  slides: SlideData[];
  themeIndex: number;
  metadata?: TopicMetadata;
}
