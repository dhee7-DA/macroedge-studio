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
  | "histogram";

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
  trend?: "up" | "down" | "stable";
  benchmark?: string;
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
  levelBadge?: string;
  topicNum?: string;
  logoUrl?: string;
  required?: boolean;
}

export interface CarouselData {
  topic: string;
  handle: string;
  slides: SlideData[];
  themeIndex: number;
}
