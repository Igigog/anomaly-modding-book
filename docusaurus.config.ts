import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Anomaly Modding Book',
  tagline: 'Introductory book for S.T.A.L.K.E.R. Anomaly modding',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },
  plugins: [
    'docusaurus-plugin-image-zoom',
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  url: 'https://anomaly-modding-book.netlify.app',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/TheParaziT/anomaly-modding-book/blob/main/',
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Just a blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/TheParaziT/anomaly-modding-book/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
    },
    navbar: {
      title: 'Anomaly Modding Book',
      logo: {
        alt: 'Anomaly Modding Book Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingstartedSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'glossarySidebar',
          position: 'left',
          label: 'Glossary',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'referencesSidebar',
          position: 'left',
          label: 'References'
        },
        {
          type: 'docSidebar',
          sidebarId: 'moddingtoolsSidebar',
          position: 'left',
          label: 'Modding Tools'
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources'
        },
        {
          type: 'docSidebar',
          sidebarId: 'engineapiSidebar',
          position: 'left',
          label: 'Engine API'
        },
        {
          type: 'docSidebar',
          sidebarId: 'scriptingapiSidebar',
          position: 'left',
          label: 'Scripting API'
        },
        {
          type: 'docSidebar',
          sidebarId: 'forcontributorsSidebar',
          position: 'left',
          label: 'For Contributors'
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Igigog/anomaly-modding-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Glossary',
              to: '/docs/glossary/',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorials/',
            },
            {
              label: 'References',
              to: '/docs/references/',
            },
            {
              label: 'Modding Tools',
              to: '/docs/modding-tools/',
            },
            {
              label: 'Resources',
              to: '/docs/resources/',
            },
            {
              label: 'Engine API',
              to: '/docs/engineapi/',
            },
            {
              label: 'Scripting API',
              to: '/docs/scriptingapi/',
            },
            {
              label: 'For Contrubutors',
              to: '/docs/forcontributors/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/8Pu2ekQYg3',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TheParaziT/anomaly-modding-book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anomaly Modding Book. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['lua', 'ini', 'bash'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
