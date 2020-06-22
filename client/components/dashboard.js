import React from 'react'

import { Link } from 'react-router-dom'
import Head from './general/head'

const Dashboard = () => {
  return (
    <div className="wrapper flex flex-col py-10">
      <Head />
      <div id="title" className="text-center">
        <h1>Dashboard</h1>
      </div>
      <div className="sm-box flex flex-col font-bold rounded-lg lg:w-1/6 w-full">
        <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF">
          <div className="w-full px-10 py-3 hover:bg-gray-300 rounded-t-lg">Go To Profile </div>
        </Link>

        <Link to="/dashboard/main">
          <div className="w-full px-10 py-3 hover:bg-gray-300 rounded-b-lg">Go To Main</div>
        </Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
