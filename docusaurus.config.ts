import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Anomaly Modding Book',
  tagline: 'Introductory book for S.T.A.L.K.E.R. Anomaly modding',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/anomaly-modding-book/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TheParaziT/anomaly-modding-book/',
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Just a blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TheParaziT/anomaly-modding-book/',
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Anomaly Modding Book',
      logo: {
        alt: 'Anomaly Modding Book Site Logo',
        src: 'img/logo.svg',
      },
      items: [
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
              to: '/docs/intro',
            },
            {
              label: 'Tutorials',
              to: '/docs/intro',
            },
            {
              label: 'References',
              to: '/docs/intro',
            },
            {
              label: 'Modding Tools',
              to: '/docs/intro',
            },
            {
              label: 'Resources',
              to: '/docs/intro',
            },
            {
              label: 'Engine API',
              to: '/docs/intro',
            },
            {
              label: 'Scripting API',
              to: '/docs/intro',
            },
            {
              label: 'For Contrubutors',
              to: '/docs/intro',
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
