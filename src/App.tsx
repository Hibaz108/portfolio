import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
