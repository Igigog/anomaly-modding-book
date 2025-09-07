import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Authors from '@site/src/components/authors';

interface MDXComponentsType {
  [key: string]: React.ComponentType<any>;
}

export default {
  ...MDXComponents,
  Authors,
} as MDXComponentsType;