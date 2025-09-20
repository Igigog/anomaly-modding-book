import type { AuthorData } from './types';

declare module '*.yml' {
  const content: Record<string, AuthorData>;
  export default content;
}
