import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'

/* * add middleware / enhancers here * */
const middleware = [ thunk ]
const enhancers = [ applyMiddleware(...middleware), autoRehydrate() ]

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(...enhancers)
)

persistStore(store)

export default store
