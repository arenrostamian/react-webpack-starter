require('react-hot-loader/patch')

import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from './store/store'

import createHistory from 'history/createBrowserHistory'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RedBox from 'redbox-react'

import App from './app'

injectTapEventPlugin()

const history = createHistory()

const consoleErrorReporter = ({error}) => <RedBox error={error} />

/* * wrapping App.js in Provider component to allow access to our redux store * */
const render = (App) => {
  ReactDOM.render(
    <AppContainer errorReporter={consoleErrorReporter}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const hotApp = require('./app.js').default
    render(hotApp)
  })
}
