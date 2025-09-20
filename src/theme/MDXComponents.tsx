import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Authors from '@site/src/components/authors';
import type { MDXComponentsType } from '../types';

export default {
  ...MDXComponents,
  Authors,
} as MDXComponentsType;