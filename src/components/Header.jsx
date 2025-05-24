import React from 'react'

const Header = ({isDark = true}) => {
    return (
        <div className="header">
            <img src="/logo.svg" alt="logo" />
            <div>{isDark ? (<img src="/icon-sun.svg" alt="switch"/>) : (<img src="/icon-moon.svg" alt="switch"/>)}</div>
        </div>
    )
}
export default Header
