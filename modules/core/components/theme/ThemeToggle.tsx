'use client'

import { Button, Spinner } from '@nextui-org/react'
import { Moon02Icon, Sun01Icon } from 'hugeicons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      {!mounted ? (
        <Spinner color='default' size='sm' />
      ) : (
        currentTheme === 'dark' ? (
          <Button
            isIconOnly
            variant="light"
            onClick={() => setTheme('light')}
            className="dark:data-[hover=true]:bg-default/5"
          >
            <Sun01Icon />
          </Button>
        ) : (
          <Button
            isIconOnly
            variant="light"
            onClick={() => setTheme('dark')}
            className="data-[hover=true]:bg-default/5"
          >
            <Moon02Icon />
          </Button>
        )
      )}
    </div>
  )
}

export default ThemeToggle