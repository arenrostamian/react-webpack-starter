import React from 'react'
import { Route } from 'react-router-dom'

/* * Components * */
import { NavBar } from './components'
import {
  Home,
  UserProfile
} from './containers'

const Routes = () => (
  <div>
    <Route path='/' component={NavBar} />
    <Route path='/om-nom-nom' component={Home} />
    <Route path='/you' component={UserProfile} />
  </div>
)

export default Routes
