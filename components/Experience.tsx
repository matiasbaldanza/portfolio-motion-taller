"use client"

import React from 'react'
import SectionContainer from '@/components/SectionContainer'

import { experiencesData } from '@/lib/data'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
// useTheme needed to apply theme to timeline component
import { useTheme } from '@/context/ThemeContext'

export default function Experience() {
  const { theme } = useTheme()
  return (
    <SectionContainer
      heading="Experiencia"
      id="experience"
      className="flex flex-col px-4 sm:px-10 gap-4 [&>*]:text-balance [&>*]:leading-8 md:max-w-5xl"
    >
      {/* VerticalTimeline can be animated with the prop animate={true} */}
      <VerticalTimeline lineColor="" /* animate={false} */>
        {Object.values(experiencesData)
          // TODO: Add a selector to reverse sort by date
          // TODO: Add a filter to select work by skills/technologies
          // .sort((a, b) => a.date.localeCompare(b.date))
          .map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize text-balance">{item.title}</h3>
                <p className="font-light italic !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-balance">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
    </SectionContainer>
  )
}
