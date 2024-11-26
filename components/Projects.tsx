"use client"

import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import { projectsData } from '@/lib/data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

import { verticalJumpVariants } from '@/lib/animations'
export default function Projects() {
  return (
    <motion.div
      variants={verticalJumpVariants}
      initial="initial"
      whileInView="final"
      viewport={{ once: true }}
    >
      <SectionContainer
        heading="Mis Proyectos"
        id="projects"
        className="flex flex-col px-4 sm:px-10 gap-4 [&>*]:text-balance [&>*]:leading-8"
      >
        <div className="flex flex-col h-full gap-4 sm:group-even:ml-[18rem]">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </SectionContainer>
    </motion.div>
  )
}
