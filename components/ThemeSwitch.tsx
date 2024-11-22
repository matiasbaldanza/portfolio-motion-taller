'use client'

import React, { useState, useEffect } from 'react'
import { BsMoon, BsSun, BsGear } from 'react-icons/bs'

type Theme = 'light' | 'dark' | 'system'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>('system')
  const [systemPreference, setSystemPreference] = useState<'light' | 'dark'>('light')

  const applyTheme = (currentTheme: Theme) => {
    document.documentElement.classList.remove('light', 'dark')

    if (currentTheme === 'system') {
      document.documentElement.classList.add(systemPreference)
    } else {
      document.documentElement.classList.add(currentTheme)
    }
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') as Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme('system')
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const systemPref = mediaQuery.matches ? 'dark' : 'light'
    setSystemPreference(systemPref)

    // Update system preference on change
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemPref = e.matches ? 'dark' : 'light'
      setSystemPreference(newSystemPref)
      if (theme === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [theme])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, systemPreference])

  const toggleTheme = () => {
    const newTheme = theme === 'light'
      ? 'dark'
      : theme === 'dark'
        ? 'system'
        : 'light'

    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-50 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:bg-opacity-50"
      onClick={toggleTheme}
    >
      {theme === 'light' && <BsSun size={15} />}
      {theme === 'dark' && <BsMoon size={15} />}
      {theme === 'system' && <BsGear size={15} />}
    </button>
  )
}
