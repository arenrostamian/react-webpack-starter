import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { base } from '../base/config'

import { LOGOUT } from './modules/firebase'

const appReducer = combineReducers({
  routing: routerReducer
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    base.auth().signOut()
    state = { routing: routerReducer }
  }
  return appReducer(state, action)
}

export default rootReducer
