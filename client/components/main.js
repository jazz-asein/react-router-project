import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <div>
        <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
