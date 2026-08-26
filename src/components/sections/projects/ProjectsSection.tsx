import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/portfolio";

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-6 space-y-8 scroll-mt-24">
      <h2 className="italic text-4xl font-heading font-semibold">
        <span aria-hidden="true" className="text-accent font-extrabold">
          |
        </span>
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
