import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'
import store from './store/store'
import { ConnectedRouter, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { NavBar } from './components'

import {
  Home,
  UserProfile
} from './containers'

const App = () => {
  return (
    <div>
      <Route path='/' component={NavBar} />
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={UserProfile} />
    </div>
  )
}

// class App extends Component {
//   // constructor (props) {
//   //   super(props)
//   // }

//   render () {
//     return (
//       <div>
//         <NavBar />
//         <Route exact path='/' component={Home} />
//         <Route path='/profile' component={UserProfile} />
//       </div>
//     )
//   }
// }

// const mapStateToProps = (store, props) => {
//   return { store, props }
// }

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//     pushRoute: location => dispatch(push(location))
//   }, dispatch)

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default App
