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
      const { packageID } = action.payload
      const newState = Object.assign({ packageID }, state)
      return newState
    }
    default: return state
  }
}
