import React from 'react'
import Image from 'next/image'
import { projectsData } from '@/lib/data'

type ProjectCardProps = (typeof projectsData)[number]

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
}: ProjectCardProps): React.ReactElement {
  return (
    <article className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem] text-center sm:text-left">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
        <ul className="flex flex-wrap justify-center gap-2 mt-4 sm:justify-start sm:mt-auto">
          {tags.map((tag, index) => (
            <li key={index}
              className="bg-black/[0.7] py-2 px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 leading-none"
            >{tag}</li>
          ))}
        </ul>
      </div>
      <Image src={imageUrl} alt={title}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                    transition 

                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    group-even:right-[initial] group-even:-left-40
                    "
      />
    </article>
  )
}
