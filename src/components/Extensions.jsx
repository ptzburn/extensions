import React from 'react'

const Extensions = () => {
  return (
    <div className="flex flex-col md:flex-row w-xs md:w-xl lg:w-7xl md:justify-between items-center mt-12 md:mt-14">
      <h1>Extensions List</h1>
      <div className="flex">
        <button className="sort-button mr-5">All</button>
        <button className="sort-button mr-5">Active</button>
        <button className="sort-button">Inactive</button>
      </div>
    </div>
  )
}
export default Extensions
