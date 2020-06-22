import React from 'react'
import { FaReact } from 'react-icons/fa'

const Header = () => {
  return (
    <nav className="header h-16">
      <div className="flex justify-center items-center rounded">
        <a href="/">
          <FaReact size="24" className="h-16" />
        </a>
      </div>
    </nav>
  )
}

export default React.memo(Header)
