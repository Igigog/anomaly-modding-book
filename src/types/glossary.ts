export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category?: string;
  related?: RelatedTerm[];
}

export interface RelatedTerm {
  id: string;
  term: string;
}

export interface GlossaryData {
  terms: GlossaryTerm[];
  categories: string[];
}