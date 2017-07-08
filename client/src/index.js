import React from 'react'
import ReactDOM from 'react-dom'

/* * Routing / State * */
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import App from './App'

/* * Utils * */
import injectTapEventPlugin from 'react-tap-event-plugin'
import RedBox from 'redbox-react'

require('react-hot-loader/patch')
injectTapEventPlugin()

const consoleErrorReporter = ({error}) => <RedBox error={error} />

/* * wrapping App.js in Provider component to allow access to our redux store * */
const omNomNom = (App) => {
  ReactDOM.render(
    <AppContainer errorReporter={consoleErrorReporter}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

omNomNom(App)

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const hotApp = require('./App.js').default
    omNomNom(hotApp)
  })
}
