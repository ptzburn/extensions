import React, { useState } from 'react'

const Switch = () => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <button
      onClick={() => setIsSelected(!isSelected)}
      className={`flex w-10 h-5 rounded-full transition-all duration-500 ${isSelected ? 'bg-orange-500' : 'dark:bg-gray-600 bg-[#c6c6c8]'}`}
    >
      <span
        className={`h-5 w-5 border border-[#c6c6c8] dark:border-gray-600 bg-white rounded-full transition-all duration-500 ${isSelected ? 'ml-5' : ''}`}
      />
    </button>
  )
}
export default Switch
