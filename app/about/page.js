import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import RootLayout from "../layout"

export const metadata = {
  title: 'About page',
  description: 'About me',
}
export default function About() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}