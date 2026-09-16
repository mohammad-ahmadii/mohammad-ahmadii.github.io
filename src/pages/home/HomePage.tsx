import { Suspense, lazy } from 'react';

import Loading from '../../shared/ui/Loading';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

/**
 * Everything below the fold is code-split: the hero and the experience
 * timeline ship in the initial chunk, the rest arrives on demand.
 */
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const LanguagesSection = lazy(() => import('./components/LanguagesSection'));

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />

      <Suspense fallback={<Loading />}>
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <LanguagesSection />
      </Suspense>

      <ContactSection />
    </>
  );
}
