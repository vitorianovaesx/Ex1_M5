import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Ex1_M5/__docusaurus/debug',
    component: ComponentCreator('/Ex1_M5/__docusaurus/debug', 'd43'),
    exact: true
  },
  {
    path: '/Ex1_M5/__docusaurus/debug/config',
    component: ComponentCreator('/Ex1_M5/__docusaurus/debug/config', 'a1b'),
    exact: true
  },
  {
    path: '/Ex1_M5/__docusaurus/debug/content',
    component: ComponentCreator('/Ex1_M5/__docusaurus/debug/content', '606'),
    exact: true
  },
  {
    path: '/Ex1_M5/__docusaurus/debug/globalData',
    component: ComponentCreator('/Ex1_M5/__docusaurus/debug/globalData', 'e2e'),
    exact: true
  },
  {
    path: '/Ex1_M5/__docusaurus/debug/metadata',
    component: ComponentCreator('/Ex1_M5/__docusaurus/debug/metadata', 'd84'),
    exact: true
  },
  {
    path: '/Ex1_M5/__docusaurus/debug/registry',
    component: ComponentCreator('/Ex1_M5/__docusaurus/debug/registry', '131'),
    exact: true
  },
  {
    path: '/Ex1_M5/__docusaurus/debug/routes',
    component: ComponentCreator('/Ex1_M5/__docusaurus/debug/routes', '915'),
    exact: true
  },
  {
    path: '/Ex1_M5/markdown-page',
    component: ComponentCreator('/Ex1_M5/markdown-page', 'da6'),
    exact: true
  },
  {
    path: '/Ex1_M5/',
    component: ComponentCreator('/Ex1_M5/', '310'),
    routes: [
      {
        path: '/Ex1_M5/',
        component: ComponentCreator('/Ex1_M5/', '4f1'),
        routes: [
          {
            path: '/Ex1_M5/',
            component: ComponentCreator('/Ex1_M5/', '428'),
            routes: [
              {
                path: '/Ex1_M5/',
                component: ComponentCreator('/Ex1_M5/', '30a'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
