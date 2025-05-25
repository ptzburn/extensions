import React from 'react'
import Header from './components/Header.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ExtensionList from './components/ExtensionList.jsx'

const App = () => {
  return (
    <div className="items-center flex flex-col">
      <ThemeProvider>
        <Header />
        <ExtensionList />
      </ThemeProvider>
    </div>
  )
}
export default App
