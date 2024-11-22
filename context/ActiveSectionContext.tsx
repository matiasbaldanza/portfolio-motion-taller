"use client"

import React, { useState, createContext, useContext } from "react"
import type { SectionName } from "@/components/SectionContainer"

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null)

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export default function ActiveSectionContextProvider({
  children
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("home" as SectionName)
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  // We need to keep track of the time of the last click
  // to disable the intersection observer temporarily after a click
  // to prevent flickering, because the observer will keep triggering
  // as the user scrolls

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    )
  }
  return context
}