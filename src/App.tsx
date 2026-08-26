import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

export default App;
