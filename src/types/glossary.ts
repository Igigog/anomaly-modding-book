export interface GlossaryData {
  categories: string[];
  terms: {
    id: string;
    term: string;
    definition: string;
    category: string;
    related: {
      id: string;
      term: string;
    }[];
  }[];
}
