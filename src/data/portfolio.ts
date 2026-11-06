import type { NavItem, Project, Skill, SocialLink } from "../types/types";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiReactquery,
  SiReactrouter,
  SiShadcnui,
  SiNextdotjs,
  SiSupabase,
  SiReacthookform,
  SiZod,
} from "@icons-pack/react-simple-icons";

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Movira",
    image: "/movira-proj.webp",
    description:
      "A movie discovery website where users can explore trending, popular, and top-rated movies, search and filter by genre, view detailed movie information, and save movies to their favorites and watchlist.",
    techStack: [
      { label: "React", icon: SiReact },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "React Query", icon: SiReactquery },
      { label: "Zustand", icon: null },
      { label: "React Router", icon: SiReactrouter },
      { label: "shadcn/ui", icon: SiShadcnui },
    ],
    liveDemo: "https://movira-drab.vercel.app",
    sourceCode: "https://github.com/Hibaz108/Movira",
    imageWidth: 1200,
    imageHeight: 1816,
  },

  {
    id: 2,
    title: "Pink Delight",
    image: "/pink-delight.webp",
    description:
      "A simple bakery website where users can browse desserts by category, view product details, and manage their cart adjusting quantities, removing items, with subtotal and shipping calculated automatically.",
    techStack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "React", icon: SiReact },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Zustand", icon: null },
      { label: "shadcn/ui", icon: SiShadcnui },
    ],
    liveDemo: "https://pink-delight.vercel.app",
    sourceCode: "https://github.com/Hibaz108/Pink-delight",
    imageWidth: 1200,
    imageHeight: 738,
  },
  {
    id: 3,
    title: "My Agenda",
    image: "/my-agenda.webp",
    description:
      "A task management app that helps users organize their daily tasks, set priorities, and track their progress easily.",
    techStack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "React", icon: SiReact },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "shadcn/ui", icon: SiShadcnui },
      { label: "Supabase", icon: SiSupabase },
      { label: "React Query", icon: SiReactquery },
      { label: "React Hook Form", icon: SiReacthookform },
      { label: "Zod", icon: SiZod },
    ],
    liveDemo: "https://my-agenda-sand.vercel.app",
    sourceCode: "https://github.com/Hibaz108/My-Agenda.git",
    imageWidth: 2420,
    imageHeight: 1418,
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: 2,
    title: "Styling & UI",
    items: ["Tailwind CSS", "Bootstrap", "shadcn/ui", "MUI"],
  },
  {
    id: 3,
    title: "State & Data",
    items: ["Zustand", "React Query"],
  },
  {
    id: 4,
    title: "API & Backend",
    items: ["REST APIs", "Supabase"],
  },
  {
    id: 5,
    title: "Forms & Validation",
    items: ["React Hook Form", "Zod"],
  },
  {
    id: 6,
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Figma"],
  },
];

export const socials: SocialLink[] = [
  { label: "Github", href: "https://github.com/Hibaz108" },
  { label: "Email", href: "mailto:hibbaa108@gmail.com" },
];
