import React from 'react'
import Switch from './Switch.jsx'

const Card = ({
  extension: { iconPath, title, description },
  isSelected,
  onToggle,
  remove
}) => {
  return (
    <div className="card">
      <div className="flex flex-row gap-4">
        <img src={iconPath} alt={title} />
        <div className="flex flex-col">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button onClick={remove} className="remove-button">
          Remove
        </button>
        <Switch isSelected={isSelected} onToggle={onToggle} />
      </div>
    </div>
  )
}
export default Card
