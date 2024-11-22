import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import { skillsData } from '@/lib/data'

export default function Skills() {
  return (
    <SectionContainer
      heading="Mis Habilidades"
      id="skills"
      className="flex flex-col px-4 sm:px-10 gap-4 [&>*]:text-balance [&>*]:leading-8 max-w-4xl"
    >
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li key={index}
            className="px-5 py-3 bg-white shadow-sm borderBlack rounded-xl dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
