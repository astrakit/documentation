// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astrakit',
  tagline: 'Astrakit is a free and open-source chat app designed for seamless communication.',
  favicon: 'img/astrakit.png',

  // Set the production url of your site here
  url: 'https://docs.astrakit.cc',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'astrakit', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/astrakit/documentation/tree/main/packages/create-docusaurus/templates/shared/',
            showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/astrakit/documentation/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true, // Allow users to switch themes
        respectPrefersColorScheme: false, // Ignore system preference
      },
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        style: 'dark',
        title: 'Astrakit',
        logo: {
          alt: 'Astrakit planet',
          src: 'img/astrakit.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/security/report',
            label: 'Security Report',
            position: 'left',
          },
          {
            href: 'https://astrakit.cc/donate',
            label: 'Donate',
            position: 'right',
          },
          {
            href: 'https://github.com/astrakit/documentation',
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
                label: 'Tutorial',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/astrakit',
              },
              {
                label: 'Mastodon (cat-space)',
                href: 'https://cat-space.net/@astrakit',
              },
              {
                label: 'Main website',
                href: 'https://astrakit.cc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Network status',
                href: 'https://status.astrakit.cc',
              },
              {
                label: 'GitHub - docs',
                href: 'https://github.com/astrakit/documentation',
              },
              {
                label: 'GitHub - website',
                href: 'https://github.com/astrakit/main-website',
              },
            ],
          },
          {
            title: 'Legal matters',
            items: [
              {
                label: 'Privacy Policy',
                href: '/docs/legal/privacy',
              },
              {
                label: 'Terms Of Service',
                href: '/docs/legal/tos',
              },
              {
                label: 'Security notice',
                href: '/docs/legal/securityrep',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Astrakit.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
export default config;
