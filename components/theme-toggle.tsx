'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    if (!mounted) return

    const html = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }

    setIsDark(newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-secondary/70 hover:bg-secondary active:bg-muted/80 transition-all duration-200 text-foreground touch-manipulation border border-border/40 hover:border-border/60 hover:shadow-sm"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Theme: ${isDark ? 'Dark' : 'Light'}`}
    >
      {isDark ? (
        <Sun size={18} className="flex-shrink-0 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon size={18} className="flex-shrink-0 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  )
}
