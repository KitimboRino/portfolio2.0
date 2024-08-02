// pages/index.js
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TitleChangeComponent from "./utils/meta";

export const metadata = {
  title: 'Home page',
  description: 'My home page',
};

export default function Home() {
  return (
    <>
      <TitleChangeComponent />
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
}
