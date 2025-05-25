import React from 'react'
import Card from './Card.jsx'
import extensions from '../assets/extensions.js'

const ExtensionList = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-xs md:w-xl lg:w-7xl md:justify-between items-center mt-12 md:mt-14">
        <h1>Extensions List</h1>
        <div className="flex">
          <button className="sort-button mr-5">All</button>
          <button className="sort-button mr-5">Active</button>
          <button className="sort-button">Inactive</button>
        </div>
      </div>
      <div className="mt-10 w-full max-w-xs md:max-w-xl lg:max-w-7xl mx-auto">
        <ul>
          {extensions.map(extension => (
            <Card key={extension.id} extension={extension} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default ExtensionList
