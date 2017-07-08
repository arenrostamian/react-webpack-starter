import { combineReducers } from 'redux'

/* * Reducers * */
import { authReducer } from './modules/auth'
import { searchReducer } from './modules/search'

const reducer = combineReducers({
  auth: authReducer,
  search: searchReducer
})

export default reducer
