import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers'

const history = createHistory()
const initialState = {
  routing: routerReducer
}
const routeMiddleware = routerMiddleware(history)

/* * add middleware / enhancers here * */
const middleware = [ routeMiddleware, thunk ]
const enhancers = [ applyMiddleware(...middleware) ]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(...enhancers)
)

export default store
