export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  age: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  about: string;
}
export interface Language {
  name: string;
  level: string;
}
export interface EducationItem {
  degree: string;
  school: string;
  logo: string | null;
  link: string | null;
  date: string;
  location: string;
}
export interface SkillGroup {
  label: string;
  skills: string[];
}

export const profile: Profile = {
  name: "Mohammad Ahmadi",
  title: "Front-End Developer",
  tagline: "3 years of experience",
  location: "Tehran, Iran",
  age: "28",
  phone: "+98 910 554 8773",
  email: "sm.ahmadi77@yahoo.com",
  linkedin: "in/smahmadi77",
  linkedinUrl: "https://linkedin.com/in/smahmadi77",
  about:
    "As a Frontend Developer , I specialize in building dynamic, responsive web applications with React.js, Next.js, TypeScript and CSS freamworks. My work focuses on designing and implementing user-friendly interfaces, develop large-scale apps based on design patterns and ensuring cross-browser compatibility. Collaborating within agile teams, I contribute to creating seamless digital experiences while maintaining high code quality and performance standards.",
};

export const languages: Language[] = [
  { name: "Farsi", level: "Native" },
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Intermediate" },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor's degree, Software Engineering",
    school: "The National University of Skills ( NUS )",
    logo: "/assets/images/uni-logo.webp",
    link: "https://en.wikipedia.org/wiki/National_University_of_Skill",
    date: "2018 — 2020",
    location: "Tabriz",
  },
  {
    degree: "Associate degree, Software Engineering",
    school: "The National University of Skills ( NUS )",
    logo: "/assets/images/uni-logo.webp",
    link: "https://en.wikipedia.org/wiki/National_University_of_Skill",
    date: "2016 — 2020",
    location: "Zanjan",
  },
  {
    degree: "Diploma of Education, Digital Design",
    school: "Dr. Hesabi High School",
    logo: null,
    link: null,
    date: "09/2014 — 06/2016",
    location: "Zanjan",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Front-End Core",
    skills: [
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "HTML5 / JSX",
      "CSS3",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    label: "State & Data Fetching",
    skills: [
      "Redux",
      "Zustand",
      "Context API",
      "React Query",
      "Axios",
      "RESTful APIs",
    ],
  },
  {
    label: "Styling & UI",
    skills: ["Tailwind CSS", "Sass", "Less", "Ant Design", "Bootstrap"],
  },
  {
    label: "Test & Quality",
    skills: [
      "Jest",
      "Vitest",
      "Storybook",
      "React Testing Library",
      "ESLint",
      "Prettier",
    ],
  },
  {
    label: "Build & Deployment",
    skills: [
      "Vite",
      "Turbopack",
      "Webpack",
      "Git",
      "Docker",
      "GitLab",
      "Nginx",
    ],
  },
  {
    label: "Team Collaboration",
    skills: [
      "Git Flow",
      "Agile",
      "Jira",
      "Figma",
      "Postman",
      "Swagger",
      "KB Docs",
    ],
  },
  {
    label: "Hands-on",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL Server", "Linux"],
  },
];
