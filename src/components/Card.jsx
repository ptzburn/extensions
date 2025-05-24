import React from 'react'
import ToggleButton from './ToggleButton.jsx'

const Card = ({
  icon = '/logo-devlens.svg',
  title = 'DevLens',
  description = 'Quickly inspect page layouts and visualize element boundaries.'
}) => {
  return (
    <div className="card">
      <div className="flex flex-row gap-4">
        <img src={icon} alt={title} />
        <div className="flex flex-col">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="remove-button">Remove</button>
        <ToggleButton disableRipple />
      </div>
    </div>
  )
}
export default Card
