import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers'

const history = createHistory()
const initialState = {}
const routeMiddleware = routerMiddleware(history)

/* * add middleware / enhancers here * */
const middleware = [ routeMiddleware ]
const enhancers = [ applyMiddleware(...middleware) ]

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  initialState,
  composeWithDevTools(...enhancers)
)

export default store
