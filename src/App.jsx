import React, { useState } from 'react'
import Header from './components/Header.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ExtensionList from './components/ExtensionList.jsx'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="items-center flex flex-col">
      <ThemeProvider>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ExtensionList searchTerm={searchTerm} />
      </ThemeProvider>
    </div>
  )
}
export default App
