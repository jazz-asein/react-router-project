import React from 'react'
import { Route } from 'react-router-dom'
import Header from './general/header'
import Main from './main'
import Profile from './profile'
import Dashboard from './dashboard'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div>
          <div>
            <Route exact path="/dashboard/" component={() => <Dashboard />} />
          </div>
          <div>
            <Route exact path="/dashboard/main" component={() => <Main />} />
          </div>
          <div>
            <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
