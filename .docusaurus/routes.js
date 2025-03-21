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
    component: ComponentCreator('/docs', 'a84'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bf3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '903'),
            routes: [
              {
                path: '/docs/api/account/login',
                component: ComponentCreator('/docs/api/account/login', 'ba6'),
                exact: true,
                sidebar: "apiDocSidebar"
              },
              {
                path: '/docs/api/introduction',
                component: ComponentCreator('/docs/api/introduction', '6c8'),
                exact: true,
                sidebar: "apiDocSidebar"
              },
              {
                path: '/docs/category/account',
                component: ComponentCreator('/docs/category/account', 'acf'),
                exact: true,
                sidebar: "apiDocSidebar"
              },
              {
                path: '/docs/category/chats',
                component: ComponentCreator('/docs/category/chats', '18e'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/category/groups-chats',
                component: ComponentCreator('/docs/category/groups-chats', '624'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/category/issues',
                component: ComponentCreator('/docs/category/issues', '681'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/category/places',
                component: ComponentCreator('/docs/category/places', '722'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/category/private-chats',
                component: ComponentCreator('/docs/category/private-chats', '4cc'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/category/security',
                component: ComponentCreator('/docs/category/security', 'b64'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/category/showcase',
                component: ComponentCreator('/docs/category/showcase', '209'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/category/your-account',
                component: ComponentCreator('/docs/category/your-account', 'f11'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/policies/gdpr',
                component: ComponentCreator('/docs/policies/gdpr', '48b'),
                exact: true,
                sidebar: "policyDocSidebar"
              },
              {
                path: '/docs/policies/introduction',
                component: ComponentCreator('/docs/policies/introduction', '6e0'),
                exact: true,
                sidebar: "policyDocSidebar"
              },
              {
                path: '/docs/policies/privacy',
                component: ComponentCreator('/docs/policies/privacy', 'fde'),
                exact: true,
                sidebar: "policyDocSidebar"
              },
              {
                path: '/docs/policies/securityrep',
                component: ComponentCreator('/docs/policies/securityrep', '4f0'),
                exact: true,
                sidebar: "policyDocSidebar"
              },
              {
                path: '/docs/policies/tos',
                component: ComponentCreator('/docs/policies/tos', '509'),
                exact: true,
                sidebar: "policyDocSidebar"
              },
              {
                path: '/docs/user/account/deletion',
                component: ComponentCreator('/docs/user/account/deletion', '2fb'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/account/information',
                component: ComponentCreator('/docs/user/account/information', 'c27'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/chats/group-chats/information',
                component: ComponentCreator('/docs/user/chats/group-chats/information', '70e'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/chats/places-chats/information',
                component: ComponentCreator('/docs/user/chats/places-chats/information', 'a06'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/chats/private-chats/information',
                component: ComponentCreator('/docs/user/chats/private-chats/information', 'cf4'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/getting-started',
                component: ComponentCreator('/docs/user/getting-started', '986'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/issues/err001',
                component: ComponentCreator('/docs/user/issues/err001', '96f'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/issues/err002',
                component: ComponentCreator('/docs/user/issues/err002', 'd55'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/issues/err003',
                component: ComponentCreator('/docs/user/issues/err003', 'c6e'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/issues/err004',
                component: ComponentCreator('/docs/user/issues/err004', '5c8'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/security/information',
                component: ComponentCreator('/docs/user/security/information', '6ab'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/security/report',
                component: ComponentCreator('/docs/user/security/report', '3f8'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/showcase/gifs',
                component: ComponentCreator('/docs/user/showcase/gifs', 'ce0'),
                exact: true,
                sidebar: "userDocSidebar"
              },
              {
                path: '/docs/user/showcase/images',
                component: ComponentCreator('/docs/user/showcase/images', '5d3'),
                exact: true,
                sidebar: "userDocSidebar"
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
