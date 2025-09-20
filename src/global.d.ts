declare module '*.yml' {
  const content: Record<string, AuthorData>;
  export default content;
}
interface AuthorSocials {
  github?: string;
  twitter?: string;
  linkedin?: string;
  x?: string;
  stackoverflow?: string;
  email?: string;
  website?: string;
  vk?: string;
  telegram?: string;
  moddb?: string;
  discord?: string;
  custom?: {
    label: string;
    url: string;
    icon: string;
  };
}

interface AuthorData {
  name: string;
  title: string;
  url?: string;
  image_url: string;
  socials?: AuthorSocials;
  description?: string;
}

interface Author extends AuthorData {
  key: string;
}
