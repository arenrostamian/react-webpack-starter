import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { NavBar } from './components'
import {
  Home,
  UserProfile
} from './containers'

class app extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={UserProfile} />
      </div>
    )
  }
}

export default app
