import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { base } from '../base/config'

/* * Reducers * */
import { searchReducer } from './modules/search'

import { LOGOUT } from './modules/firebase'

const appReducer = combineReducers({
  routing: routerReducer,
  search: searchReducer
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    base.auth().signOut()
    state = { routing: routerReducer }
  }
  return appReducer(state, action)
}

export default rootReducer
