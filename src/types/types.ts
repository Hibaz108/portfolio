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

export type Skill = {
  id: number;
  title: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};
