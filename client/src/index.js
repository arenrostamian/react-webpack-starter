import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import Redbox from 'redbox-react'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const consoleErrorReporter = ({error}) => <Redbox error={error} />

ReactDOM.render(
  <AppContainer errorReporter={consoleErrorReporter}>
    <App />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const HotApp = require('./App.js').default
    ReactDOM.render(
      <AppContainer errorReporter={consoleErrorReporter}>
        <HotApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
