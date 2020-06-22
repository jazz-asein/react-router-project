import React from 'react'
import { FaReact } from 'react-icons/fa'

const Dummy = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <FaReact size="64" className="h-16 icon" />
        <a
          href="/dashboard"
          className="text-center my-40 lg:w-1/6 px-10 py-3 bg-gray-300 hover:bg-gray-700 rounded-lg w-full"
        >
          Dashboard
        </a>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
