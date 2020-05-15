import React from 'react'

import Head from './head'
import Header from './header'
import Footer from './footer'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-700 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component
        </div>
      </div>
      <Footer />
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
