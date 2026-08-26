export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  techStack: { label: string; icon: React.ElementType | null }[];
  liveDemo: string;
  sourceCode: string;
};

export type ProjectsProps = {
  project: Project;
};
