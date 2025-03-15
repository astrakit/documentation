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
    component: ComponentCreator('/docs', 'a34'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e94'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '105'),
            routes: [
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
                path: '/docs/chats/group-chats/information',
                component: ComponentCreator('/docs/chats/group-chats/information', '890'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chats/places-chats/information',
                component: ComponentCreator('/docs/chats/places-chats/information', '63c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chats/private-chats/information',
                component: ComponentCreator('/docs/chats/private-chats/information', 'b9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/issues/err001',
                component: ComponentCreator('/docs/issues/err001', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/issues/err002',
                component: ComponentCreator('/docs/issues/err002', 'a47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/issues/err003',
                component: ComponentCreator('/docs/issues/err003', 'c55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/privacy',
                component: ComponentCreator('/docs/legal/privacy', 'd36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/securityrep',
                component: ComponentCreator('/docs/legal/securityrep', '2c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/tos',
                component: ComponentCreator('/docs/legal/tos', 'bb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/security/information',
                component: ComponentCreator('/docs/security/information', '8a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/security/report',
                component: ComponentCreator('/docs/security/report', '384'),
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
