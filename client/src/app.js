import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import { NavBar } from './components'
import {
  Home,
  UserProfile
} from './containers'

const history = createHistory()

class app extends Component {
  // constructor (props) {
  //   super(props)
  //   /* * firebasey things * */
  // }

  render () {
    return (
      <ConnectedRouter history={history}>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={UserProfile} />
        </div>
      </ConnectedRouter>
    )
  }
}

export default app
