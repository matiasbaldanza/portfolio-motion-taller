"use client"

import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { navLinks } from '@/lib/data'
import clsx from 'clsx'
import { useSectionInView } from '@/hooks/hooks'

export type SectionName = (typeof navLinks)[number]['href']

// Remove the '#' from the href to create the section id
// This assumes these ids are unique and the hrefs in 
// the Nav are all anchor links that start with '#'
type RemoveHash<T extends string> = T extends `#${infer Rest}` ? Rest : T;

interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
  heading: string
  id: RemoveHash<typeof navLinks[number]['href']>
}

export default function SectionContainer({
  children,
  heading,
  id,
  className
}: SectionContainerProps) {
  const { ref } = useSectionInView(id as SectionName)

  return (
    <section
      id={id}
      ref={ref}
      className={clsx(
        'mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28',
        className
      )}
    >
      <SectionHeading>
        {heading}
      </SectionHeading>
      {children}
    </section>
  )
}
