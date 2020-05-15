import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Main from './main'
import Profile from './profile'
import Dashboard from './dashboard'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="flex content-between bg-blue-700 font-bold rounded-lg shadow-lg p-10 hover:text-white hover:bg-blue-200 mr-2">
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
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
