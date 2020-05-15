import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head />
      <div id="title">Dashboard</div>
      <div>
        <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF">Go To Profile </Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
