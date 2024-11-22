'use client'

import React, {
  useState,
  useEffect,
  createContext,
  useContext
} from 'react'

export type ThemeType = 'light' | 'dark' | 'system'

type ThemeContextType = {
  theme: ThemeType
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export default function ThemeContextProvider({
  children
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Load initial theme from localStorage or default to 'system'
    return (window.localStorage.getItem('theme') as ThemeType | null) || 'system'
  })

  const getSystemPreference = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const applyTheme = (currentTheme: ThemeType) => {
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
    const newTheme: ThemeType = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }
  return context
}
