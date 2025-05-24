import React from 'react'
import Logo from './Logo.jsx'
import { useDark } from '../context/ThemeContext.jsx'

const Header = () => {
  const { isDark, setIsDark } = useDark()
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Logo color={isDark ? 'white' : 'black'} />
        </div>
        <div>
          <div className="toggler" onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <img src="/icon-sun.svg" alt="switch" />
            ) : (
              <img src="/icon-moon.svg" alt="switch" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
