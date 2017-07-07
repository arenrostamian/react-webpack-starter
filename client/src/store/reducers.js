/* * Reducers * */
import { searchReducer } from './modules/search'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
  search: searchReducer,
  routing: routerReducer
})

export default reducer
