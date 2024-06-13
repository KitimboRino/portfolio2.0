import AboutHeroSection from "../components/AboutHero"
import WorkExperienceCard from "../components/Work"
import SkillsCard from "../components/Skills"
import AchievementsCard from "../components/Achievements"
import SetupCard from "../components/Setup"
import EducationCard from "../components/Education"
import PhotoCard from "../components/Photography"
import PassionCard from "../components/Passion"

export const metadata = {
  title: 'About page',
  description: 'About me',
}
export default function About() {
  return (
    <>
      <AboutHeroSection />
      <WorkExperienceCard />
      <SkillsCard />
      <AchievementsCard />
      <SetupCard />
      <EducationCard />
      <PhotoCard />
      <PassionCard />
    </>
  )
}