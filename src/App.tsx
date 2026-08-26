import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
