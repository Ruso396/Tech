import React from 'react'
import sunIcon from '../assets/sun_icon.svg'
import moonIcon from '../assets/moon_icon.svg'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button
      onClick={toggle}
      className="size-9 p-1.5 border border-gray-500 rounded-full flex items-center justify-center"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      <img src={theme === 'dark' ? sunIcon : moonIcon} alt="" />
    </button>
  )
}

export default ThemeToggleBtn
