"use client"

import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

export default function Skills() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    // la variante puede ser una función 
    // y recibir el index como argumento
    // para hacer delays escalonados
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <SectionContainer
      heading="Mis Habilidades"
      id="skills"
      className="flex flex-col px-4 sm:px-10 gap-4 [&>*]:text-balance [&>*]:leading-8 max-w-4xl"
    >
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li key={index}
            className="px-5 py-3 bg-white shadow-sm borderBlack rounded-xl dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}  // 
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </SectionContainer>
  )
}
