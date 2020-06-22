import React from 'react'
import { Link } from 'react-router-dom'
import Head from './general/head'

const Main = () => {
  return (
    <div className="wrapper flex flex-col py-10">
      <Head title="Hello" />
      <div id="title" className="text-center">
        <h1>Main</h1>
      </div>
      <div className="sm-box font-bold rounded-lg w-full lg:w-1/6">
        <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF">
          <div className="w-full lg:w- px-10 py-3 hover:bg-gray-300 rounded-t-lg">Go To Profile</div>
        </Link>
        <Link to="/dashboard">
          <div className="w-full px-10 py-3 hover:bg-gray-300 rounded-b-lg">Go To Root </div>
        </Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
