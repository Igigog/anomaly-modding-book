import React from 'react';
import Link from '@docusaurus/Link';

interface QuickAction {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

interface QuickActionsProps {
  actions: QuickAction[];
  title?: string;
}

export default function QuickActions({ 
  actions, 
  title = "Quick Actions" 
}: QuickActionsProps): React.JSX.Element {
  return (
    <div className="quick-actions">
      <h4 className="quick-actions__title">{title}</h4>
      <div className="quick-actions__buttons">
        {actions.map((action, index) => (
          <Link
            key={index}
            className="quick-actions__button"
            to={action.href}
            href={action.external ? action.href : undefined}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
          >
            {action.icon && <span className="quick-actions__icon">{action.icon}</span>}
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
