import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

/* * Routing / State * */
import { AppContainer } from 'react-hot-loader'
import store from './store/store'
import App from './App'

/* * Utils * */
import injectTapEventPlugin from 'react-tap-event-plugin'
import Redbox from 'redbox-react'

injectTapEventPlugin()

const consoleErrorReporter = ({error}) => <Redbox error={error} />

/* * wrapping App.js in Provider component to allow access to our redux store * */
ReactDOM.render(
  <AppContainer errorReporter={consoleErrorReporter}>
    <Provider store={store}>
      <App />
    </Provider>
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
