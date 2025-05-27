import React from 'react'
import Logo from './Logo.jsx'
import { useDark } from '../context/ThemeContext.jsx'

const Header = ({ searchTerm, setSearchTerm }) => {
  const { isDark, setIsDark } = useDark()
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Logo color={isDark ? 'white' : 'black'} />
        </div>
        <div className="flex gap-2">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="toggler" onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <img src="/icon-sun.svg" alt="switch" />
            ) : (
              <img src="/icon-moon.svg" alt="switch" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
