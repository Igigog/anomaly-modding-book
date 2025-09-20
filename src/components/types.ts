import type { ReactNode } from 'react';

export interface UniversalCardProps {
  title: string;
  content: string | ReactNode;
  image?: string;
  link: string;
  linkText?: string;
  internal?: boolean;
  className?: string;
}