import React, { useState } from 'react'
import Card from './Card.jsx'
import extensions from '../assets/extensions.js'
import { AnimatePresence, motion } from 'motion/react'

const ExtensionList = ({ searchTerm }) => {
  const [filter, setFilter] = useState('all')

  const initialStates = extensions.reduce(
    (acc, extension) => ({ ...acc, [extension.id]: true }),
    {}
  )
  const [states, setStates] = useState(initialStates)
  const [removed, setRemoved] = useState([])

  const toggle = id => {
    setStates(prevState => ({ ...prevState, [id]: !prevState[id] }))
  }

  const remove = id => {
    if (window.confirm('Are you sure you want to remove this extension?')) {
      setRemoved(removed.concat(id))
    }
  }

  const filteredExtensions = extensions.filter(extension => {
    if (
      filter === 'all' &&
      !removed.includes(extension.id) &&
      extension.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return true
    if (
      filter === 'active' &&
      !removed.includes(extension.id) &&
      extension.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return states[extension.id]
    if (
      filter === 'inactive' &&
      !removed.includes(extension.id) &&
      extension.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return !states[extension.id]
  })

  return (
    <>
      <div className="flex flex-col md:flex-row w-sm md:w-xl lg:w-7xl md:justify-between items-center mt-12 md:mt-14">
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
      <div className="mt-10 w-full max-w-sm md:max-w-xl lg:max-w-7xl mx-auto">
        <ul>
          <AnimatePresence>
            {filteredExtensions.map(extension => (
              <motion.div
                key={extension.id}
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  extension={extension}
                  isSelected={states[extension.id]}
                  onToggle={() => toggle(extension.id)}
                  remove={() => remove(extension.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </ul>
        {filteredExtensions.length === 0 && (
          <p className="mt-50 text-xl text-white flex items-center justify-center">{`No ${filter} extensions`}</p>
        )}
      </div>
      <div className="min-h-20"></div>
    </>
  )
}
export default ExtensionList
