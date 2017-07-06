import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

/* * Utils * */
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppContainer } from 'react-hot-loader'
import RedBox from 'redbox-react'
import 'react-hot-loader/patch'

/* * App * */
import store from './store/store'
import app from './app'

injectTapEventPlugin()

const history = createHistory()

const consoleErrorReporter = ({error}) => <RedBox error={error} />

/* * wrapping App.js in Provider component to allow access to our redux store * */
const render = function (App) {
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

render(app)

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const hotApp = require('./app.js').default
    render(hotApp)
  })
}
