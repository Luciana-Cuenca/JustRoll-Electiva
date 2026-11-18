export interface ImageInfo {
  name: string;
  image: string;
}
export interface Trait {
  name: string;
  icon: string | null;
  count?: number;
  level?: string;
}
export interface Champion {
  id: string;
  name: string;
  cost: number;
  image: string;
  traits: Trait[];
}
export interface Item extends ImageInfo {
  id: string;
}
export interface BoardPosition {
  championId: string;
  row: number;
  col: number;
  items: string[];
}
export interface BoardUnit extends Champion, BoardPosition {}
export interface ChampionRole {
  championId: string;
  role: string;
  items: string[];
  note?: string;
}
export interface Composition {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  imagePosition?: string;
  traits: string[];
  gameMode: string;
  cost?: string;
  difficulty: string;
  difficultyLevel: string;
  color: string;
  icon: string;
  tier: string;
  longDescription?: string;
  augments?: ImageInfo[];
  keyEmblems?: (ImageInfo & { role: string })[];
  finalChampions?: string[];
  startingChampions?: string[];
  recommendedItems?: ImageInfo[];
  activeTraits?: Trait[];
  championRoles?: ChampionRole[];
  strategySteps?: string[];
  recommendedUpgrades?: string[];
  tip?: string;
  board?: BoardPosition[];
  requirement?: string;
}
export interface Tier {
  id: string;
  name: string;
  description: string;
}
export interface GlossaryEntry {
  term: string;
  definition: string;
}
export type ContentBlock =
  | { type: 'heading' | 'text' | 'keyTip' | 'commonMistake'; text: string }
  | { type: 'list' | 'steps'; title?: string; items: string[] }
  | { type: 'glossary'; title?: string; items: GlossaryEntry[] }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'table'; headers?: string[]; rows: string[][] };
export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}
export interface Tutorial {
  id: number;
  slug: string;
  level: string;
  orderInLevel: number;
  title: string;
  description: string;
  readingTime: number;
  color: string;
  content: ContentBlock[];
  quiz: QuizQuestion[];
  image?: string;
}
export interface TutorialLevel {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  icon: string;
}
export interface NewsSet {
  id: string;
  number: number;
  name: string;
  theme: string;
  status: string;
  releaseDate: string;
  summary: string;
  image: string;
}
export interface NewsArticle {
  id: string;
  setId: string;
  category: string;
  featured: boolean;
  title: string;
  summary: string;
  date: string;
  image: string;
  source: string | null;
  content: ContentBlock[];
}
