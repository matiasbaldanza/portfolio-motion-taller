'use client'

import React from 'react'
import { BsMoon, BsSun, BsGear } from 'react-icons/bs'
import { useTheme, ThemeType } from '@/context/ThemeContext'

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  const themeIcons: Record<ThemeType, JSX.Element> = {
    light: <BsSun size={15} />,
    dark: <BsMoon size={15} />,
    system: <BsGear size={15} />,
  }

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-50 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:bg-opacity-50"
      onClick={toggleTheme}
    >
      {themeIcons[theme]}
    </button>
  )
}
