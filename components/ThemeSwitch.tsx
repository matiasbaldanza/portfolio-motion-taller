'use client'

import React, { useState, useEffect } from 'react'
import { BsMoon, BsSun, BsGear } from 'react-icons/bs'

type Theme = 'light' | 'dark' | 'system'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Load initial theme from localStorage or default to 'system'
    return (window.localStorage.getItem('theme') as Theme | null) || 'system'
  })

  const getSystemPreference = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const applyTheme = (currentTheme: Theme) => {
    document.documentElement.classList.remove('light', 'dark')
    const savedTheme = currentTheme === 'system' ? getSystemPreference() : currentTheme
    document.documentElement.classList.add(savedTheme)
  }

  useEffect(() => {
    applyTheme(theme)

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleSystemThemeChange = () => applyTheme('system')

      mediaQuery.addEventListener('change', handleSystemThemeChange)
      return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const themeIcons: Record<Theme, JSX.Element> = {
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
