import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
