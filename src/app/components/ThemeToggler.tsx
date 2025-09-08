'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false) //track theme local mounted state

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='p-2 rounded-xl bg-gray-200 dark:bg-gray-800 transition-colors'
      aria-label='Toggle theme'
    >
      {isDark ? (
        <Sun className='w-5 h-5 text-yellow-400' />
      ) : (
        <Moon className='w-5 h-5 text-blue-500' />
      )}
    </button>
  )
}

export default ThemeToggler
