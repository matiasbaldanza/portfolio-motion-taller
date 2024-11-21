import React from 'react';

// **************************** Icons
import {
  FaChalkboardTeacher,
  FaReact,
} from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

// **************************** Content
export const siteMetadata = {
  title: 'Matías | Portfolio Personal',
  description: 'Matías es un desarrollador con 2 años de experiencia en desarrollo frontend',
  name: 'Matías',
  fullName: 'Matías Baldanza',
  email: 'matiasbaldanza@gmail.com',
}

export const navLinks = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Acerca de",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Soporte Técnico y Sysadmin",
    company: "Generación WiFi",
    location: "Argentina",
    description: "Responsable de servicio técnico y sysadmin (Windows Server y Linux).",
    date: "2004 - 2017",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Traductor de Inglés",
    company: "Freelance",
    location: "Argentina",
    description: "Traducción técnica y legal.",
    date: "2015 - 2023",
    icon: React.createElement(FaReact),
  },
  {
    title: "Aprendizaje autodidacta",
    company: "",
    location: "Argentina",
    description: "Aprendizaje autodidacta de tecnologías frontend y backend.",
    date: "2021 - 2022",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Desarrollador Frontend Freelance",
    company: "Freelance",
    location: "Argentina",
    description: "Desarrollo de aplicaciones web utilizando React, Next.js y Tailwind CSS.",
    date: "2022 - 2024",
    icon: React.createElement(FaReact),
  },
  {
    title: "Technical Content Creator",
    company: "DonWeb",
    location: "Argentina",
    description: "Creación de contenido técnico y talleres sobre devops, CI/CD, Docker, Linux, Frontend, Backend, etc.",
    date: "2024 - actualidad",
    icon: React.createElement(FaChalkboardTeacher),
  },
] as const;

// export const skillsCategories = [
//   "Frontend",
//   "Backend",
//   "DevOps",
// ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Remix.run",
  "Astro",
  "Tailwind",
  "Bootstrap",
  "Shadcn/ui",
  "Framer Motion",
  "GSAP",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Linux",
  "Docker",
  "Git",
  "GitHub Actions",
  "CI/CD",
] as const;