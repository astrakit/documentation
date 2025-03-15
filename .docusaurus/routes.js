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
    component: ComponentCreator('/docs', 'bce'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '57f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5b6'),
            routes: [
              {
                path: '/docs/category/chats---groups',
                component: ComponentCreator('/docs/category/chats---groups', 'e54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/chats---places',
                component: ComponentCreator('/docs/category/chats---places', '4d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/chats---private',
                component: ComponentCreator('/docs/category/chats---private', '77b'),
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
                path: '/docs/group-chats/information',
                component: ComponentCreator('/docs/group-chats/information', '83b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/places-chats/information',
                component: ComponentCreator('/docs/places-chats/information', '4f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/private-chats/information',
                component: ComponentCreator('/docs/private-chats/information', '4be'),
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
