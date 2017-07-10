import React from 'react'
import { Redirect } from 'react-router'
import { Route, HashRouter } from 'react-router-dom'
import Auth from './auth/Auth'

/* * Components * */
import { NavBar } from './components'
import {
  Home,
  UserProfile
} from './containers'

const auth = new Auth()

const checkAuthentication = () => (
  auth.isAuthenticated()
  ? <UserProfile />
  : <Redirect to='/' />
)

const Routes = () => (
  <HashRouter>
    <div>
      <Route path='/' component={NavBar} />
      <Route exact path='/' component={Home} />
      <Route path='/profile' render={checkAuthentication} />
    </div>
  </HashRouter>
)

export default Routes
