import React from 'react'

import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Profile</div>
      <div id="username">{user}</div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
