import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import ProjectsSection from "./component/ProjectSection";
import Skills from "./component/SkillsSection";
import SkillsSection from "./component/SkillsSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}