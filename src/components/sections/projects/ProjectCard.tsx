import type { ProjectsProps } from "../../../types/types";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SquareArrowOutUpRight } from "lucide-react";

const ProjectCard = ({ project }: ProjectsProps) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ">
      <div className="h-64">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover object-top"
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>

      <div className="flex flex-1 flex-col gap-y-4 p-6">
        <h3 className="text-xl font-heading font-semibold">{project.title}</h3>
        <div className="min-h-20 flex flex-wrap content-start gap-1.5 ">
          {project.techStack.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="w-fit flex items-center gap-1 p-2 text-xs text-muted rounded-xl bg-accent/35"
            >
              {Icon && <Icon size={15} color="default" aria-hidden="true" />}
              {label}
            </span>
          ))}
        </div>
        <p className="min-h-24 text-foreground/65">{project.description}</p>

        <div className="flex gap-x-3 mt-auto uppercase text-xs ">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 flex items-center justify-center gap-2 rounded-4xl
             bg-foreground text-background font-medium 
             hover:bg-accent hover:text-foreground transition-colors duration-500"
          >
            <SquareArrowOutUpRight size={15} aria-hidden="true" /> Live Demo
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 flex items-center justify-center gap-2 rounded-4xl border
            border-foreground/20 text-foreground/70 font-medium
             hover:border-foreground transition-colors duration-500"
          >
            <SiGithub size={16} color="default" aria-hidden="true" /> Source
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
