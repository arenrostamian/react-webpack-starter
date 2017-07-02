/* * Types * */
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'

/* * Actions * */
export const setSearchResults = ({ packageID }) => ({
  type: SET_SEARCH_RESULTS,
  payload: { packageID }
})

/* * Reducer * */
export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      const newState = Object.assign({}, state)
      const { packageID } = action.payload
      newState.packageID = packageID
      return newState
    }
    default: return state
  }
}
