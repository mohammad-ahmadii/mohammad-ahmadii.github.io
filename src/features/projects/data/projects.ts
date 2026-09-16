import { asset } from '../../../shared/lib/asset';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'graph-kiosk',
    name: 'Graph Software Kiosk System',
    company: 'Graph Inc.',
    role: 'Front-End Developer',
    date: 'from 2024 to 2026 · 2 yrs 5 months',
    location: 'Tehran',
    stack: ['React/Vite', 'Redux toolkit', 'OAuth2/OIDC', 'RBAC', 'vitest/jest', 'TS', 'axios'],
    description:
      'The Graph Software Kiosk System is designed to hosting files and facilitate secure file transfers between public networks (internet) and private/isolated networks, and vice versa. The system is built on a cloud-based infrastructure, deployed as an on-premise private cloud within the customer organization. ',
    points: [
      'Resolved all TypeScript warnings and errors across the entire application.',
      'Zeroed out the "any" type in TypeScript and Set type on all functions, components and etc.',
      'Implemented Unit and Integration tests with Vitest, achieving approximately 40% test coverage across the application.',
      'Addressed and resolved all QA-reported test issues in Jira throughout three alpha release phases (Iterations 6–9).',
      'Implemented Authorizing logic on pages, actions and providing different access to diff users based on RBAC tree roles.',
      'Implemented Authentication logic OAuth2/OIDC.',
      'implemented Share and Team pages and Refactored Personal page.',
      'Implemented notification and upload files/folders.',
      'Eliminate ways in which cyberattacks could occur like XSS.',
    ],
    view: {
      address: 'https://graph-inc.ir/products/fam/graph-fam',
      imageUrl: asset('assets/images/vault.png'),
      title:
        "it's not available, because it's a internal app of company, you can see it in graph-inc.ir products diagram as 'kiosk' ",
    },
  },
  {
    id: 'graph-inc-site',
    name: 'graph-inc.ir',
    company: 'Graph Inc.',
    role: 'Front-End Developer',
    date: '2024 · 3 months',
    location: 'Tehran',
    stack: ['Next.js', 'Redux'],
    description: 'Official website of Graph-inc company.',
    points: [
      'Migrated from React to Next.js 14',
      'Add Blog and Job opportunity pages.',
      'Add lazy-loading on parts of app that are not in hero section to dcrease first loading time ',
      'Improve SEO rank by semantic elements and etc.',
      'Refactor Demo form and use react-hook-form, zod packages.',
    ],
    view: {
      address: 'https://graph-inc.ir',
      imageUrl: asset('assets/images/graph-inc.ir-screenshot.png'),
      title: 'view',
    },
  },
  {
    id: 'azimpakhsh',
    name: 'azimpakhsh.ir',
    company: 'Memaran Dade',
    role: 'Internship / Junior Front-End Developer',
    date: '2020',
    location: 'Tabriz',
    stack: ['React', 'Responsive Design'],
    description: 'Shopping website',
    points: [
      'Developed and launched by React.js.',
      'Converted UI/UX designs into responsive web pages and pixel-perfect',
    ],
    view: {
      address: null,
      imageUrl: '',
      title: 'Dismissed by company',
    },
  },
  {
    id: 'mohammad-ahmadii.github.io',
    name: 'mohammad-ahmadii.github.io',
    company: 'myself',
    role: 'Front-End Developer',
    date: '2026',
    location: 'Tehran',
    stack: ['React/vite', 'github', 'tailwind'],
    description: 'it is my personal website to show my info and portfolio and etc.',
    points: [
      'Developed by React.js/vite .',
      'Helped by claude and hermes agent to develope.',
      'Deploy and hosted by github pages.',
      'Used FSD Arch in folder struct.',
    ],
    view: {
      address: 'https://mohammad-ahmadii.github.io/',
      src_address: 'https://github.com/mohammad-ahmadii/mohammad-ahmadii.github.io',
      imageUrl: '',
      title: 'view',
    },
  },
];
