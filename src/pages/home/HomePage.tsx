import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import LanguagesSection from './components/LanguagesSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <LanguagesSection />
      <ContactSection />
    </>
  );
}
