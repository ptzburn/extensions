import React from 'react'
import Header from './components/Header.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  )
}
export default App
