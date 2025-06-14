import React from 'react'

const Switch = ({ isSelected, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`flex w-10 h-5 rounded-full transition-all duration-200 ${isSelected ? 'bg-orange-500' : 'dark:bg-gray-600 bg-[#c6c6c8]'}`}
    >
      <span
        className={`h-5 w-5 border border-[#c6c6c8] dark:border-gray-600 bg-white rounded-full transition-all duration-200 ${isSelected ? 'ml-5' : ''}`}
      />
    </button>
  )
}
export default Switch
