import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
