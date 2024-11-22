import React from 'react';

import { FaChalkboardTeacher, FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import { MdOutlineSupport } from "react-icons/md"
import { BsTranslate } from "react-icons/bs"

import corpcommentImg from "@/public/project-thumb-corpcomment.png";
import rmtdevImg from "@/public/project-thumb-rmtdev.png";
import wordanalyticsImg from "@/public/project-thumb-wordanalytics.png";



// **************************** Personal Data
export const personalData = {
  name: 'Matías',
  fullName: 'Matías Baldanza',
  email: 'matiasbaldanza@gmail.com',
  linkedin: 'https://www.linkedin.com/in/matiasbaldanza/',
  github: 'https://github.com/matiasbaldanza',
}

// **************************** Metadata
export const siteMetadata = {
  title: `${personalData.fullName} | Front-End Developer`,
  description: 'Matías es un desarrollador con 2 años de experiencia en desarrollo frontend',
}

// **************************** Content
export const navLinks = [
  {
    name: "Inicio",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Proyectos",
    href: "#projects",
  },
  {
    name: "Habilidades",
    href: "#skills",
  },
  {
    name: "Experiencia",
    href: "#experience",
  },
  {
    name: "Contacto",
    href: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Proyecto 1",
    description:
      "Proyecto de startup donde los usuarios pueden dar feedback público a empresas. Implementación full-stack.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Proyecto 2",
    description:
      "Una bolsa de trabajo remoto para developers. Hice el front-end. Incluye filtros, ordenamiento y paginación.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Proyecto 3",
    description:
      "Una aplicación web de analíticas sobre contenido de texto. Calcula la cantidad de palabras, caracteres y límites de publicación en redes sociales.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Content Creator",
    company: "DonWeb",
    location: "Argentina",
    description: "Creación de contenido técnico y talleres sobre devops, CI/CD, Docker, Linux, Frontend, Backend, etc.",
    date: "2024 - actualidad",
    icon: React.createElement(FaChalkboardTeacher),
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
    title: "Aprendizaje autodidacta",
    company: "",
    location: "Argentina",
    description: "Aprendizaje autodidacta de tecnologías frontend y backend.",
    date: "2021 - 2022",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Traductor de Inglés",
    company: "Freelance",
    location: "Argentina",
    description: "Traducción técnica y legal.",
    date: "2015 - 2023",
    icon: React.createElement(BsTranslate),
  },
  {
    title: "Soporte Técnico y Sysadmin",
    company: "Generación WiFi",
    location: "Argentina",
    description: "Responsable de servicio técnico y sysadmin (Windows Server y Linux).",
    date: "2004 - 2017",
    icon: React.createElement(MdOutlineSupport),
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