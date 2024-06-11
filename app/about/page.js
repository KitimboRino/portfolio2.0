import AboutHeroSection from "../components/AboutHero"
import WorkExperienceCard from "../components/Work"
import SkillsCard from "../components/Skills"
import AchievementsCard from "../components/Achievements"
import SetupCard from "../components/Setup"

export const metadata = {
  title: 'About page',
  description: 'About me',
}
export default function About() {
  return (
    <>
      <AboutHeroSection/>
      <WorkExperienceCard/>
      <SkillsCard/>
      <AchievementsCard/>
      <SetupCard/>
    </>
  )
}