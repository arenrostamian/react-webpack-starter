import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Routes from './routes'

class App extends Component {
  render () {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default withRouter(connect(mapStateToProps, null)(App))
