import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './general/head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div className="wrapper flex flex-col py-10">
      <Head title="Hello" />
      <div id="title" className="text-center">
        <h1>Profile</h1>
      </div>
      <div className="sm-box flex flex-col font-bold rounded-lg lg:w-1/6 w-full">
        <Link to="/dashboard/main">
          <div className="w-full px-10 py-3 hover:bg-gray-300 rounded-t-lg">Go To Main</div>
        </Link>
        <div id="username" className="w-full px-10 py-3 hover:bg-gray-300">
          {user}
        </div>
        <Link to="/dashboard">
          <div className="w-full px-10 py-3 hover:bg-gray-300 rounded-b-lg">Go To Root</div>
        </Link>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
