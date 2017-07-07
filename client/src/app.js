import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

/* * Components * */
import { NavBar } from './components'
import {
  Home,
  UserProfile
} from './containers'

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={UserProfile} />
      </div>
    )
  }
}

const mapStateToProps = (store, props) => {
  return { store, props }
}

export default withRouter(connect(mapStateToProps, null)(App))
