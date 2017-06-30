import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'

const history = createHistory()
const initialState = {}

/* * add middleware / enhancers here * */
const middleware = [ routerMiddleware(history) ]
const enhancers = [ applyMiddleware(...middleware) ]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(...enhancers)
)

export default store
