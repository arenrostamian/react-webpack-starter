import 'react-hot-loader/patch'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Route, HashRouter } from 'react-router-dom'

/* * components * */
import { NavBar } from './components'
import {
  Home,
  UserProfile
} from './containers'

const checkAuthentication = ({ isAuthenticated }) => (
  isAuthenticated ? <UserProfile /> : <Redirect to='/' />
)

const App = (props) => {
  const { auth } = props
  return (
    <HashRouter>
      <div>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Home} />
        <Route path='/profile' render={() => checkAuthentication(auth)} />
      </div>
    </HashRouter>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps, null)(App)
