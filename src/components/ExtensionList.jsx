import React, { useState } from 'react'
import Card from './Card.jsx'
import extensions from '../assets/extensions.js'

const ExtensionList = () => {
  const [filter, setFilter] = useState('all')

  const initialStates = extensions.reduce(
    (acc, extension) => ({ ...acc, [extension.id]: true }),
    {}
  )
  const [states, setStates] = useState(initialStates)

  const toggle = id => {
    setStates(prevState => ({ ...prevState, [id]: !prevState[id] }))
  }

  const filteredExtensions = extensions.filter(extension => {
    if (filter === 'all') return true
    if (filter === 'active') return states[extension.id]
    if (filter === 'inactive') return !states[extension.id]
  })

  return (
    <>
      <div className="flex flex-col md:flex-row w-xs md:w-xl lg:w-7xl md:justify-between items-center mt-12 md:mt-14">
        <h1>Extensions List</h1>
        <div className="flex">
          <button
            className={`sort-button dark:text-white mr-5 ${filter === 'all' ? 'dark:bg-[#f35c51] bg-[#e0463f] text-white' : 'bg-white dark:bg-[#1f2535] text-[#0a1643] dark:hover:bg-[#525868] hover:bg-[#f6fafb]'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`sort-button dark:text-white mr-5 ${filter === 'active' ? 'dark:bg-[#f35c51] bg-[#e0463f] text-white' : 'bg-white dark:bg-[#1f2535] text-[#0a1643] dark:hover:bg-[#525868] hover:bg-[#f6fafb]'}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`sort-button dark:text-white ${filter === 'inactive' ? 'dark:bg-[#f35c51] bg-[#e0463f] text-white' : 'bg-white dark:bg-[#1f2535] text-[#0a1643] dark:hover:bg-[#525868] hover:bg-[#f6fafb]'}`}
            onClick={() => setFilter('inactive')}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="mt-10 w-full max-w-xs md:max-w-xl lg:max-w-7xl mx-auto">
        <ul>
          {filteredExtensions.map(extension => (
            <Card
              key={extension.id}
              extension={extension}
              isSelected={states[extension.id]}
              onToggle={() => toggle(extension.id)}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
export default ExtensionList
