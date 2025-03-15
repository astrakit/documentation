import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', '7c6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a0c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'dec'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'de5'),
            routes: [
              {
                path: '/docs/account/deletion',
                component: ComponentCreator('/docs/account/deletion', '0d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/account/information',
                component: ComponentCreator('/docs/account/information', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/chats',
                component: ComponentCreator('/docs/category/chats', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/groups-chats',
                component: ComponentCreator('/docs/category/groups-chats', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/issues',
                component: ComponentCreator('/docs/category/issues', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/legal-matters',
                component: ComponentCreator('/docs/category/legal-matters', '1ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/places',
                component: ComponentCreator('/docs/category/places', 'e05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/private-chats',
                component: ComponentCreator('/docs/category/private-chats', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/security',
                component: ComponentCreator('/docs/category/security', 'f9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/your-account',
                component: ComponentCreator('/docs/category/your-account', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chats/group-chats/information',
                component: ComponentCreator('/docs/chats/group-chats/information', '255'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chats/places-chats/information',
                component: ComponentCreator('/docs/chats/places-chats/information', '49f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chats/private-chats/information',
                component: ComponentCreator('/docs/chats/private-chats/information', '0bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '524'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/issues/err001',
                component: ComponentCreator('/docs/issues/err001', '79b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/issues/err002',
                component: ComponentCreator('/docs/issues/err002', '7ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/issues/err003',
                component: ComponentCreator('/docs/issues/err003', '533'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/privacy',
                component: ComponentCreator('/docs/legal/privacy', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/securityrep',
                component: ComponentCreator('/docs/legal/securityrep', '0f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/tos',
                component: ComponentCreator('/docs/legal/tos', 'c29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/security/information',
                component: ComponentCreator('/docs/security/information', '6c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/security/report',
                component: ComponentCreator('/docs/security/report', 'd4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
