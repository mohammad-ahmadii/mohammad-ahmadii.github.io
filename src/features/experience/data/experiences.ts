import { projects } from '@/features/projects';
import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'graph-inc',
    company: 'Graph Inc.',
    company_logo: '/assets/images/graph_inc_logo.png',
    companyUrl: 'https://graph-inc.ir',
    date: '07/2023 — 04/2026',
    duration: '2.8 yrs',
    location: 'Tehran, Iran',
    blurb:
      'ICT security company focused on information & communication security and security software development.',
    roles: [
      {
        role: 'Front-End Developer',
        duration: '2.8 yrs',
        points: [
          'Increased unit and integration test coverage, using Vitest and React Testing Library; eliminated all any types in TypeScript.',
          'Implemented OAuth2/OIDC authentication and role-based access control (RBAC) across pages and actions.',
          'Elevated DX with auto-import components and Vite — 10x faster HMR',
          'Refactored and optimized app modules through dependency upgrades and new design patterns',
          'Resolved tech-lead review feedbacks and comments on merge requests in GitLab',
          'Implemented UI to the company design system "GraphX" and its design tokens',
          'Addressed and resolved all QA-reported test issues in Jira throughout the alpha release phase',
          'Addressed and resolved all PO, Support-team (reported usually from customer) and Designer issues in Jira throughout the beta release phase',
          'Supported teammates on technical issues',
        ],
      },
    ],
    projects: projects.filter((item) => item.company === 'Graph Inc.'),
  },
  {
    id: 'memaran-dade',
    company: 'Memaran Dade',
    company_logo: '/assets/images/memaran_dadeh_logo.png',
    companyUrl: 'https://mdade.com',
    date: '06/2020 — 09/2020',
    duration: '4 mo',
    location: 'Tabriz, Iran',
    blurb: 'Designs and builds web and mobile software systems and solutions for businesses.',
    roles: [
      {
        role: 'Internship / Junior Front-End Developer',
        duration: '4 mo',
        points: [
          'Developed and launched a customer website using React.js, converting Adobe Illustrator designs into responsive and pixel perfect web pages',
          'Familiarity and learning about the software development and engineering process in the industry, how to work with other colleagues, and how to use platforms for interaction and collaboration with other organizational positions such as development staff',
        ],
      },
    ],
    projects: projects.filter((item) => item.company === 'Memaran Dade'),
  },
];
