import React from 'react';
import type { ReactNode } from 'react';
import UniversalCard, { UniversalCardProps } from './UniversalCard';

interface CardGridProps {
  children?: ReactNode;
  items?: UniversalCardProps[];
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ 
  children, 
  items = [],
  columns = 3
}: CardGridProps): JSX.Element {
  const columnClass = `col col--${12/columns}`;
  
  return (
    <div className="card-grid">
      {children}
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className={`${columnClass} margin-bottom--lg`}>
            <UniversalCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}