import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"

export const metadata = {
  title: 'Home page',
  description: 'My home page',
}
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  )
}
