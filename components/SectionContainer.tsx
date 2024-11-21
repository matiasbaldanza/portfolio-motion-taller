import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { navLinks } from '@/lib/data'

// Remove the '#' from the href to create the section id
// This assumes these ids are unique and the hrefs in 
// the Nav are all anchor links that start with '#'
type RemoveHash<T extends string> = T extends `#${infer Rest}` ? Rest : T;

interface SectionContainerProps {
  children?: React.ReactNode
  heading: string
  id: RemoveHash<typeof navLinks[number]['href']>
}

export default function SectionContainer({
  children,
  heading,
  id
}: SectionContainerProps) {
  console.log(id)

  return (
    <section
      id={id}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>
        {heading}
      </SectionHeading>
      {children}
    </section>
  )
}
