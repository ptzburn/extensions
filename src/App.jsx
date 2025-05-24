import React from 'react'
import Header from './components/Header.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Extensions from './components/Extensions.jsx'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="items-center flex flex-col">
      <ThemeProvider>
        <Header />
        <Extensions />
        <Card />
      </ThemeProvider>
    </div>
  )
}
export default App
